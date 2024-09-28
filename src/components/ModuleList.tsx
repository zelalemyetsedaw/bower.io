import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

interface Module {
  name: string;
  homepage?: string;
  description?: string;
  owner?: { login: string };  // Optional
  stars: number;
  licenses?: string;
  published_at?: string;  // New field for publish date
}

interface ModuleListProps {
  query: string;
  sortByStars: boolean;
  setSortByStars: (sort: boolean) => void;
}

const ModuleList: React.FC<ModuleListProps> = ({ query, sortByStars, setSortByStars }) => {
  const [modules, setModules] = useState<Module[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [page, setPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchModules = async () => {
      setLoading(true);
      setError(null);

      try {
        const apiKey = process.env.REACT_APP_LIBRARIES_API_KEY;
        const response = await axios.get(
          `https://libraries.io/api/search?q=${query}&page=${page}&per_page=5&sort=${sortByStars ? 'stars' : 'relevance'}&api_key=${apiKey}`
        );

        const { data } = response;
        setModules(data);
        setTotalPages(data.length);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch modules. Please try again.');
        setLoading(false);
      }
    };

    fetchModules();
  }, [query, sortByStars, page]);

  const Spinner = () => (
    <div className="flex justify-center items-center">
      <div className="w-8 h-8 border-4 border-blue-500 border-dashed rounded-full animate-spin"></div>
    </div>
  );


  // Handle loading and errors
  if (loading) return <div className='mt-5'><Spinner /></div>;
  if (error) return <p>{error}</p>;
  if (!modules.length) return <p>No modules found.</p>;

  return (
    <div className="w-full p-4">
      {/* Sort by stars or relevance */}
      <div className="flex justify-between items-center mb-4">
        <Pagination totalPages={totalPages} setPage={setPage} currentPage={page} />
        
        <div className="flex items-center">
          <label htmlFor="sort" className="mr-2 text-sm font-bold">Sort by:</label>
          <select
            id="sort"
            value={sortByStars ? 'stars' : 'relevance'}
            onChange={(e) => setSortByStars(e.target.value === 'stars')}
            className="p-2 border rounded-md"
          >
            <option value="relevance">Relevance</option>
            <option value="stars">Stars</option>
          </select>
        </div>
      </div>

      {/* Responsive table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border-collapse border border-gray-200 text-left table-auto">
          <thead>
            <tr>
              <th className="px-4 py-2 border-b-2 font-semibold">Module</th>
              <th className="px-4 py-2 border-b-2 font-semibold">Owner </th>
              <th className="px-4 py-2 border-b-2 font-semibold">Stars</th>
            </tr>
          </thead>
          <tbody>
            {modules.map((module) => (
              <tr key={module.name} className="border-t">
                {/* Module Info */}
                <td className="px-4 py-2 whitespace-normal break-words">
                  <h3 className="font-bold">{module.name}</h3>
                  <p className="text-sm text-gray-500">
                    {module.description || 'No description available.'}
                  </p>
                  {module.homepage && (
                    <a
                      href={module.homepage}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-500 hover:underline text-sm"
                    >
                      Homepage
                    </a>
                  )}
                  <p className="text-xs text-gray-400">Published: {module.published_at || 'Unknown'}</p>
                </td>

                {/* Owner & License */}
                <td className="px-4 py-2">
                  
                  <p><strong></strong> {module.licenses || 'N/A'}</p>
                </td>

                {/* Stars */}
                <td className="px-4 py-2 text-center">
                  <p className="font-semibold">{module.stars}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      
    </div>
  );
};

export default ModuleList;

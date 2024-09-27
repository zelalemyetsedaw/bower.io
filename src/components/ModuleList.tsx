import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Pagination from './Pagination';

interface Module {
  name: string;
  owner?: { login: string };  // Optional
  stars: number;
  description?: string;
  homepage?: string;
  repository_url?: string;
  keywords?: string[];
  forks?: number;
  licenses?: string;
}

interface ModuleListProps {
  query: string;
  sortByStars: boolean;
}

const ModuleList: React.FC<ModuleListProps> = ({ query, sortByStars }) => {
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

        

        const { data} = response;
        setModules(data);
        setTotalPages(data.length);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch modules. Please try again.');
        setLoading(false);
      }
    };

    fetchModules()
  }, [query, sortByStars, page]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  if (!modules.length) return <p>No modules found.</p>;

  return (
    <div className="w-3/4 p-4">
      <ul>
        {modules.map((module) => (
          <li key={module.name} className="p-4 border-b">
            <h3 className="font-bold text-lg">{module.name}</h3>
            <p><strong>Description:</strong> {module.description || 'No description available.'}</p>
            <p><strong>Stars:</strong> {module.stars} | <strong>Forks:</strong> {module.forks || 0}</p>
            <p><strong>Owner:</strong> {module.owner ? module.owner.login : 'Unknown'}</p>
            <p><strong>License:</strong> {module.licenses || 'N/A'}</p>
            {module.homepage && (
              <p>
                <strong>Homepage:</strong> <a href={module.homepage} target="_blank" rel="noopener noreferrer">{module.homepage}</a>
              </p>
            )}
            {module.repository_url && (
              <p>
                <strong>Repository URL:</strong> <a href={module.repository_url} target="_blank" rel="noopener noreferrer">{module.repository_url}</a>
              </p>
            )}
            {module.keywords && (
              <p><strong>Keywords:</strong> {module.keywords.join(', ')}</p>
            )}
          </li>
        ))}
      </ul>
      <Pagination totalPages={totalPages} setPage={setPage} currentPage={page} />
    </div>
  );
};

export default ModuleList;

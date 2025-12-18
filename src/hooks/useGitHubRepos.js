import { useState, useEffect } from 'react';
import axios from 'axios';

const useGitHubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `https://api.github.com/users/${username}/repos?sort=updated&per_page=100`
        );
        setRepos(response.data);
        setError(null);
      } catch (err) {
        setError('Failed to fetch repositories');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    if (username) {
      fetchRepos();
    }
  }, [username]);

  return { repos, loading, error };
};

export default useGitHubRepos;


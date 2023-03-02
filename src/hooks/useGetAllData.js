import { useState, useEffect } from 'react';
import getData from '../utils/getData';

export default function useGetAllData() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const dataFetched = await getData('http://localhost:3000/data');
        setData(dataFetched);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    })();
  }, []);

  return { data, loading, error };
}

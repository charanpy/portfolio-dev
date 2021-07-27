import useSWR from 'swr';
import fetcher from './fetcher';

const MongoService = () => {
  const { data, error } = useSWR(`/api/connect-mongo`, fetcher);
  return {
    data,
    isError: error,
  };
};

export default MongoService;

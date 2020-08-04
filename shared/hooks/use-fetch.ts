import axios from 'axios';
import useSWR from 'swr';

export function useFetch(url: string, initialData?: any) {
  const fetcher = (url: string) => axios.get(url).then((res) => res.data);
  const { data, error } = useSWR(url, fetcher, {
    initialData,
  });
  return {
    data,
    loading: !error && !data,
    error,
  };
}

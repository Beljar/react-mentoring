import { useLocation, useNavigate } from 'react-router';

export const useQuery: () => [(name: string) => void, (params: object) => void] = () => {
  const { search } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(search);
  const set = (newParams: Record<string, string>) => {
    Object.entries(newParams).map((entry) => params.set(entry[0], entry[1]));
    navigate({ search: params.toString() });
  };
  return [params.get, (newParams: Record<string, string>) => set(newParams)];
};

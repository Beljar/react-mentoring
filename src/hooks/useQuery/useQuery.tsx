import { generatePath, useLocation, useNavigate, useParams } from 'react-router';

export const useQuery: () => [(name: string) => string, (params: object) => void] = () => {
  const { searchQuery } = useParams();
  const navigate = useNavigate();
  const params = new URLSearchParams(searchQuery);
  const set = (newParams: Record<string, string>) => {
    Object.entries(newParams).map((entry) => params.set(entry[0], entry[1]));
    navigate(generatePath('/search/:searchParams', { searchParams: params.toString() }));
  };
  return [(name: string) => params.get(name), (newParams: Record<string, string>) => set(newParams)];
};

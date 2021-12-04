import { generatePath, useLocation, useNavigate, useParams } from 'react-router';
import { SearchQuery } from 'src/entities/searchQuery';

export const useQuery: <T = SearchQuery>() => [T, (params: object, searchString?: string) => void] = <T,>() => {
  const { searchQuery } = useParams();
  const { search: queryParams } = useLocation();
  const navigate = useNavigate();
  const params = new URLSearchParams(queryParams);
  const query = Array.from(params.entries()).reduce((acc, item) => ({ ...acc, [item[0]]: item[1] }), {});
  const set = (newParams: Record<string, string>, searchString?: string) => {
    Object.entries(newParams).forEach((entry) => {
      if (entry[1]) {
        params.set(entry[0], entry[1]);
      } else {
        params.delete(entry[0]);
      }
    });
    navigate({
      pathname: generatePath('/search/:searchQuery', {
        searchQuery: searchString === undefined ? searchQuery || '' : searchString,
      }),
      search: params.toString(),
    });
  };
  return [query as T, set];
};

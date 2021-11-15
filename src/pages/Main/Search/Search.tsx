import { connect } from 'react-redux';
import * as React from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';

import { Button } from 'src/components/ui/Button';
import { Input } from 'src/components/ui/Input/Input';

import { loadMovies, setSearch } from 'src/actions';
import { useParams, useLocation } from 'react-router';
import scss from './styles.scss';

type Props = {
  searchString?: string;
  onSearch?: (searchString) => void;
  onLoad?: () => void;
};

export const Search: React.FC<Props> = ({ searchString = '', onSearch, onLoad }) => {
  const [curSearchString, setCurSearchString] = React.useState('');
  const navigate = useNavigate();
  React.useEffect(() => {
    setCurSearchString(searchString);
  }, [searchString]);
  return (
    <div className={scss.search}>
      <div className={scss.searchBg} />
      <div className={scss.searchImgWrapper}>
        <div className={scss.searchImg} />
      </div>
      <div className={scss.searchContentWrapper}>
        <div className={scss.searchContent}>
          <div className={scss.searchBlock}>
            <h1>FIND YOUR MOVIE</h1>
            <div className={scss.row}>
              <Input
                id="search"
                value={curSearchString}
                placeholder="What do you want to watch?"
                onChange={(value) => {
                  setCurSearchString(value);
                }}
              />
              <Button
                className={scss.searchBtn}
                width={223}
                height={57}
                type="filled"
                onClick={() => {
                  navigate({
                    pathname: '/search',
                    search: `?search=${curSearchString}`,
                  });
                }}
              >
                Search
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  searchString: state.request.searchBy === 'title' ? state.request.search : '',
});

const mapDispatchToProps = (dispatch) => ({
  onSearch: (searchString) => dispatch(setSearch(searchString)),
  onLoad: () => dispatch(loadMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Search);
function useQuery() {
  throw new Error('Function not implemented.');
}

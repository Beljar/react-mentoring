import * as React from 'react';
import { connect } from 'react-redux';
import { useQuery } from 'src/hooks/useQuery';
import { Button } from 'src/components/ui/Button';
import { Input } from 'src/components/ui/Input/Input';

import scss from './styles.scss';

type Props = {
  searchString?: string;
};

export const Search: React.FC<Props> = ({ searchString = '' }) => {
  const [curSearchString, setCurSearchString] = React.useState('');
  const [, setQuery] = useQuery();
  React.useEffect(() => {
    setCurSearchString(searchString);
  }, [searchString]);
  const searchHandle = () => {
    setQuery({ searchBy: 'title' }, curSearchString);
  };
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
                onEnter={searchHandle}
              />
              <Button className={scss.searchBtn} width={223} height={57} type="filled" onClick={searchHandle}>
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

export default connect(mapStateToProps)(Search);

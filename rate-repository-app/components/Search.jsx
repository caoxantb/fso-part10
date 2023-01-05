import { Searchbar } from 'react-native-paper';

const RepoSearch = ({searchKeyword, setSearchKeyword}) => {
  const onChangeSearch = query => setSearchKeyword(query);

  return (
    <Searchbar
      placeholder="Search"
      onChangeText={onChangeSearch}
      value={searchKeyword}
    />
  );
};

export default RepoSearch;
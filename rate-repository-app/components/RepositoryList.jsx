import { FlatList, View, StyleSheet } from "react-native";
import RepositoryItem from "./RepositoryItem";
import useRepositories from "../hooks/useRepositories";
import RepoPicker from "./RepoPicker";
import { useState } from "react";
import RepoSearch from "./Search";
import { useDebounce } from "use-debounce";

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});

const ItemSeparator = () => <View style={styles.separator} />;

const renderItem = ({ item }) => {
  return <RepositoryItem item={item} id={item.id} />;
};

const RepositoryList = () => {
  const [orderBy, setOrderBy] = useState("CREATED_AT");
  const [orderDirection, setOrderDirection] = useState("ASC");
  const [searchKeyword, setSearchKeyword] = useState("");
  const [debouncedKeyword] = useDebounce(searchKeyword, 500);
  const { repositories, fetchMore } = useRepositories(8, orderBy, orderDirection, debouncedKeyword);

  return (
    <RepositoryListContainter
      repositories={repositories}
      orderBy={orderBy}
      setOrderBy={setOrderBy}
      orderDirection={orderDirection}
      setOrderDirection={setOrderDirection}
      searchKeyword={searchKeyword}
      setSearchKeyword={setSearchKeyword}
      fetchMore={fetchMore}
    />
  );
};

export const RepositoryListContainter = ({
  repositories,
  orderBy,
  setOrderBy,
  orderDirection,
  setOrderDirection,
  searchKeyword,
  setSearchKeyword,
  fetchMore
}) => {
  const repositoryNodes = repositories
    ? repositories.edges.map((edge) => edge.node)
    : [];

  return (
    <FlatList
      testID="repositoryList"
      data={repositoryNodes}
      ListHeaderComponent={
        <>
          <RepoPicker
            orderBy={orderBy}
            setOrderBy={setOrderBy}
            orderDirection={orderDirection}
            setOrderDirection={setOrderDirection}
          />
          <RepoSearch
            searchKeyword={searchKeyword}
            setSearchKeyword={setSearchKeyword}
          />
        </>
      }
      ItemSeparatorComponent={ItemSeparator}
      renderItem={renderItem}
      onEndReached={() => fetchMore()}
      onEndReachedThreshold={0.5}
    />
  );
};

export default RepositoryList;

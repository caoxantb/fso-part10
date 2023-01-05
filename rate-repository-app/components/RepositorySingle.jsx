import { useParams } from "react-router-native";
import useSingleRepo from "../hooks/useSingleRepo";
import RepositoryItem from "./RepositoryItem";
import Review from "./Review";
import { FlatList, View, StyleSheet } from "react-native";

const RepositorySingle = () => {
  const params = useParams();
  const { repo, fetchMore, reviews } = useSingleRepo(params.id, 2);

  const renderItem = ({ item }) => {
    // console.log(item)
    return <Review review={item} />;
  };

  const styles = StyleSheet.create({
    separator: {
      height: 10,
    },
  });

  const ItemSeparator = () => <View style={styles.separator} />;

  return (
    repo && (
      <>
        <RepositoryItem item={repo} url={repo.url} />
        <FlatList
          data={reviews}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={renderItem}
          onEndReached={() => {fetchMore()}}
          onEndReachedThreshold={0.5}
        />
      </>
    )
  );
};

export default RepositorySingle;

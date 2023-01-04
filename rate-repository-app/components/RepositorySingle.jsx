import { useParams } from "react-router-native";
import useSingleRepo from "../hooks/useSingleRepo";
import RepositoryItem from "./RepositoryItem";
import Review from "./Review";
import { FlatList, View, StyleSheet } from "react-native";


const RepositorySingle = () => {
  const params = useParams();
  const { repo } = useSingleRepo(params.id);

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
          data={repo.reviews.edges.map((review) => review.node)}
          ItemSeparatorComponent={ItemSeparator}
          renderItem={renderItem}
        />
      </>
    )
  );
};

export default RepositorySingle;

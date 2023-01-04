import { View, StyleSheet, Image, FlatList, Pressable } from "react-native";
import { Link, useNavigate } from "react-router-native";
import GithubButtonLink from "./GithubButtonLink";
import Text from "./Text";

const RepositoryItemBase = ({ item }) => {
  const {
    fullName,
    description,
    language,
    stargazersCount,
    forksCount,
    reviewCount,
    ratingAverage,
    ownerAvatarUrl,
  } = item;

  const styles = StyleSheet.create({
    container: {
      backgroundColor: "white",
      padding: 20,
    },
    infoContainer: {
      display: "flex",
      flexDirection: "row",
    },
    image: {
      width: 50,
      height: 50,
    },
    languageText: {
      color: "white",
    },
    languageDiv: {
      borderRadius: 3,
      backgroundColor: "#0366d6",
      padding: 5,
    },
    statsContainer: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
    },
  });

  return (
    <View testID="repositoryItem" style={styles.container}>
      <View style={styles.infoContainer}>
        <Image
          style={styles.image}
          source={{
            uri: ownerAvatarUrl,
          }}
        />
        <View style={{ alignItems: "flex-start", flex: 1 }}>
          <Text fontWeight="bold">{fullName}</Text>
          {/* <View style={{ alignItems: "flex-start", flexDirection: "row" }}>
            <Text style={{ flex: 1 }}>{description}</Text>
          </View> */}
          <Text>{description}</Text>
          <View style={styles.languageDiv}>
            <Text style={styles.languageText}>{language}</Text>
          </View>
        </View>
      </View>

      <View style={styles.statsContainer}>
        <View
          style={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>{forksCount}</Text>
          <Text>Stars</Text>
        </View>
        <View
          style={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>{stargazersCount}</Text>
          <Text>Forks</Text>
        </View>
        <View
          style={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>{reviewCount}</Text>
          <Text>Reviews</Text>
        </View>
        <View
          style={{
            flexGrow: 1,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>{ratingAverage}</Text>
          <Text>Rating</Text>
        </View>
      </View>
    </View>
  );
};

const RepositoryItem = ({ item, id, url }) => {
  return id ? (
    <Pressable onPress={() => {}}>
      <Link to={`/repo/${id}`}>
        <RepositoryItemBase item={item} />
      </Link>
    </Pressable>
  ) : (
    <>
      <RepositoryItemBase item={item} />
      <GithubButtonLink url={url} />
    </>
  );
};

export default RepositoryItem;

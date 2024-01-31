import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  FlatList,
} from "react-native";
import { useUserData } from "../hooks/useUserData";
import { Colors } from "../constants/Colors";

const HomeScreen = () => {
  const { data: userData, isLoading, isError } = useUserData();

  if (isLoading) {
    return (
      <ActivityIndicator
        size={"large"}
        color={Colors.primary}
        style={styles.loader}
      />
    );
  }

  if (isError) {
    return alert("Error fetching data");
  }

  const renderItem = ({ item }) => (
    <View style={styles.userItem}>
      <View style={styles.emailview}>
        <Text style={styles.itemText}>Email:</Text>
        <Text style={styles.DataText}>{item.userData.email}</Text>
      </View>
      <View style={styles.emailview}>
        <Text style={styles.itemText}>Phone:</Text>
      <Text style={styles.DataText}>{item.userData.phoneNumber}</Text>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={userData}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  heading: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: Colors.primary,
  },
  flatList: {
    width: "95%",
  },
  userItem: {
    borderWidth: 1,
    borderColor: Colors.gray_color,
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    backgroundColor: Colors.secondary,
  },
  itemText: {
    fontSize: 16,
    fontWeight: "500",
    color: Colors.white_color,
    marginRight: 5
  },
  emailview:{
    flexDirection:"row",
  },
  DataText:{
    fontStyle:"italic",
    fontSize: 14,
    color: Colors.white_color,
    fontWeight:"400"
  }
});

export default HomeScreen;

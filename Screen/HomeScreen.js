import React from "react";
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  Pressable,
} from "react-native";
import { SwipeListView } from "react-native-swipe-list-view";
import { useUserData, deleteUser } from "../hooks/useUserData";
import { Colors } from "../constants/Colors";
import { Feather } from "@expo/vector-icons";

const HomeScreen = () => {
  const { data: userData, isLoading, isError, refetch } = useUserData();

  const renderItem = ({ item }) => (
    <Pressable
      style={styles.userItem}
      android_ripple={{ color: Colors.primary }}
    >
      <View style={styles.emailview}>
        <Text style={styles.itemText}>Email:</Text>
        <Text style={styles.DataText}>{item.userData.email}</Text>
      </View>
      <View style={styles.emailview}>
        <Text style={styles.itemText}>Phone:</Text>
        <Text style={styles.DataText}>{item.userData.phoneNumber}</Text>
      </View>
    </Pressable>
  );

  const renderHiddenItem = ({ item }) => (
    <View style={styles.rowBack}>
      <Pressable
        style={[styles.backRightBtn, styles.backRightBtnRight]}
        android_ripple={{ color: Colors.gray_color }}
      >
        <Feather name="edit" size={24} color={Colors.white_color} />
      </Pressable>
      <Pressable
        style={[styles.backRightBtn, styles.backRightBtnLeft]}
        android_ripple={{ color: Colors.gray_color }}
        onPress={() => handleDeleteItem(item.id)}
      >
        <Feather name="trash-2" size={24} color={Colors.white_color} />
      </Pressable>
    </View>
  );

  const handleDeleteItem = async (id) => {
    try {
      await deleteUser(id);
      refetch();
    } catch (error) {
      console.error("Error deleting item:", error);
    }
  };

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

  return (
    <View style={styles.container}>
      <SwipeListView
        data={userData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        keyExtractor={(item) => item.id.toString()}
        rightOpenValue={-115}
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
    marginRight: 5,
  },
  emailview: {
    flexDirection: "row",
  },
  DataText: {
    fontStyle: "italic",
    fontSize: 14,
    color: Colors.white_color,
    fontWeight: "400",
  },
  rowBack: {
    alignItems: "center",
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 10,
    borderRadius: 5,
  },
  backRightBtn: {
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    width: 50,
    height: 50,
    borderRadius: 70,
  },
  backRightBtnRight: {
    backgroundColor: Colors.primary,
    right: 60,
  },
  backRightBtnLeft: {
    backgroundColor: Colors.red_color,
    right: 0,
  },
});

export default HomeScreen;

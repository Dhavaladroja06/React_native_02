import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import WelCome from "./Screen/Welcome";
import SignUp from "./Screen/SignUp";
import Login from "./Screen/Login";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import HomeScreen from "./Screen/HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Colors } from "./constants/Colors";
import { DeviceEventEmitter, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const isLoggedInValue = await AsyncStorage.getItem("isLoggedIn");
        setIsLoggedIn(isLoggedInValue === "true");
      } catch (error) {
        console.error("Error retrieving authentication status:", error);
      } finally {
        setIsLoading(false);
      }
    };

    checkLoginStatus();
  }, []);

  const  handlelogout = () => {
    AsyncStorage.removeItem("isLoggedIn")
    DeviceEventEmitter.emit("logout")
  }

  DeviceEventEmitter.addListener("UserLogin", () => setIsLoggedIn(true));
  DeviceEventEmitter.addListener("logout", () => setIsLoggedIn(false));

  if (isLoading) {
    return (
      <ActivityIndicator
        color={Colors.primary}
        size={"large"}
        style={styles.loader}
      />
    );
  }

  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          {isLoggedIn ? (
            <>
              <Stack.Screen
                name="Home"
                component={HomeScreen}
                options={{
                  title:"UserList",
                  headerShown: true,
                  headerTintColor:Colors.primary,
                  headerRight: () => (
                    <TouchableOpacity
                      style={{ marginRight: 10 }}
                      onPress={handlelogout}
                    >
                      <Ionicons
                        name="log-out-outline"
                        size={24}
                        color={Colors.primary}
                      />
                    </TouchableOpacity>
                  ),
                }}
              />
            </>
          ) : (
            <>
              <Stack.Screen
                name="Welcome"
                component={WelCome}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Login"
                component={Login}
                options={{ headerShown: false }}
              />
              <Stack.Screen
                name="Signup"
                component={SignUp}
                options={{ headerShown: false }}
              />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
    </QueryClientProvider>
  );
}

const styles = StyleSheet.create({
  loader: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});


export default App
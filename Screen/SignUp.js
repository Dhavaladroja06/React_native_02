import {
  View,
  Text,
  Image,
  Pressable,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import Button from "../components/Button";
import { Colors } from "../constants/Colors";

const Signup = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  return (
    <SafeAreaView style={styles.safeAreaview}>
      <View style={styles.container}>
        <View style={styles.title}>
          <Text style={styles.CreateAccount}>Create Account</Text>

          <Text style={styles.Connect}>Connect with your friend today!</Text>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.lable}>Email address</Text>

          <View style={styles.inputcontainer}>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={Colors.Black_color}
              keyboardType="email-address"
              style={{
                width: "100%",
              }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.lable}>Mobile Number</Text>

          <View style={styles.phone}>
            <Text style={styles.phonetext}>+91</Text>

            <TextInput
              placeholder="Enter your phone number"
              placeholderTextColor={Colors.Black_color}
              keyboardType="numeric"
              style={{
                width: "100%",
              }}
              maxLength={10}
            />
          </View>
        </View>

        <View style={{ marginBottom: 12 }}>
          <Text style={styles.lable}>Password</Text>

          <View style={styles.inputcontainer}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={Colors.Black_color}
              secureTextEntry={isPasswordShown}
              style={{
                width: "100%",
              }}
              maxLength={8}
            />

            <TouchableOpacity
              onPress={() => setIsPasswordShown(!isPasswordShown)}
              style={styles.icon}
            >
              {isPasswordShown == true ? (
                <Ionicons name="eye-off" size={24} color={Colors.Black_color} />
              ) : (
                <Ionicons name="eye" size={24} color={Colors.Black_color} />
              )}
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.Checkbox}>
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? Colors.primary : undefined}
          />

          <Text>I aggree to the terms and conditions</Text>
        </View>

        <Button title="Sign Up" filled style={styles.signup} />

        <View style={styles.orview}>
          <View style={styles.orline} />
          <Text style={{ fontSize: 14 }}>Or Sign up with</Text>
          <View style={styles.orline} />
        </View>

        <View style={styles.buttomview}>
          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={styles.fbButton}
          >
            <Image
              source={require("../assets/facebook.png")}
              style={styles.iconimage}
              resizeMode="contain"
            />

            <Text>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={styles.fbButton}
          >
            <Image
              source={require("../assets/google.png")}
              style={styles.iconimage}
              resizeMode="contain"
            />

            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.Alreadyview}>
          <Text style={styles.Alreadytext}>Already have an account</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.login}>Login</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeAreaview: {
    flex: 1,
    backgroundColor: Colors.white_color,
  },
  container: {
    flex: 1,
    marginHorizontal: 22,
  },
  title: {
    marginVertical: 22,
  },
  CreateAccount: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: Colors.Black_color,
  },
  Connect: {
    fontSize: 16,
    color: Colors.Black_color,
  },
  lable: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 8,
  },
  inputcontainer: {
    width: "100%",
    height: 48,
    borderColor: Colors.Black_color,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 15,
  },
  phone: {
    width: "100%",
    height: 48,
    borderColor: Colors.Black_color,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: 15,
  },
  phonetext: {
    borderRightWidth: 1,
    width: "10%",
    marginRight: 5
  },
  icon: {
    position: "absolute",
    right: 12,
  },
  Checkbox: {
    flexDirection: "row",
    marginVertical: 6,
  },
  signup: {
    marginTop: 18,
    marginBottom: 4,
  },
  orline: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.gray_color,
    marginHorizontal: 10,
  },
  orview: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  buttomview: {
    flexDirection: "row",
    justifyContent: "center",
  },
  fbButton: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    height: 52,
    borderWidth: 1,
    borderColor: Colors.gray_color,
    marginRight: 4,
    borderRadius: 10,
  },
  iconimage: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  Alreadyview: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  Alreadytext: {
    fontSize: 16,
    color: Colors.Black_color,
  },
  login: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: "bold",
    marginLeft: 6,
  },
});

export default Signup;

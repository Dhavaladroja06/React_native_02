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
import { Colors } from "../constants/Colors";
import Button from "../components/Button";

const Login = ({ navigation }) => {
  const [isPasswordShown, setIsPasswordShown] = useState(false);
  const [isChecked, setIsChecked] = useState(false);

  return (
    <SafeAreaView style={styles.Container}>
      <View style={styles.mainview}>
        <View style={styles.welcomView}>
          <Text style={styles.Welcometext}>Hi Welcome Back ! 👋</Text>

          <Text style={styles.Hellotext}>
            Hello again you have been missed!
          </Text>
        </View>

        <View style={styles.lable}>
          <Text style={styles.LableText}>Email address</Text>

          <View style={styles.TextinputView}>
            <TextInput
              placeholder="Enter your email address"
              placeholderTextColor={Colors.Black_color}
              keyboardType="email-address"
              style={styles.Textinputwidth}
            />
          </View>
        </View>

        <View style={styles.lable}>
          <Text style={styles.LableText}>Password</Text>

          <View style={styles.TextinputView}>
            <TextInput
              placeholder="Enter your password"
              placeholderTextColor={Colors.Black_color}
              secureTextEntry={isPasswordShown}
              style={styles.Textinputwidth}
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

        <View style={styles.checkboxview}>
          <Checkbox
            style={{ marginRight: 8 }}
            value={isChecked}
            onValueChange={setIsChecked}
            color={isChecked ? Colors.primary : undefined}
          />

          <Text>Remenber Me</Text>
        </View>

        <Button title="Login" filled style={styles.login} />

        <View style={styles.orView}>
          <View style={styles.ormainview} />
          <Text style={{ fontSize: 14 }}>Or Login with</Text>
          <View style={styles.orlineview} />
        </View>

        <View style={styles.ButoomView}>
          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={styles.FbButtom}
          >
            <Image
              source={require("../assets/facebook.png")}
              style={styles.fbimage}
              resizeMode="contain"
            />

            <Text>Facebook</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => console.log("Pressed")}
            style={styles.FbButtom}
          >
            <Image
              source={require("../assets/google.png")}
              style={styles.fbimage}
              resizeMode="contain"
            />

            <Text>Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.accountView}>
          <Text style={styles.accounttext}>Don't have an account ?</Text>
          <Pressable onPress={() => navigation.navigate("Signup")}>
            <Text style={styles.Registertext}>Register</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: Colors.white_color,
  },
  mainview: {
    flex: 1,
    marginHorizontal: 22,
  },
  Welcometext: {
    fontSize: 22,
    fontWeight: "bold",
    marginVertical: 12,
    color: Colors.Black_color,
  },
  Hellotext: {
    fontSize: 16,
    color: Colors.Black_color,
  },
  welcomView: {
    marginVertical: 22,
  },
  lable: {
    marginBottom: 12,
  },
  LableText: {
    fontSize: 16,
    fontWeight: "400",
    marginVertical: 8,
  },
  TextinputView: {
    width: "100%",
    height: 48,
    borderColor: Colors.Black_color,
    borderWidth: 1,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    paddingLeft: 22,
  },
  Textinputwidth: {
    width: "100%",
  },
  icon: {
    position: "absolute",
    right: 12,
  },
  checkboxview: {
    flexDirection: "row",
    marginVertical: 6,
  },
  login: {
    marginTop: 18,
    marginBottom: 4,
  },
  orView: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
  },
  orlineview: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.gray_color,
    marginHorizontal: 10,
  },
  ButoomView: {
    flexDirection: "row",
    justifyContent: "center",
  },
  ormainview: {
    flex: 1,
    height: 1,
    backgroundColor: Colors.gray_color,
    marginHorizontal: 10,
  },
  FbButtom: {
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
  fbimage: {
    height: 36,
    width: 36,
    marginRight: 8,
  },
  accountView: {
    flexDirection: "row",
    justifyContent: "center",
    marginVertical: 22,
  },
  accounttext: {
    fontSize: 16,
    color: Colors.Black_color,
  },
  Registertext: {
    fontSize: 16,
    color: Colors.primary,
    fontWeight: "bold",
    marginLeft: 6,
  },
});

export default Login;

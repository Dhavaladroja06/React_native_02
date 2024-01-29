import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Colors, Transform } from "../constants/Colors";
import Button from "../components/Button";
const WelCome = ({ navigation }) => {
  return (
    <LinearGradient
      style={styles.linearGradient}
      colors={[Colors.secondary, Colors.primary]}
    >
      <View style={{ flex: 1 }}>
        <Image source={require("../assets/hero1.jpg")} style={styles.image1} />
        <Image source={require("../assets/hero3.jpg")} style={styles.image2} />
        <Image source={require("../assets/hero3.jpg")} style={styles.image3} />
        <Image source={require("../assets/hero2.jpg")} style={styles.image4} />
      </View>
      <View style={styles.contantView}>
        <Text style={styles.LetsGet}>Let's Get</Text>
        <Text style={styles.Started}>Started</Text>
        <View style={{ marginVertical: 22 }}>
          <Text style={styles.L1}>Connect with each other with chatting</Text>
          <Text style={styles.L2}>Calling, Enjoy Safe and private texting</Text>
        </View>

        <Button
          title="Join Now"
          onPress={() => navigation.navigate("Signup")}
          style={styles.Join}
        />
        <View style={styles.ButtomView}>
          <Text style={styles.AlreadyText}>Already have an account ?</Text>
          <Pressable onPress={() => navigation.navigate("Login")}>
            <Text style={styles.LoginText}>Login</Text>
          </Pressable>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  image1: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: 10,
    transform: Transform.transform1,
  },
  image2: {
    height: 100,
    width: 100,
    borderRadius: 20,
    position: "absolute",
    top: -30,
    left: 100,
    transform: Transform.transform2,
  },
  image3: {
    width: 100,
    height: 100,
    borderRadius: 20,
    position: "absolute",
    top: 130,
    left: -50,
    transform: Transform.transform3,
  },
  image4: {
    height: 200,
    width: 200,
    borderRadius: 20,
    position: "absolute",
    top: 110,
    left: 100,
    transform: Transform.transform4,
  },
  contantView: {
    paddingHorizontal: 22,
    position: "absolute",
    top: 400,
    width: "100%",
  },
  LetsGet: {
    fontSize: 50,
    fontWeight: "800",
    color: Colors.white_color,
  },
  Started: {
    fontSize: 46,
    fontWeight: "800",
    color: Colors.white_color,
  },
  L1: {
    fontSize: 16,
    color: Colors.white_color,
    marginVertical: 4,
  },
  L2: {
    fontSize: 16,
    color: Colors.white_color,
  },
  Join: {
    marginTop: 22,
    width: "100%",
  },
  ButtomView: {
    flexDirection: "row",
    marginTop: 12,
    justifyContent: "center",
  },
  AlreadyText: {
    fontSize: 16,
    color: Colors.white_color,
  },
  LoginText: {
    fontSize: 16,
    color: Colors.white_color,
    fontWeight: "bold",
    marginLeft: 4,
  },
});

export default WelCome;

import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Alert,
} from "react-native";
import axios from "axios";
import { useNavigation } from "@react-navigation/native";

const baseUrl = "http://10.0.2.2:4000";

function Login() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [validationButton, setvalidationButton] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);

  const navigation = useNavigation()

  useEffect(() => {
    if (phone.length >= 12 && password.length >= 6) {
      setvalidationButton(true);
    }
  }, [phone, password]);

  function submit() {
    console.log(phone, password);
    axios
      .post(`${baseUrl}/api/user/login`, {
        phone: phone,
        password: password,
      })
      .then((res) => {
        if (res.status === 200) {
          navigation.navigate("Home")
        }
      })
      .catch((err) => {
        console.log(err);
        showAlert("Login Error", err);
      });
  }

  const showAlert = (title, message) => {
    Alert.alert(
      title,
      message,
      [
        {
          text: "Отмена",
          style: "cancel",
        },
        {
          text: "OK",
          onPress: () => console.log("OK нажата"),
        },
      ],
      { cancelable: false }
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Phone:"
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setPhone(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Password:"
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>
      <TouchableOpacity>
        <Text style={styles.forgot_button}>Forgot Password?</Text>
      </TouchableOpacity>
      {validationButton && (
        <TouchableOpacity style={styles.loginBtn} onPress={submit}>
          <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    backgroundColor: "#ccc6c6",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    marginBottom: 40,
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    color: "#000",
  },
  forgot_button: {
    height: 30,
    // marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "blue",
  },
});

export default Login;
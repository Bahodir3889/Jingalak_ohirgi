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

const baseUrl = "http://10.0.2.2:4000";

function Register() {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [region, setRegion] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [validationButton, setvalidationButton] = useState(false);
  const [isLoginError, setIsLoginError] = useState(false);
  useEffect(() => {
    if (phone.length >= 12 && password.length >= 6) {
      setvalidationButton(true);
    }
  }, [phone, password]);

  function submit() {
    console.log(phone, password);
    axios
      .post(`${baseUrl}/api/user/register`, {
        name: name,
        age: age,
        sex: sex,
        region: region,
        phone: phone,
        password: password,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          showAlert("Register", "Register successfull!");
        }
      })
      .catch((err) => {
        console.log(err);
        showAlert("Register", err.message);
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
          placeholder="Name:"
          placeholderTextColor="#003f5c"
          onChangeText={(name) => setName(name)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Age:"
          placeholderTextColor="#003f5c"
          onChangeText={(age) => setAge(age)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Sex:"
          placeholderTextColor="#003f5c"
          onChangeText={(sex) => setSex(sex)}
        />
      </View>

      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="region:"
          placeholderTextColor="#003f5c"
          onChangeText={(region) => setRegion(region)}
        />
      </View>

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
        <Text style={styles.forgot_button}>Alredy have accoutn? Login</Text>
      </TouchableOpacity>
      {validationButton && (
        <TouchableOpacity style={styles.loginBtn} onPress={submit}>
          <Text style={styles.loginText}>Register</Text>
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
    color: "#fff",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "blue",
  },
});

export default Register;

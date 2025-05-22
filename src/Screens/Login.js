import React from "react";
import {
  View,
  Text,
  Button,
  StyleSheet,
  Dimensions,
  TextInput,
} from "react-native";

const windowWidth = Dimensions.get("window").width;
export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login</Text>

      <View style={styles.inputContainer}>
        <Text>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu email"
          keyboardType="email-address"
        />

        <Text>Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha"
          secureTextEntry
        />
      </View>

      <View style={styles.buttonContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate("Inicio")}
        />
      </View>

      <Text style={styles.subtitle}>Não tem login?</Text>

  
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "##A1C3B9",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  subtitle: {
    marginTop: 10,
  },
  inputContainer: {
    width: windowWidth * 0.8,
    marginBottom: 5,
  },
  input: {
    backgroundColor: "#A1C3B9",
    borderWidth: 1,
    backgroundColor: "#A1C3B9",
    borderColor: "",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: "#A1C3B9",
    margin: 5,
    width: windowWidth * 0.5,
    borderRadius: 10,
  },
});

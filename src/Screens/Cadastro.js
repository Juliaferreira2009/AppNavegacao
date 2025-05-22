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
      <Text style={styles.title}>Cadastro</Text>

      <View style={styles.inputContainer}>
        <Text>Nome de Usuario</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite seu Nome de Usuario"
          keyboardType="default"
        />

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
          keyboardType="visible-password"
          secureTextEntry
          //value={Senha}
        />

        <Text>Confirme Sua Senha</Text>
        <TextInput
          style={styles.input}
          placeholder="Digite sua senha novamente"
          secureTextEntry
          //value={ConfirmarSenha}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Cadastrar-Se"
          onPress={() => navigation.navigate("Inicio")}
        />
      </View>

      <Text style={styles.subtitle}>Já tem uma conta?</Text>

      <View style={styles.buttonContainer}>
        <Button title="Login" onPress={() => navigation.navigate("Login")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
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
    backgroundColor: "#fff",
    borderWidth: 1,
    borderColor: "#aaa",
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 8,
    marginBottom: 5,
  },
  buttonContainer: {
    backgroundColor: "#ddaedd",
    margin: 5,
    width: windowWidth * 0.5,
    borderRadius: 10,
  },
});

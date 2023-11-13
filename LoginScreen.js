import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    // Comprueba las credenciales (esto puede ser más complejo en una aplicación real)
    if (username === 'usuario1' && password === 'contraseña1') {
      try {
        // Almacena el estado de inicio de sesión
        await AsyncStorage.setItem('isLoggedIn', 'true');
        // Almacena el nombre de usuario
        await AsyncStorage.setItem('username', username);
        // Navega a la pantalla HomeScreen
        navigation.navigate('Home');
      } catch (error) {
        console.error('Error al almacenar datos de inicio de sesión:', error);
      }
    } else {
      // Manejo de credenciales incorrectas
      alert('Credenciales incorrectas');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nombre de usuario"
        value={username}
        onChangeText={setUsername}
      />
      <TextInput
        style={styles.input}
        placeholder="Contraseña"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Iniciar sesión" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
  },
});

export default LoginScreen;

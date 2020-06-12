import React, { useState } from 'react';
import { View, StyleSheet, ImageBackground, Image } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { TextInput, Button, Text, useTheme, Title } from 'react-native-paper';
const image = require('../assets/background.jpeg');
const logo = require('../assets/logo.png');

const SignupScreen = ({ navigation }: NavigationStackScreenProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ opacity: 0.5 }}
      >
        <Image style={styles.logo} source={logo} />
        <Title style={styles.title}>Create account</Title>
        <TextInput
          style={styles.input}
          label="Email"
          onChangeText={setEmail}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={styles.input}
          label="Password"
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Button
          style={styles.button}
          onPress={() => navigation.navigate('Signin')}
          mode="contained"
        >
          <Text style={{ color: colors.background }}>Go to Signin Screen</Text>
        </Button>
      </ImageBackground>
    </View>
  );
};

SignupScreen.navigationOptions = {
  headerShown: false,
};

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'cover',
    opacity: 10,
    justifyContent: 'center',
    paddingBottom: 100,
  },
  logo: {
    width: '100%',
    height: 150,
  },
  title: {
    margin: 10,
    marginVertical: 10,
    fontSize: 24,
  },
  container: {
    flex: 1,
  },
  input: {
    marginVertical: 1,
  },
  button: {
    marginTop: 30,
    justifyContent: 'center',
    paddingVertical: 5,
  },
});

export default SignupScreen;

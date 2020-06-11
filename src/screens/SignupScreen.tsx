import React from 'react';
import { View, StyleSheet, ImageBackground } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';
import { TextInput, Button, Text, useTheme, Title } from 'react-native-paper';
const image = require('../assets/background.jpeg');

const SignupScreen = ({ navigation }: NavigationStackScreenProps) => {
  const { colors } = useTheme();
  return (
    <View style={styles.container}>
      <ImageBackground
        source={image}
        style={styles.image}
        imageStyle={{ opacity: 0.5 }}
      >
        <TextInput style={styles.input} label="Email" />
        <TextInput style={styles.input} label="Password" />
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
    justifyContent: 'center',
    opacity: 10,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    flexDirection: 'column',
    textAlign: 'center',
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

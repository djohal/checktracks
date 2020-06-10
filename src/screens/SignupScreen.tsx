import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

const SignupScreen = ({ navigation }: NavigationStackScreenProps) => {
  return (
    <View>
      <Text>SignupScreen</Text>
      <Button
        title="Go to Signin"
        onPress={() => navigation.navigate('Signin')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SignupScreen;

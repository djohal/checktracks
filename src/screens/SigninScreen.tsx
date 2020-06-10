import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

const SigninScreen = ({ navigation }: NavigationStackScreenProps) => {
  return (
    <View>
      <Text>SigninScreen</Text>
      <Button
        title="Go to main flow"
        onPress={() => navigation.navigate('mainFlow')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SigninScreen;

import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { NavigationStackScreenProps } from 'react-navigation-stack';

const TrackListScreen = ({ navigation }: NavigationStackScreenProps) => {
  return (
    <View>
      <Text>TrackListScreen</Text>
      <Button
        title="Go to track detail"
        onPress={() => navigation.navigate('TrackDetail')}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;

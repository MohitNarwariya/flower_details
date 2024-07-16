// screens/FlowerDetailScreen.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FlowerDetailScreen = ({ route }) => {
  const { flower } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{flower.name}</Text>
      <Text>{flower.description}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
});

export default FlowerDetailScreen;

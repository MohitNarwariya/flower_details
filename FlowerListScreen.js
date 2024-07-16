// screens/FlowerListScreen.js
import React, { useState, useEffect } from 'react';
import { View, FlatList, Text, TouchableOpacity, StyleSheet } from 'react-native';
import axios from 'axios';

const FlowerListScreen = ({ navigation }) => {
  const [flowers, setFlowers] = useState([]);

  useEffect(() => {
    axios.get('https://mocki.io/v1/86dc0d4f-652d-4fc3-80d3-573d02697bb8')
      .then(response => {
        setFlowers(response.data);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.item} onPress={() => navigation.navigate('FlowerDetail', { flower: item })}>
      <Text style={styles.title}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <FlatList
        data={flowers}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  item: {
    padding: 20,
    marginVertical: 8,
    backgroundColor: 'pink',
  },
  title: {
    fontSize: 18,
  },
});

export default FlowerListScreen;

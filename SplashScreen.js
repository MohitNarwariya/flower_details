// screens/SplashScreen.js
import React, { useEffect } from 'react';
import { View, Image, StyleSheet,Text } from 'react-native';

const SplashScreen = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('FlowerList');
    }, 3000);
  }, [navigation]);

  return (
    <View style={styles.container}>
   <Image source={require('../components/assets/18.png')} style={styles.logo} />
      <Text>Hello APP</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor:'pink'
  },
  logo: {
    width: 200,
    height: 200,
  },
});

export default SplashScreen;

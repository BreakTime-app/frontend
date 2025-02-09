import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    console.log(navigation);
    navigation.replace('Login');
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>홈 화면</Text>
      <Button title="로그아웃" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;

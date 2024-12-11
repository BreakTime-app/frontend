import React from 'react';
import { View, Text, Button } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const handleLogout = () => {
    // 로그아웃 로직 (예: AsyncStorage에서 토큰 제거)
    navigation.replace('Login'); // LoginScreen으로 이동
  };

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>홈 화면</Text>
      <Button title="로그아웃" onPress={handleLogout} />
    </View>
  );
};

export default HomeScreen;

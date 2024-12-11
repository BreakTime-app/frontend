import React, { useState } from 'react';
import { Alert } from 'react-native';
import styled from 'styled-components/native';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    Alert.alert('로그인', `아이디: ${username}\n비밀번호: ${password}`);
  };

  return (
    <Container>
      <Title>로그인</Title>
      <Input
        placeholder="아이디"
        placeholderTextColor="#aaa"
        value={username}
        onChangeText={setUsername}
      />
      <Input
        placeholder="비밀번호"
        placeholderTextColor="#aaa"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button onPress={handleLogin}>
        <ButtonText>로그인</ButtonText>
      </Button>
      <LinkText>비밀번호를 잊으셨나요?</LinkText>
    </Container>
  );
};

// Styled Components
const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
  padding: 20px;
`;

const Title = styled.Text`
  font-size: 28px;
  font-weight: bold;
  color: #333;
  margin-bottom: 40px;
`;

const Input = styled.TextInput`
  width: 100%;
  height: 50px;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0 15px;
  background-color: #fff;
  margin-bottom: 20px;
`;

const Button = styled.TouchableOpacity`
  width: 100%;
  height: 50px;
  background-color: #4caf50;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 20px;
`;

const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: bold;
`;

const LinkText = styled.Text`
  color: #4caf50;
  font-size: 14px;
  margin-top: 10px;
`;

export default LoginScreen;
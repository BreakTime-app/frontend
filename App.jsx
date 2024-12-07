import React from 'react';
import { SafeAreaView } from 'react-native';
import styled from 'styled-components/native';

const Container = styled(SafeAreaView)`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;

const Text = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #333;
`;

function App() {
  return (
    <Container>
      <Text>HI</Text>
    </Container>
  );
}

export default App;

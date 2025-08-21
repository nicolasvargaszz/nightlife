import React from 'react';
import { View, Text } from 'react-native';

export default function App() {
  return (
    <View style={{
      flex: 1,
      backgroundColor: '#222',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Text style={{ color: 'white', fontSize: 24 }}>Hola Web 👋</Text>
    </View>
  );
}
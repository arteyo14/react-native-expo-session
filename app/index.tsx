import About from '@/components/ui/About';
import MyStyle from '@/Style';
import React from 'react';
import { Text, View } from 'react-native';

export default function App() {
  return (
    <View style={MyStyle.container}>
      <Text style={[MyStyle.text, { fontSize: 80, fontWeight: 'bold' }]}>
        Hello Expo App
      </Text>
      <Text style={MyStyle.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
        voluptatem?
      </Text>
      <Text style={MyStyle.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
        reprehenderit quisquam natus a quis possimus.
      </Text>
      {/* Import Load Component About */}
      <About />
    </View>
  );
}

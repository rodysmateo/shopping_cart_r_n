import 'react-native-gesture-handler';
import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/components/screens/home/Home";
import ProductInfo from './src/components/screens/productInfo/ProductInfo';
import MyCart from './src/components/screens/myCart/MyCart';

const App = () => {

  const Stack = createNativeStackNavigator();

    return (
    <NavigationContainer>
      <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="MyCart" component={MyCart} />
        <Stack.Screen name="ProductInfo" component={ProductInfo} />
      </Stack.Navigator>
    </NavigationContainer>
    );
};
export default App;
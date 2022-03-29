
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import React from 'react';
import Navigationdrawer from './src/components/drawerpart';
import {NavigationContainer, Tabs} from '@react-navigation/native';
import Stack from './src/components/Navigation/Stack';
import Footer from './src/components/Navigation/Footer';
import { Banner } from 'react-native-paper';




const App = () => {
  return (
    <>
      <StatusBar
        barStyle="light-content"
        hidden={false}
        backgroundColor={'#87CEEB'}
      />
      
      <NavigationContainer>
       <Stack />
       {/* <Footer /> */}
      </NavigationContainer>
     
      
      
    </>
  );
};

export default App;

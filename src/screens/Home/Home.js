import {
  View,
  Text,
  Button,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';
//import Banner from '../../components/Banner'
import Listitems from '../../components/Listitems';
import Header from '../../components/Header';
//import Banner from '../../components/ListScreens/Banner';
const Home = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header navigation={navigation}/>
      <ScrollView>
        <Listitems />
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8e7e3',

    //position:'absolute',
    //justifyContent:'space-evenly'
  },
});
export default Home;

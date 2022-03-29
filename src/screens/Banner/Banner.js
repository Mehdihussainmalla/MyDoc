import {
  Text,
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  FlatList,SafeAreaView
} from 'react-native';
import React from 'react';

const Banner = ({navigation}) => {
  return(

    <SafeAreaView>
      <View>
       <TouchableOpacity  onPress={()=> navigation.navigate('Home')}>
      <Text> welcome back</Text>
      </TouchableOpacity>
      </View>
        
    </SafeAreaView>
  )
}

export default Banner;

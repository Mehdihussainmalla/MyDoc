import React from 'react';

import {View, Text, StyleSheet,Image} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Card= () => {
  return (
    <SafeAreaView>
    <View style={styles.container}>
      <View>
      <Text style={styles.notifications}>Add to card Details</Text>
      </View>
      <View>
      <Image 
      source={{uri:'https://media.istockphoto.com/photos/notification-bell-icon-isolated-on-white-picture-id1303181346?b=1&k=20&m=1303181346&s=170667a&w=0&h=ostWoZ4JzT6uivzr5ac0zQzJ-0oN75gDInex3Y-j-oA='}}
      style={styles.notificationimage}
      >


      </Image>
      </View>
    </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex:1,
    alignContent:'center' ,
  alignItems:'center',
  backgroundColor:'lightgrey'
  },

  notifications: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'blue',
  },
  notificationimage:{
    height:200,
    width:200,
    alignContent:'center',
    alignItems:'center'
  }
});

export default Card;

import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {DrawerContentScrollView, DrawerItem} from '@react-navigation/drawer';
import {
  Avatar,
  Title,
  Caption,
  Paragraph,
  Drawer,
  TouchableRipple,
  Switch,
} from 'react-native-paper';

export function DrawerContent(props) {
  return (
    <View style={{flex: 1}}>
      <DrawerContentScrollView {...props}>
        <View style={style.headingview}>
          <Image style={style.imageicon} source={require('./assets/pp.png')} />

          <Text style={style.headingtext}>Mehdi Hussain Malla</Text>
          <Caption style={style.caption}>@mehdihussainmalla</Caption>
        </View>

        <Drawer.Section
          style={{
            flex: 1,
            marginTop: 10,
            backgroundColor: 'yellow',
            justifyContent: 'center',
          }}>
          <DrawerItem
            label="Home"
            onPress={() => {
              props.navigation.navigate('Home');
            }}
          />
          <DrawerItem
            label="Cart"
            onPress={() => {
              props.navigation.navigate('Cart');
            }}
          />
          <DrawerItem
            label="Profile"
            onPress={() => {
              props.navigation.navigate('Profile');
            }}
          />
          <DrawerItem
            label="Banner"
            onPress={() => {
              props.navigation.navigate('Banner');
            }}
          />
        </Drawer.Section>
      </DrawerContentScrollView>
      <View
        style={{
          height: 2,
          flex: 0.1,
          width: '90%',
          justifyContent: 'center',
          alignContent: 'space-between',
          flexDirection: 'row',
        }}>
          <View style={style.logoutview}>
        <Image
          style={style.logouticon}
          source={require('./assets/logout-icon.png')}></Image>
        <Text style={style.logouttext}>Logout</Text>
        </View>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  headingview: {
    marginTop: 20,
    justifyContent: 'center',
    paddingRight: 25,
    margin: 10,
    paddingTop: 10,
  },
  headingtext: {
    fontSize: 20,
    alignContent: 'center',
    paddingLeft: 14,
  },
  imageicon: {justifyContent: 'center', height: 100, width: 100},
  caption: {
    paddingLeft: 14,
  },
  logoutview:
  {
    justifyContent:'center',
  flexDirection:'row',
  paddingRight:70
},
  logouttext:{
    fontSize: 15,
     padding: 10,
      paddingLeft: 30
    },
    logouticon:{
      height: 27,
       margin: 8,
        width: 26}
});

import React from 'react'
import{createBottomTabNavigator}from '@react-navigation/bottom-tabs'
import ViewNativeComponent from 'react-native/Libraries/Components/View/ViewNativeComponent'
import { NavigationContainer ,NavigationTab, Navigator, TabActions} from '@react-navigation/native'
import Home from '../src/screens/Home/Home'
import Card from '../src/screens/card/Card.js.js'
import Profile  from '../src/screens/Profile/Profile'
import {View,Text,Image,TouchableOpacity} from 'react-native'
function Footer() {

  const Tab=createBottomTabNavigator()
  return (

    

  <Tab.Navigator >
          
  <Tab.Screen  name="Home"  component={Home} options={{headerShown:false,tabBarIcon:({focused})=>(

<Image source={require('../src/assets/Home.png')} style={{width:30, height:30, top:5, }} />

  )}}/>
  <Tab.Screen name="Card" component={Card}  options={{headerShown:false, tabBarIcon:({focused})=>(
    <Image source={require('../src/assets/Addtocard.jpg')} style={{width:30, height:30, top:5, }} />
  )}}/>
  <Tab.Screen name="Profile" component={Profile} options={{headerShown:false, tabBarIcon:({focused})=>(

<Image   source={require('../src/assets/profile.png')} style={{height:31, width:31, top:5,}}/>

  )
  
  
  
  }}/>

  </Tab.Navigator>

  
  )
}


export default Footer
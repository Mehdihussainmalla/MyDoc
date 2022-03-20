import { View, Text, Button, TouchableOpacity, ScrollView, StyleSheet} from 'react-native'
import React from 'react'
import style from './style'
import Header from '../../components/Header'
import Banner from '../../components/Banner'
import Listitems from '../../components/Listitems'

const Home = () => {
  return (
      <View style={
        styles.container}>

          <Header/>
          <View style={{marginBottom:2}}>
          <Banner/>
          </View>
          <Listitems/>
          </View>
         
        
  )
}


const styles=StyleSheet.create({

  container:{
  flex:1,
  }
})
export default Home
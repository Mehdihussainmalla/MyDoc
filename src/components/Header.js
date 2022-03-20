import { View, Text,StyleSheet, SafeAreaView } from 'react-native'
import React from 'react'
import style from '../screens/Home/style'

const Header = () => {
  return (
        
<View style={styles.header}>
      <Text style={styles.text}>Mentor E-Commerce</Text>
    </View>
  )
}


const styles=StyleSheet.create(
    {
     header:{
        
         
         padding:10,
         backgroundColor:'lightgrey',
         fontSize:20,


     } ,
     text:{
         color:'#51426d',
         textAlign:'left',
         fontSize:20,
         padding:5
     }
    },
)

export default Header




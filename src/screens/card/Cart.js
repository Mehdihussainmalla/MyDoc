import React from 'react';

import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

const Cart = () => {
  return (
    <SafeAreaView>
      <View  style={{height:'100%', width:'100%'}}>
        <View style={styles.cartview}>
          <TouchableOpacity>
            <View style={styles.imageview}>
              <Image
                source={require('../../assets/left-arrow.png')}
                style={styles.arrowimage}></Image>
            </View>
          </TouchableOpacity>
          <View style={styles.textview}>
            <Text style={styles.carttext}>My Cart</Text>
          </View>
        </View>

      <View  style={styles.View}>

        <Image style={styles.cartimage} 
         source={require('../../assets/cartimage.jpg')}>

        </Image>
        <Text style={styles.text}>your cart is empty !</Text>
        <Text  style={styles.description}>Don't hesitate and bowse out catalog to find something beautiful for you !</Text>
       <View style={styles.buttonview}>

         <Text style={styles.buttontext}>START SHOPPING</Text>
       </View>

      </View>


        </View>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  cartview: {
  
    height: 50,
    flexDirection: 'row',
    //justifyContent: 'space-between',
    backgroundColor: 'blue',
  },
  imageview: {
    paddingTop: 8,
    margin: 2,
    marginLeft: 10,
    width: 50,
  },
  arrowimage: {
    height: 30,
    justifyContent: 'center',
    width: 28,
  },
  textview: {
    height: 50,
    justifyContent: 'center',
    width: 200,
    padding: 5,
  },
  carttext: {
    color: '#ffff',
    fontSize: 17,
    margin: 2,
  
  },
  View:{
    height:'100%',width:'100%',
    backgroundColor:'#ffff',
    //justifyContent:'center',
    alignItems:'center'
  },
  cartimage:{
    height:290,
    width:'90%',
    margin:25,
    paddingBottom:20,

  },
  text:{
    fontSize:20,
    paddingTop:10,
    color:'black',
    fontWeight:'bold',
  },
  description:{
    fontSize:15,
    paddingTop:15,
    fontWeight:'200',
    textAlign:'center'
  },
  buttonview:{
    borderRadius:20,
    height:50,
    width:142,
    margin:25,
    paddingTop:15,
    backgroundColor:'blue'
    
  },
  buttontext:{
    fontSize:16,
    color:'#ffff',
    textAlign:'center',
  }
});

export default Cart;

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Header = () => {
  return (
    <View style={styles.container}>
      <View style={styles.leftcontainer}>
        <TouchableOpacity>
          <View style={styles.hamburgerview}>
            <Image
              style={styles.hamburgurimage}
              source={require('../assets/hamburger-icon.png')}></Image>
          </View>
        </TouchableOpacity>

        <View style={styles.icon}>
          <Image
            source={require('../assets/logo-icon.png')}
            style={{height: 37, width: 60, marginLeft: 10}}></Image>
        </View>

        <View style={styles.textview}>
          <Text style={styles.headtext}>CLOUD</Text>
          <Text style={styles.bottomtext}>E-COMMERCE</Text>
        </View>
      </View>

      <View style={styles.righcontainer}>
        <TouchableOpacity>
          <View style={styles.searchicon}>
            <Image
              source={require('../assets/search-icon.png')}
              style={styles.searchiconlogo}></Image>
          </View>
        </TouchableOpacity>

        <TouchableOpacity>
          <View style={styles.cardview}>
            <Image
              source={require('../assets/cart-icon.png')}
              style={styles.cardicon}></Image>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'blue',
  },

  leftcontainer: {
    height: 40,
    width: 20,
    flexDirection: 'row',
  },
  hamburgerview: {
    height: 34,
    width: 25,
  },
  hamburgurimage: {
    height: 34,
    width: 55,
    margin: 2,
    paddingTop: 19,
    marginTop: 6,
  },

  icon: {
    height: 35,
    marginTop: 3,
    arginRight: 10,
  },
  textview: {
    height: 30,
    width: 30,
    //justifyContent:'space-between',
    // paddingTop:10
    marginBottom: 10,
  },
  headtext: {
    color: '#ffff',
    fontSize: 15,
    height: 20,
    width: 160,
    fontWeight: 'bold',
  },
  bottomtext: {
    color: '#ffff',
    fontSize: 15,
    height: 25,
    width: 160,
    fontWeight: 'bold',
  },

  righcontainer: {
    height: 30,
    width: 28,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  searchicon: {
    height: 30,
    paddingRight: 10,
    paddingTop: 5,
  },
  searchiconlogo: {
    height: 25,
    width: 20,
    marginTop: 6,
  },
  cardview: {
    height: 30,
    width: 45,
    paddingTop: 8,
    paddingRight: 75,
    flex: 1,
  },
  cardicon: {
    height: 27,
    width: 36,
    marginTop: 1,
  },
});

export default Header;

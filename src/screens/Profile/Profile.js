import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView>
      <View  style={{height:'100%', width:'100%'}}>
        <View style={styles.profilehead}>
          <Image
            source={require('../../assets/left-arrow.png')}
            style={styles.backlogo}></Image>
          
          <Text style={styles.profilename}>My Profile</Text>

          <View  >
            <Image
              source={require('../../assets/profile-icon.png')}
              style={styles.profileiconn}></Image>
          </View>
        </View>

        <View style={styles.pageview}>
          <View   style={styles.iconview}>
          <Image
            source={require('../../assets/mehdi.jpg')}
            style={styles.profileimage}></Image>
            </View>

          <Text style={styles.name}>Mehdi Hussain Malla</Text>
          <Text style={styles.email}>mehdihussainmalla@gmail.com</Text>

          <View style={styles.btn}>
            <Text style={styles.btntxt}> Account Details</Text>
          </View>
          <View style={styles.privacy}>
            <Image
              source={require('../../assets/privacy.png')}
              style={styles.profileicon}></Image>
            <Text style={styles.privacytext}>Privacy</Text>
            <Image
              source={require('../../assets/right-arrow.png')}
              style={styles.privacyimage}></Image>
          </View>

          <View style={styles.purchase}>
            <Image
              source={require('../../assets/history.png')}
              style={styles.purchasehistory}></Image>
            <Text style={styles.purchasetext}>Purchase history</Text>
            <Image
              source={require('../../assets/right-arrow.png')}
              style={styles.purchaseimage}></Image>
          </View>

          <View style={styles.helpsupport}>
            <Image
              source={require('../../assets/help-support.png')}
              style={styles.support}></Image>
            <Text style={styles.helpetext}>Help & Support</Text>
            <Image
              source={require('../../assets/right-arrow.png')}
              style={styles.helpsupportimage}></Image>
          </View>

          <View style={styles.settings}>
            <Image
              source={require('../../assets/setting-icon.png')}
              style={styles.settinglogo}></Image>
            <Text style={styles.settingtext}>Settings</Text>
            <Image
              source={require('../../assets/right-arrow.png')}
              style={styles.settingdirection}></Image>
          </View>

          <View style={styles.invite}>
            <Image
              source={require('../../assets/invite.png')}
              style={styles.invitelogo}></Image>
            <Text style={styles.invitetext}>Invite a friend</Text>
            <Image
              source={require('../../assets/right-arrow.png')}
              style={styles.invitereference}></Image>
          </View>

          <View style={styles.logout}>
            <Image
              source={require('../../assets/logout-icon.png')}
              style={styles.logoutlogo}></Image>
            <Text style={styles.logouttext}>Logout</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  profilehead: {
    height: 50,
    width: '100%',
    backgroundColor: 'blue',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backlogo: {
    width: 30,
    height: 30,
    margin: 10,
    marginLeft: 8,
  },
  profilename: {
    fontSize: 18,
    margin: 10,
    paddingTop: 5,
    color: '#FFFF',
    // fontWeight:'bold'
  },
  iconview:{
    height:150,
     width:150,
     //backgroundColor:'',
    margin:5,
     paddingBottom:10,
     borderRadius:45,

  },
  profileiconn: {
    height: 25,
    width: 25,
    marginTop: 13,
    // paddingTop:10,
    marginRight: 10,
  },
  pageview: {
    marginBottom:15,
    backgroundColor: '#ffff',
    height: '100%',
    width: '100%',
    //justifyContent:'center',
    //flexDirection:'row',
    alignItems: 'center',
    //backgroundColor: '#ffff',
  },
  profileimage: {
    height: 150,
    borderRadius: 50,
    flexDirection: 'row',
    justifyContent: 'center',
    width: 150,
    paddingTop: 2,
    alignItems: 'center',
  },
  name: {
    paddingTop: 4,
    fontStyle: 'italic',
    fontSize: 18,
    color: 'black',
    fontWeight: 'bold',
  },
  email: {
    fontWeight: '200',
    fontStyle: 'italic',
    paddingTop: 2,
  },
  btn: {
    height: 35,
    width: 160,
    margin: 10,
    backgroundColor: 'yellow',
    borderRadius: 20,
    justifyContent: 'center',
  },
  btntxt: {
    margin: 5,
    fontSize: 14,
    color: 'black',
    textAlign:'center'
  },
  privacy: {
    height: 40,
    justifyContent: 'space-between',
    width: '85%',
    flexDirection: 'row',
  },
  privacytext: {
    fontSize: 17,
    marginRight: 55,
    color: 'black',
    margin: 4,
    fontWeight: '300',
  },
  privacyimage: {
    height: 25,
    width: 27,
    marginRight: 12,
    margin:4,
    paddingRight:14,
  },
  profileicon: {
    height: 25,
    width: 27,
    paddingTop: 10,
    margin: 4,
  },

  purchase: {
    margin: 5,
    height: 45,
    justifyContent: 'space-between',
    width: '85%',
    flexDirection: 'row',
  },
  purchasetext: {
    fontSize: 17,
    color: 'black',
    margin: 7,
    fontWeight: '300',
  },
  purchasehistory: {
    height: 25,
    margin: 5,
    width: 27,
    marginRight: 30,
  },
  purchaseimage: {
    height: 25,
    width: 27,
    paddingTop: 8,
    margin: 4,
  },

  helpsupport: {
    margin: 4,
    height: 45,
    justifyContent: 'space-between',
    width: '85%',
    flexDirection: 'row',
  },
  helpetext: {
    fontSize: 17,
    color: 'black',
    fontWeight: '300',
    margin: 7,
  },
  support: {
    height: 25,
    margin: 5,
    width: 27,
    marginRight: 20,
  },
  helpsupportimage: {
    height: 25,
    width: 27,
    paddingTop: 10,
    margin: 4,
  },

  settings: {
    margin: 4,
    height: 45,
    justifyContent: 'space-between',
    width: '85%',
    flexDirection: 'row',
  },
  settingtext: {
    fontSize: 17,
    color: 'black',
    marginRight: 55,
    margin: 7,
    fontWeight: '300',
  },
  settinglogo: {
    height: 25,
    margin: 5,
    width: 27,
    margin:4,
    marginRight: 10,
  },
  settingdirection: {
    height: 25,
    width: 27,
    paddingTop: 10,
    margin: 4,
  },

  invite: {
    margin: 3,
    height: 45,
    justifyContent: 'space-between',
    width: '85%',
    flexDirection: 'row',
  },
  invitetext: {
    fontSize: 17,
    color: 'black',
    margin: 7,
    fontWeight: '300',
  },
  invitelogo: {
    height: 25,
    margin: 5,
    width: 27,
    marginRight: 10,
  },
  invitereference: {
    height:25,
    width: 27,
    paddingTop: 10,
    margin: 4,
  },

  logout: {
    margin: 3,
    height: 45,
    //justifyContent:'space-between',
    width: '85%',
    flexDirection: 'row',
  },
  logouttext: {
    fontSize: 17,
    color: 'black',
    margin: 7,
    paddingLeft: 85,
    fontWeight: '300',
  },
  logoutlogo: {
    height: 25,
    margin: 5,
    width: 27,
    marginRight: 1,
  },
});

export default Profile;

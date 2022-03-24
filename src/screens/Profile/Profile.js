import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';

const Profile = () => {
  return (
    <SafeAreaView>
      <TouchableOpacity>
        <View style={styles.container}>
          
            <Text style={styles.profiletext}>profile</Text>

            
              <Image
                style={styles.profileimage}
                source={{
                  uri: 'https://images.unsplash.com/photo-1579783483458-83d02161294e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=797&q=80',
                }}></Image>
            </View>
          
      
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    height:160,
    width:250,
    flex: 1,
    backgroundColor: '#00FFFF',
    alignContent: 'center',
  },

  profiletext: {
    backgroundColor: 'yellow',
    alignContent: 'center',
    fontSize: 35,
  },
});

export default Profile;

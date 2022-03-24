import { View, Text, SafeAreaView ,StatusBar} from 'react-native'
import React from 'react'
import { NavigationContainer, Tabs} from '@react-navigation/native'

import Footer  from './Footer/Footer'


const App = () => {
  return (
    <>
    
    <StatusBar barStyle=  'light-content' hidden={false} backgroundColor={'blue'}/>
     
     <NavigationContainer>
      <Footer />
     </NavigationContainer>
    
    </>
  )
}

export default App
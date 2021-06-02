import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Facebook from './Screens/fb';
import Instagram from './Screens/ig';

export default class App extends React.Component{
  render(){
    return (
      <View style={styles.container}>
        <Text>Buzz App</Text>
        <AppContainer />
      </View>
    );
  }
}

const TabNavigator = createBottomTabNavigator({
  FaceBook : {screen:Facebook, 
    navigationOptions:{tabBarIcon:({tintColor})=>(
      <Image 
      source={require('./assets/fb.png')}
      resizeMode='contain'
      style={{width:50, height:50}} />
    )}},
  Instagram : {screen:Instagram, 
    navigationOptions:{tabBarIcon:({tintColor})=>(
      <Image 
      source={require('./assets/insta.png')}
      resizeMode='contain'
      style={{width:20, height:20}} />
    )}},
})

const AppContainer = createAppContainer(TabNavigator)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

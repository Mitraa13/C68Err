import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Instagram extends React.Component() {
    render(){
        return (
        <View style={styles.container}>
            <Text style={styles.text}>Instagram</Text>
        </View>
        );
    }
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    text:{
        margin:10,
        textAlign:"center",
        fontSize:20,
        color:"deeppink",
    }
  });
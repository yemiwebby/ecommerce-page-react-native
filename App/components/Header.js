// import modules/library to help create a component
import React, { Component }  from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';

export default class Header extends Component{
  render () {
    return(
      <View style={styles.header}>
      <Image 
      source={require('../images/cart.png')}
      style={styles.cart}
      />
      <Text style={styles.logo}>
      E-commerce
      </Text>
    
      </View>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    height: 80,
    marginTop: 20,
    backgroundColor: '#fff',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'center',
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor: '#ccc'
  },
  cart: {
    height:40,
    width: 40
  },
  logo: {
      fontSize: 20,
      marginLeft: 10,
      fontStyle: 'italic',
      color:'#292929'
  }
});

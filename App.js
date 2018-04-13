// import modules/library to help create a component
import React, { Component }  from 'react';
import {StyleSheet, Text, View, ScrollView, Image, ImageBackground} from 'react-native';

import Header from './App/components/Header';
import Banner from './App/components/Banner';
import ContentContainer from './App/components/ContentContainer';

export default class App extends Component{
  render () {
    return(
      <ScrollView style={styles.container}>
      <Header />
      <Banner />
      <ContentContainer />
      </ScrollView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },

});

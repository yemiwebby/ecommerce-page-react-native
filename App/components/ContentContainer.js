// import modules/library to help create a component
import React, { Component }  from 'react';
import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import CustomImage from './CustomImage';

export default class ContentContainer extends Component{
  render () {
    return (
        <View style={styles.contentContainer}>

        <View style={styles.col2}>
        <CustomImage 
        imageSource={require('../images/fashion1.jpeg')}
        paragraph="Beautiful"
        />
        </View>

        <View style={styles.col1}>
        <CustomImage imageSource={require('../images/fashion2.jpg')}
        paragraph="Stand out"
        />
        </View>

        <View style={styles.contentBanner}>
        <CustomImage imageSource={require('../images/fashion3.jpg')}/>
        </View>

         <View style={styles.col1}>
        <CustomImage imageSource={require('../images/fashion5.jpeg')}/>
        </View>

        <View style={styles.col2}>
        <CustomImage imageSource={require('../images/fashion4.jpg')}/>
        </View>

        </View>
    );
  }
}


const styles = StyleSheet.create({
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        padding: 5,
    },
    col2: {
        flex: 2,
        padding: 5,
    },
    col1: {
        flex: 1,
        padding: 5,

    },
    contentBanner: {
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 5
    }
});

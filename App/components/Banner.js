import React, { Component } from 'react';
import {StyleSheet, Image, ImageBackground} from 'react-native';

import ImageOverlay from './ImageOverlay';



export default class Banner extends Component {
    render() {
        return (
            <ImageBackground 
            source={require('../images/new-fashion.jpg')}
            style={styles.banner}
            >
            <ImageOverlay
            header="- Elegant Dress -"
            paragraph="- cool - "
            />

            </ImageBackground>
        );
    }
}



const styles = StyleSheet.create({
    banner: {
        width: '100%',
        height: 300,
        alignItems: 'center',
        justifyContent: 'center',
    }
});
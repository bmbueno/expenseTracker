/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    StyleSheet,
    Text,
    View, Pressable
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';


const Header = ({ navigation }) => {




    return (
        <>
            <View style={styles.header}>
                <Text style={styles.headerText}>Recent Exenses</Text>
                <Pressable style={styles.buttn} onPress={() => navigation.navigate('Adição de Registro')}>

                </Pressable>

            </View>
        </>
    );
};

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        alignItems: 'center'
    },
    headerText: {
        fontSize: 30,
        color: '#ff8f33',
    },
    bar: {
        borderLeftWidth: 2,
        height: "75%"
    },
    buttonGraphics: {
        backgroundColor: '#02f55f',
        borderWidth: 0,
        width: 80,
        height: 80,
        // justifyContent: 'center',
        // alignItems: 'center',
        // borderRadius: 50,
        // position: "absolute",
        // right: 20,
        // bottom: 20
    }
});

export default Header;

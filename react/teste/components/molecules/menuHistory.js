
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
    Button,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

const MenuHistory = () => {

    return (
        <>
            <View style={styles.history} >
                <Text style={styles.historyText}>Histórico</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    history: {
        backgroundColor: "#171717",
        height: 110,
        justifyContent: 'center',
        padding: '3%',
        paddingTop: '7%',
        borderBottomStartRadius: 20,
        borderBottomEndRadius: 20,
        position: 'relative',
        top: 80,
        zIndex: 1

    },
    historyText: {
        color: '#ff8f33',
        fontSize: 26,
        fontWeight: '600'
    }

});

export default MenuHistory;
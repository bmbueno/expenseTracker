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


const ExpenseItem = (props) => {

    return (
        <>
            <View style={styles.item}>
                <View style={{flexDirection: "row", justifyContent: "space-between"}} >
                    <Text style={props.item.type == 'gasto' ? styles.itemIncome : styles.itemExpend } >{props.item.description}</Text>
                    <Text style={props.item.type == 'gasto' ? styles.itemIncome : styles.itemExpend } >R$ {props.item.value}</Text>
                </View>
                <Text style={styles.itemDate} >22/03/2019</Text>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: "#212121",
        borderRadius: 20,
        paddingVertical: '3%',
        paddingHorizontal: '5%',
        margin: '2%'
    },
    itemIncome: {
        fontSize: 22,
        color: 'red',
        paddingBottom: '2%'
    },
    itemExpend: {
        fontSize: 22,
        color: '#02f55f',
        paddingBottom: '2%'
    },
    itemDate: {
        fontSize: 18,
        color: '#757575',
        fontWeight: '900'
    }
    

});

export default ExpenseItem;

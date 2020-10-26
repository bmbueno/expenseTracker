
import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

const TotalInfo = (props) => {

    return (
        <>
            <View style={styles.info}>
                <Text style={props.title == 'Ganhos' ? styles.incomes : styles.expenses} >R$ {props.value}</Text>
                <Text style={styles.infoText} >{props.title}</Text>
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    incomes: {
        color: '#02f55f',
        fontSize: 29,
        fontWeight: '700',
        paddingRight: 0
    },
    expenses: {
        color: 'red',
        fontSize: 29,
        fontWeight: '700',
        paddingRight: 0
    },
    infoText: {
        fontSize: 22,
        color:'#ff8f33'
    },
    info: {
        padding: 10,
        // borderWidth: 2,
        // borderRightWidth: 2,
        width: '50%',
        alignItems: 'center'
    }
});

export default TotalInfo;
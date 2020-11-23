import React, { useState } from 'react';

import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    Pressable,
    ScrollView
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryPie } from "victory-native";

import { openDatabase } from "react-native-sqlite-storage";

import SimpleField from '../atoms/simpleField';
import TagField from '../atoms/tagField';
import TypeField from '../atoms/typeField';

const SelectVersion = ({ navigation }) => {

    return (
        <>
            <View style={styles.buttons}>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Registros Recentes')} accessibilityLabel="Learn more about this purple button">
                    <Text style={{ fontSize: 24, fontWeight: '700' }}> Versão 1 </Text>
                </Pressable>
                <Pressable style={styles.button} onPress={() => navigation.navigate('Registros Recentes')} accessibilityLabel="Learn more about this purple button">
                    <Text style={{ fontSize: 24, fontWeight: '700' }}> Versão 2 </Text>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#02f55f',
        justifyContent: 'center',
        alignItems: 'center',
        height: '8%',
        width: '80%',
        marginHorizontal: '10%',
        borderRadius: 20,
        marginTop: 20
    },
    buttons: {
        height: '100%',
        justifyContent: 'center'
    }
});

export default SelectVersion;

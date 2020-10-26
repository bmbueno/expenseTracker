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
    View, Button, ListViewBase, Text, Pressable
} from 'react-native';

import { openDatabase } from "react-native-sqlite-storage";

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

import FormExpense from '../molecules/editExpense'
import HeaderHome from '../molecules/headerHome';
import MenuHistory from '../molecules/menuHistory';
import ListExpenses from '../molecules/listExpenses';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Home = ({ navigation }) => {

    var db = openDatabase({ name: 'data.db' });

    const [list, setList] = useState([]);

    let incomes = 0.0;
    let expends = 0.0;

    db.transaction(function (tx) {
        tx.executeSql('CREATE TABLE IF NOT EXISTS expenses(id INTEGER PRIMARY KEY AUTOINCREMENT, type VARCHAR(10) ,description VARCHAR(30), value VARCHAR(10), establishment VARCHAR(30))')
    })

    // db.transaction(function (tx) {
    //   tx.executeSql("DROP TABLE expenses")
    // })

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM expenses', [], function (tx, results) {
            let aux = [];
            for (let i = 0; i < results.rows.length; i++) {
                aux.push(results.rows.item(i));
            }
            setList(aux);
        })
    })

    for (let i = 0; i < list.length; i++) {
        if (list[i].type == 'ganho')
            incomes = incomes + parseFloat(list[i].value);
        else
            expends = expends + parseFloat(list[i].value);
    }

    return (
        <>
            <View style={styles.home} >
                <HeaderHome totalIncomes={incomes} totalExpends={expends} />
                
                <MenuHistory />
                <ListExpenses list={list} />
                <Pressable style={styles.button} onPress={() => navigation.navigate('Adição de Registro')}>
                    <Text style={{ fontSize: 40, fontWeight: '900' }}>+</Text>
                </Pressable>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    home: {
        height: '100%',
        zIndex: 1, 
        backgroundColor: '#121212',
        flex: 1
    },
    button: {
        backgroundColor: '#02f55f',
        borderWidth: 0,
        width: 80,
        height: 80,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 50,
        position: "absolute",
        right: 20,
        bottom: 20
    }

});

export default Home;

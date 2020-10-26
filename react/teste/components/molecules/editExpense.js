import React, { useState } from 'react';

import {
    Button,
    StyleSheet,
    Text,
    TextInput,
    View,
    Pressable
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';

import { openDatabase } from "react-native-sqlite-storage";

import SimpleField from '../atoms/simpleField';
import TagField from '../atoms/tagField';
import TypeField from '../atoms/typeField';

const EditExpense = ({ navigation }) => {
    const [expense, setExpense] = useState({ type: '', description: '', value: '', establishment: '', date: new Date().getDate(), frequency: { diary: false, weekly: [], monthly: false }, tag: [] });

    var db = openDatabase({ name: 'data.db' });

    function saveexpense() {
        db.transaction(function (tx) {
            tx.executeSql('INSERT INTO expenses (type, description, value, establishment) VALUES (?,?,?,?)', [expense.type, expense.description, expense.value, expense.establishment])
        })

        navigation.goBack();
    }


    return (
        <>
            <View style={{ backgroundColor: '#171717', zIndex: 1, }}>
                <View style={styles.formExpenses}>
                    <TypeField value={(e) => { setExpense({ ...expense, type: e }); }} />

                    <SimpleField titleInput='Descrição' value={(e) => { setExpense({ ...expense, description: e }); }}
                        placeholder={'Adicionar descrição'} />

                    <SimpleField titleInput='Valor' type={'numeric'} value={(e) => { setExpense({ ...expense, value: e }); }}
                        placeholder={"Amount"} />

                    <SimpleField titleInput='Estabelecimento' value={(e) => { setExpense({ ...expense, establishment: e }); }}
                        placeholder={"Add establishment"} />

                    <TagField value={(e) => { setExpense({ ...expense, tag: e }); }} />

                    <Pressable style={styles.button} onPress={() => saveexpense()} accessibilityLabel="Learn more about this purple button">
                        <Text style={{ fontSize: 24, fontWeight: '700' }}> Salvar </Text>
                    </Pressable>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    formExpenses: {
        fontSize: 24,
        fontWeight: '600',
        textAlign: 'center',
        position: 'relative',
        top: -10,
        height: '100%'
    },
    button: {
        backgroundColor: '#02f55f',
        justifyContent: 'center',
        alignItems: 'center',
        height: '8%',
        width: '80%',
        marginHorizontal: '10%',
        borderRadius: 20,
        marginTop: 20
    }
});

export default EditExpense;

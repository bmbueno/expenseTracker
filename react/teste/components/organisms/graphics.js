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

const Graphics = ({ navigation }) => {

    const [list, setList] = useState([]);
    const tags = { 'alimentacao': 0.0, 'transporte': 0.0, 'saude': 0.0 }

    var db = openDatabase({ name: 'data.db' });

    db.transaction(function (tx) {
        tx.executeSql('SELECT * FROM expenses', [], function (tx, results) {
            let aux = [];
            for (let i = 0; i < results.rows.length; i++) {
                aux.push(results.rows.item(i));
            }
            setList(aux);
        })
    })

    let incomes = 0.0;
    let expends = 0.0;

    // alert(list.length)

    for (let i = 0; i < list.length; i++) {
        if (list[i].type == 'ganho')
            incomes = incomes + parseFloat(list[i].value);
        else
            expends = expends + parseFloat(list[i].value);

        tags[list[i].tag] = tags[list[i].tag] + parseFloat(list[i].value);

    }

    const dataExpenses = [
        { x: "Gastos", y: expends },
        { x: "Ganhos", y: incomes }
    ];

    let dataTags = []

    for (tag in tags) {
        dataTags.push({ x: tag, y: tags[tag] })
    }

    return (
        <>
            <ScrollView style={styles.bodyGraphics}  >
                <View style={styles.graphics}>
                    <VictoryPie
                        padding={70}
                        colorScale={['red', '#02f55f']}
                        innerRadius={90}
                        data={dataExpenses}
                    />
                </View>
                <View style={styles.graphics}>
                    <VictoryPie
                    padding={70}
                        colorScale={['red', '#02f55f', 'orange']}
                        innerRadius={90}
                        data={dataTags}
                    />
                </View>
            </ScrollView>
        </>
    );
};

const styles = StyleSheet.create({
    graphics: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    bodyGraphics: {
        width: '100%'
    }
});

export default Graphics;

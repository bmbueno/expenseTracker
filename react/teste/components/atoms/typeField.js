
import React, { useState } from 'react';

import {
    StyleSheet,
    Text,
    TextInput,
    View,
} from 'react-native';

import {
    Colors
} from 'react-native/Libraries/NewAppScreen';
import RNPickerSelect from 'react-native-picker-select';

const TypeField = (props) => {
    const [value, setvalue] = useState('');

    function setType(value) {
        setvalue(value);
        props.value(value);
    }

    return (
        <>
            <View style={styles.field}>
                <Text style={styles.labelField} >Type</Text>
                <RNPickerSelect
                    style={styles.typeField}
                    onValueChange={value => { setType(value) }}
                    items={[
                        { label: 'Ganho', value: 'ganho' },
                        { label: 'Gasto', value: 'gasto' },
                    ]}
                // value={value}
                />
                <Text>{ value }</Text>
                
            </View>
        </>
    );
};


const styles = StyleSheet.create({
    labelField: {
        color: '#ff8f33',
        fontSize: 24,
        fontWeight: '600',
        paddingLeft: 10,
    },
    typeField: {
        fontSize: 24,
        color: 'red'
    },
    field: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        backgroundColor: '#212121',
        borderRadius: 20
      }
});

export default TypeField;
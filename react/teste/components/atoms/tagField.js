
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

const TagField = (props) => {
  const [value, setvalue] = useState('');

  function setTag(value) {
    setvalue(value);
    props.value(value);
  }

  return (
    <>
      <View style={styles.field}>
        <Text style={styles.labelField} >Tag</Text>
        <RNPickerSelect
                    style={styles.textField}
                    onValueChange={value => { setTag(value) }}
                    items={[
                        { label: 'Alimentação', value: 'alimentacao' },
                        { label: 'Transporte', value: 'transporte' },
                        { label: 'Saúde', value: 'saude' },
                    ]}
                // value={value}
                />
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  labelField: {
    color: '#ff8f33',
    fontSize: 24,
    fontWeight: '700',
    paddingLeft: 10,
  },
  textField: {
    fontSize: 25
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

export default TagField;
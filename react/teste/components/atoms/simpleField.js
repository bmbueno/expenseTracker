
import React, { useState } from 'react';

import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

const SimpleField = (props) => {
  const [value, setvalue] = useState('');

  return (
    <>
      <View style={styles.field}>
        <Text style={styles.labelField} >{props.titleInput}</Text>
        <TextInput
          keyboardType={props.type}
          style={styles.textField} 
          placeholder={props.placeholder} 
          placeholderTextColor='#FFF'
          onChangeText={text => setvalue(text)} 
          onEndEditing={props.value.bind(this, value)} />
      </View>
    </>
  );
};


const styles = StyleSheet.create({
  labelField: {
    color: '#ff8f33',
    fontSize: 24,
    fontWeight: '600',
    paddingLeft: 5,
  },
  textField: {
    fontSize: 24
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

export default SimpleField;
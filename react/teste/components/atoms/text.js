
import React from 'react';
import {
 StyleSheet,
 Text,
} from 'react-native';

import {
 Colors
} from 'react-native/Libraries/NewAppScreen';

const Cat: () => React$Node = () => {
 return (
   <>
     <Text style={styles.teste} >Hello, I am your cat!</Text>
   </>
 );
};

const styles = StyleSheet.create({
 teste: {
   color: Colors.dark,
   fontSize: 12,
   fontWeight: '600',
   padding: 4,
   paddingRight: 12,
   textAlign: 'right',
 },
});

export default Cat;
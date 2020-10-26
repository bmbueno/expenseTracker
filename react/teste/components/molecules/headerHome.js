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
  Text,
  View
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

import TotalInfo from '../atoms/totalInfo';

const HeaderHome = (props) => {

  return (
    <>
        <View style={styles.header}>
          {/* <Text>Recent Expenses</Text> */}
          <TotalInfo title='Ganhos' value={props.totalIncomes}/>
          <View style={styles.bar}></View>
          <TotalInfo title='Despesas' value={props.totalExpends}/>
        </View>
    </>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "black",
    flexDirection: "row",
    alignItems: 'center',
    borderRadius: 20,
    position: 'absolute',
    top: -10,
    zIndex: 2,
    height: 110
  },
  bar: {
      borderLeftWidth: 2,
      height: "75%"
  }
});

export default HeaderHome;

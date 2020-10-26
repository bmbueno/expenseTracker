/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  ScrollView,
  View
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';
import ExpenseItem from '../atoms/expenseItem';


const ListExpenses = (props) => {

  const expense = props.list.map(r => <ExpenseItem item={r} />)

  return (
    <>
      <View style={styles.list}>
        <ScrollView >
          {expense}
        </ScrollView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  list: {
    position: 'relative',
    top: 80,
    height: '100%'
  },

});

export default ListExpenses;

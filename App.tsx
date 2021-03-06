/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import RootContainer from './src/RootContainer';

//disable yellow-block

const App: () => React$Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      <RootContainer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

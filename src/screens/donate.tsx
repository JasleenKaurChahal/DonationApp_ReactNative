import React, {Component} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import Header from '../components/header';
import {scale} from 'react-native-size-matters';

class Donate extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Donate" />
        <View style={styles.body}>
          <ScrollView>
            <View>
              <Text>What would you like to donate?</Text>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    marginTop: scale(50),
    padding: scale(20),
  },
});

export default Donate;

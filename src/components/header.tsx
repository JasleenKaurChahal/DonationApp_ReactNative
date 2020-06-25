import React, {Component} from 'react';
import {View, StyleSheet, Text} from 'react-native';
import {scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  title: string;
}

class Header extends Component<Props> {
  render() {
    const {title} = this.props;
    return (
      <View style={styles.container}>
        <LinearGradient
          colors={['#FFBAB9', '#FF7B7B', '#FF5252']}
          style={styles.gradient}>
          <Text style={styles.heading}>{title}</Text>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    height: scale(60),
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  gradient: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    borderBottomLeftRadius: scale(5),
    borderBottomRightRadius: scale(5),
  },
  heading: {
    textAlign: 'center',
    fontSize: scale(20),
    color: 'white',
  },
});

export default Header;

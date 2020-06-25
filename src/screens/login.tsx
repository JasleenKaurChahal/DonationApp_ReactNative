import React, {Component} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import images from '../assets';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

class Login extends Component<Props> {
  handleLogin = () => {
    const {navigation} = this.props;
    navigation.navigate('SignIn');
  };

  handleSignUp = () => {
    const {navigation} = this.props;
    navigation.navigate('SignUp');
  };

  render() {
    return (
      <ImageBackground
        source={images.back}
        style={styles.container}
        resizeMode="cover">
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={this.handleSignUp}>
            <LinearGradient
              colors={['#FFBAB9', '#FF7B7B', '#FF5252']}
              style={styles.buttonStyle}>
              <View>
                <Text style={styles.buttonText}>New to App?</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handleLogin}>
            <LinearGradient
              colors={['#FFBAB9', '#FF7B7B', '#FF5252']}
              style={styles.buttonStyle}>
              <View>
                <Text style={styles.buttonText}>Login to existing Account</Text>
              </View>
            </LinearGradient>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  buttonContainer: {
    alignSelf: 'flex-end',
    height: '30%',
    width: '80%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonStyle: {
    backgroundColor: 'red',
    width: scale(200),
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    marginBottom: scale(20),
    borderWidth: 1,
    borderColor: 'white',
  },
  buttonText: {
    color: 'white',
    fontSize: scale(14),
    fontWeight: 'bold',
  },
});

export default Login;

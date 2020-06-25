import React, {Component} from 'react';
import {
  View,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Text,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import images from '../assets';
import {NavigationScreenProp, NavigationState} from 'react-navigation';

interface Props {
  navigation: NavigationScreenProp<NavigationState>;
}

interface State {
  username: string;
  password: string;
}

class SignUp extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  setUsername = (text: string) => {
    this.setState({username: text});
  };

  setPass = (text: string) => {
    this.setState({password: text});
  };

  handlePress = () => {
    const {navigation} = this.props;
    navigation.navigate('SignIn');
  };

  handleSignUp = () => {
    const {navigation} = this.props;
    navigation.navigate('Tabs');
  };

  render() {
    const {username, password} = this.state;

    return (
      <LinearGradient
        colors={['#FFBAB9', '#FF7B7B', '#FF5252']}
        style={styles.gradient}>
        <View style={styles.container}>
          <Image source={images.logo} style={styles.logoStyle} />
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.setUsername(text)}
            value={username}
            autoFocus={true}
            placeholder="Enter Name"
          />
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.setUsername(text)}
            value={username}
            autoFocus={true}
            placeholder="Enter Email"
          />
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.setUsername(text)}
            value={username}
            autoFocus={true}
            placeholder="Enter Phone Number"
          />
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.setPass(text)}
            value={password}
            placeholder="Enter Password"
          />
          <TextInput
            style={styles.textInputStyle}
            onChangeText={(text) => this.setPass(text)}
            value={password}
            placeholder="Confirm Password"
          />
          <TouchableOpacity onPress={this.handleSignUp}>
            <View style={styles.buttonStyle}>
              <Text style={styles.buttonText}>Sign Up</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={this.handlePress}>
            <View>
              <Text style={styles.buttonText}>Already a member?</Text>
            </View>
          </TouchableOpacity>
        </View>
      </LinearGradient>
    );
  }
}

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    height: scale(40),
    width: '80%',
    borderColor: 'white',
    padding: scale(10),
    borderWidth: 1,
    marginBottom: scale(20),
    color: 'white',
    borderRadius: scale(5),
  },
  logoStyle: {
    height: scale(120),
    width: scale(120),
    borderRadius: scale(60),
    backgroundColor: 'yellow',
    marginBottom: scale(40),
  },
  buttonStyle: {
    backgroundColor: '#EF3451',
    width: scale(200),
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    marginBottom: scale(20),
    borderWidth: 1,
    borderColor: 'white',
    marginTop: scale(40),
  },
  buttonText: {
    color: 'white',
    fontSize: scale(14),
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
});

export default SignUp;

import React, {Component} from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from 'react-native';
import {scale} from 'react-native-size-matters';
import Header from '../components/header';
import images from '../assets';
import LinearGradient from 'react-native-linear-gradient';

const NAME = 'Ms Jjhgihr gguygu';
const BIO = 'Bio : hgjgjh gjhwguyiuwry hweuytwty hfgwgfuyrwry ghfjgyu';
const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

function Item({title}: string) {
  return (
    <View style={styles.postContainer}>
      <View style={styles.postHeader}>
        <LinearGradient
          colors={['#FFBAB9', '#FF7B7B', '#FF5252']}
          style={styles.picture}
        />
        <Text style={styles.postedBy}>{title}</Text>
      </View>
      <Image source={images.background} style={styles.postImage} />
    </View>
  );
}

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Header title="Profile" />
        <View style={styles.body}>
          <ScrollView>
            <View style={styles.imageContainer}>
              <Image source={images.logo} style={styles.image} />
            </View>
            <View style={styles.bioContainer}>
              <Text style={styles.name}>{NAME}</Text>
              <Text style={styles.bio}>{BIO}</Text>
              <TouchableOpacity>
                <View style={styles.buttonStyle}>
                  <Text style={styles.buttonText}>View Donations</Text>
                </View>
              </TouchableOpacity>
              <FlatList
                data={DATA}
                renderItem={({item}) => <Item title={item.title} />}
                keyExtractor={(item) => item.id}
              />
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
  imageContainer: {
    height: scale(150),
    width: '100%',
    borderWidth: 1,
    borderColor: '#FF7B7B',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  image: {
    height: scale(100),
    width: scale(100),
    borderRadius: scale(50),
    position: 'relative',
    top: scale(40),
  },
  bioContainer: {
    width: '100%',
    marginTop: scale(50),
    justifyContent: 'center',
    paddingVertical: scale(10),
  },
  name: {
    textAlign: 'center',
    fontSize: scale(20),
    fontWeight: 'bold',
  },
  bio: {
    textAlign: 'center',
    color: '#FF7B7B',
    fontSize: scale(14),
    fontWeight: '600',
    marginTop: scale(5),
  },
  buttonStyle: {
    backgroundColor: '#EF3451',
    width: '90%',
    height: scale(40),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: scale(10),
    marginBottom: scale(20),
    borderWidth: 1,
    borderColor: 'white',
    marginTop: scale(20),
    alignSelf: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: scale(14),
    fontWeight: 'bold',
    fontStyle: 'italic',
    textDecorationLine: 'underline',
  },
  postContainer: {
    height: scale(300),
    width: '100%',
    borderWidth: 1,
    borderColor: 'red',
    marginBottom: scale(30),
  },
  postHeader: {
    flexDirection: 'row',
    padding: scale(5),
    alignContent: 'center',
    height: scale(50),
  },
  picture: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(25),
    marginRight: scale(5),
  },
  postedBy: {
    textAlign: 'center',
    paddingTop: scale(20),
    fontWeight: 'bold',
  },
  postImage: {
    marginTop: scale(10),
    width: '100%',
    height: scale(200),
  },
});

export default Home;

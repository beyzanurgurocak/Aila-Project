import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;

const DATA = [
  {
    id: 1,
    img: require('../assets/images/Barry.png'),
    title: 'Barry',
  },
  {
    id: 2,
    img: require('../assets/images/Perez.png'),
    title: 'Perez',
  },
  {
    id: 3,
    img: require('../assets/images/Alvin.png'),
    title: 'Alvin',
  },
  {
    id: 4,
    img: require('../assets/images/Dan.png'),
    title: 'Dan',
  },
  {
    id: 5,
    img: require('../assets/images/Barry.png'),
    title: 'Barry',
  },
  {
    id: 6,
    img: require('../assets/images/Perez.png'),
    title: 'Perez',
  },
  {
    id: 7,
    img: require('../assets/images/Alvin.png'),
    title: 'Alvin',
  },
  {
    id: 8,
    img: require('../assets/images/Dan.png'),
    title: 'Dan',
  },
];

const Item = ({title, img}) => (
  <View style={styles.flatcont}>
    <Image style={styles.image}>{img}</Image>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const Messages = () => {
  const navigation = useNavigation();
  const renderItem = ({item}) => <Item title={item.title} source={item.img} />;
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <View style={styles.flexDirection}>
          <Text style={styles.text}>Messages</Text>
          <Image source={require('../assets/images/search.png')} />
        </View>
        <Text style={styles.recent}>Recent</Text>
        <View>
          <FlatList
            style={styles.flat}
            data={DATA}
            horizontal
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>

      <ScrollView style={styles.scrollcontainer}>
        <View style={styles.margintop30}>
          <TouchableOpacity onPress={() => navigation.navigate('Chat')}>
            <View style={styles.messages}>
              <Image
                style={styles.imageprofile}
                source={require('../assets/images/Danny.png')}
              />
              <View>
                <Text style={styles.fullname}>Danny Hopkins</Text>
                <Text style={styles.chat}>dannylove@gmail.com</Text>
              </View>
              <Text style={styles.date}>08:43</Text>
            </View>
          </TouchableOpacity>

          <View style={styles.messages}>
            <Image
              style={styles.imageprofile}
              source={require('../assets/images/Bobby.png')}
            />
            <View>
              <Text style={styles.fullname}>Bobby Langford</Text>
              <Text style={styles.chat}>Will do, super, thank you</Text>
            </View>
            <Text style={styles.date}>Tue</Text>
          </View>
          <View style={styles.messages}>
            <Image
              style={styles.imageprofile}
              source={require('../assets/images/William.png')}
            />
            <View>
              <Text style={styles.fullname}>William Wiles</Text>
              <Text style={styles.chat}>Uploaded file.</Text>
            </View>
            <Text style={styles.date}>Sun</Text>
          </View>
          <View style={styles.messages}>
            <Image
              style={styles.imageprofile}
              source={require('../assets/images/James.png')}
            />
            <View>
              <Text style={styles.fullname}>James Edelen</Text>
              <Text style={styles.chat}>
                Here is another tutorial, if you...
              </Text>
            </View>
            <Text style={styles.date}>23 Mar</Text>
          </View>
          <View style={styles.messages}>
            <Image
              style={styles.imageprofile}
              source={require('../assets/images/Jose.png')}
            />
            <View>
              <Text style={styles.fullname}>Jose Farmer</Text>
              <Text style={styles.chat}>dannylove@gmail.com</Text>
            </View>
            <Text style={styles.date}>18 Mar</Text>
          </View>
          <View style={styles.messages}>
            <Image
              style={styles.imageprofile}
              source={require('../assets/images/Frank.png')}
            />
            <View>
              <Text style={styles.fullname}>Frank Marten</Text>
              <Text style={styles.chat}>no pracujemy z domu przez 5 ...</Text>
            </View>
            <Text style={styles.date}>01 Feb</Text>
          </View>
          <View style={styles.messages}>
            <Image
              style={styles.imageprofile}
              source={require('../assets/images/Marzena.png')}
            />
            <View>
              <Text style={styles.fullname}>Marzena Klasa</Text>
              <Text style={styles.chat}>potem sie zobaczy</Text>
            </View>
            <Text style={styles.date}>01 Feb</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B202D',
    flex: 1,
    justifyContent: 'center',
  },
  flat: {
    marginBottom: 25,
    marginLeft: 20,
  },
  flatcont: {
    marginRight: 30,
  },
  text: {
    fontSize: 28,
    color: '#fff',
    fontFamily: 'Poppins',
    marginBottom: 9,
  },
  recent: {
    fontFamily: 'Poppins',
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.58)',
    textTransform: 'uppercase',
    marginBottom: 17,
    letterSpacing: 3,
    marginLeft: 20,
  },
  fullname: {
    fontFamily: 'Poppins',
    fontSize: 15,
    color: '#fff',
    bottom:10,
  },
  chat: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#B3B9C9',
    bottom:10,
  },
  title: {
    fontFamily: 'Poppins',
    fontSize: 16,
    color: '#fff',
  },
  scrollcontainer: {
    backgroundColor: '#292F3F',
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
    flex: 1,
  },
  messages: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 5,
    flex: 1,
  },
  image: {
    width: 50,
    height: 50,
    margin:10,
  },
  imageprofile: {
    display: 'flex',
    alignItems: 'center',
  },
  date: {
    textAlign: 'right',
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#B3B9C9',
    alignItems: 'flex-end',
    display: 'flex',
    textTransform: 'capitalize',
    flex: 1,
    marginRight: 20,
    bottom: 20,
  },
  flexDirection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 20,
  },
  margintop30: {
    marginTop: 30,
  },
});

export default Messages;

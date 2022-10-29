import React from 'react';
import {View, Text, Image, StyleSheet, ScrollView, TextInput} from 'react-native';

const Chat = () => {
  return (
    <View style={styles.container}>
      <View style={styles.flexrow}>
        <Image source={require('../assets/images/Danny.png')} />
        <Text style={styles.fullname}>Danny Hopkins</Text>
        <Image
          style={styles.search}
          source={require('../assets/images/search.png')}
        />
      </View>
      <Text style={styles.date}>1 FEB 12:00</Text>
      <ScrollView style={styles.mb100}>
        <View style={styles.messagebg373e}>
          <Text style={styles.txt}>
            I commented on Figma, I want to add some fancy icons. Do you have
            any icon set?
          </Text>
        </View>

        <View style={styles.messagebg7a81}>
          <Text style={styles.txt}>
            I am in a process of designing some. When do you need them?
          </Text>
        </View>

        <View style={styles.messagebg373e}>
          <Text style={styles.txt}>Next month?</Text>
        </View>

        <View style={styles.messagebg7a81}>
          <Text style={styles.txt}>
            I am almost finish. Please give me your email, I will ZIP them and
            send you as son as im finish.
          </Text>
        </View>

        <View style={styles.messagebg7a81}>
          <Text style={styles.txt}>?</Text>
        </View>

        <View style={styles.messagebg373e}>
          <Text style={styles.txt}>maciej.kowalski@email.com</Text>
        </View>

        <View style={styles.messagebg7a81}>
          <Image
            style={styles.emoji}
            source={require('../assets/images/Emoji.png')}
          />
        </View>
      </ScrollView>
      <View style={styles.messageBg3d43}>
        <View style={styles.bg9398}>
          <Image 
          style={styles.cameraicon}
          source={require('../assets/images/CameraIcon.png')} />
        </View>
        <Text style={styles.txtf13}>Message</Text>
        <Image 
        style={styles.icon}
        source={require('../assets/images/Icon.png')} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#1B202D',
    flex: 1,
  },
  fullname: {
    fontFamily: 'Poppins',
    fontSize: 20,
    color: '#fff',
    bottom: 5,
  },
  flexrow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  search: {
    left: 130,
  },
  date: {
    textAlign: 'center',
    fontFamily: 'Poppins',
    fontSize: 12,
    color: '#fff',
    letterSpacing: 1,
    textTransform: 'capitalize',
    marginBottom: 15,
  },
  messagebg373e: {
    backgroundColor: '#373E4E',
    borderRadius: 20,
    width: 340,
    height: 73,
    left: 30,
    marginBottom: 10,
  },
  txt: {
    fontFamily: 'Poppins',
    fontSize: 14,
    color: '#fff',
    alignItems: 'center',
    margin: 10,
  },
  messagebg7a81: {
    backgroundColor: '#7A8194',
    borderRadius: 20,
    width: 298,
    height: 73,
    left: 103,
    marginBottom: 10,
    alignItems: 'flex-end',
    textAlign: 'right',
    right: 0,
  },
  emoji: {
    margin: 10,
  },
  messageBg3d43: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#3D4354',
    borderRadius: 20,
  },
  txtf13: {
    fontFamily: 'Poppins',
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.45)',
    alignItems: 'center',
    margin: 10,
  },
  bg9398: {
    backgroundColor: '#9398A7',
    borderRadius: 100,
    width:33,
    height:33,
    left:8,
    marginRight:10,
  },
  cameraicon: {
    margin:20,
    left:-13.5,
    bottom:13.5,
  },
  icon: {
   left:250,
  },
  mb100: {
    marginBottom: 100,
  }

});

export default Chat;

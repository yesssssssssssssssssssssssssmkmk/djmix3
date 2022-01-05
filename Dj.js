import * as React from 'react';
import { Text, View, Button, TouchableOpacity, StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
export default class DJButton extends React.Component {
  playSound = async () => {
    await Audio.Sound.createAsync(
      {
        uri: this.props.uri,
      },
      {
        shouldPlay: true,
      }
    );
  };
  render() {
    return (
      <TouchableOpacity
        style={[styles.soundButton, {backgroundColor:this.props.bgcolor}]}
        onPress={this.playSound}>
        <Text style={styles.soundButtonText}>
          {this.props.text}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  soundButton: {
    marginTop: 20,
    width:180,
    height:60,
    borderRadius: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 3,
    borderColor: 'black',
         
    
   
  },
  soundButtonText:{ 
    fontFamily: 'Times', 
    fontSize: 25 ,
    fontWeight: 'bold',
    },
});

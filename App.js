import * as React from 'react';
import { Text, View, Button, TouchableOpacity,StyleSheet } from 'react-native';
import { Audio } from 'expo-av';
import DJButton from './components/Dj';
import AppHeader from './components/AppHeader'



export default class App extends React.Component {
  render() {
    return (
      <View>
         <AppHeader />
        <View style={styles.musicButtonContainer}>
          <DJButton
            uri= 'http://soundbible.com/mp3/mallard_duck-Mike_Koenig-667013646.mp3'
            text="SOUND 1"
            bgcolor=""
          />
          </View>

          <View style={styles.musicButtonContainer}>
          <DJButton
            uri='http://soundbible.com/mp3/cartoon-birds-2_daniel-simion.mp3'
            text="SOUND 2"
            bgcolor="yellow"
          />
          </View>
          <View style={styles.musicButtonContainer}>
          <DJButton
            uri='http://soundbible.com/mp3/Bird_in_Rain-Mike_Koenig-441535833.mp3'
            text="SOUND 3"
            bgcolor="green"
          />
            <DJButton
            uri='http://soundbible.com/mp3/Parots_Talking-SoundBible.com-587469366.mp3' 
            text="SOUND 4"
            bgcolor="purple"
          />
        </View>
        <View style={styles.stopContainer}>
          <TouchableOpacity
            style = {styles.stopButton} 
            onPress={()=>{
              Audio.setIsEnabledAsync(false);
            }}
            >
            <Text style={styles.stopButtonText}>STOP MUSIC</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
   stopContainer : {
    flex:1, 
    justifyContent:'center', 
    alignItems:'center',
    marginTop:40,
    
  },
   musicButtonContainer : {
    
    justifyContent:'center', 
    alignItems:'center',
   
  },
  stopButton :{
    width: 280,
    height: 70,
    justifyContent:'center',
    alignItems:'center',
    borderRadius : 30,
    backgroundColor : 'red',
    borderWidth:5,
    borderColor : 'black',
    },
    
  stopButtonText:{ 
    fontSize: 30 ,
    fontWeight: 'bold',
    }
});


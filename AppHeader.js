import * as React from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';

class AppHeader extends React.Component {
  render(){
    return(
      <View style = {styles.textContainer}>
<Text style = {styles.text}>🎧DJ WHITEHAT🎧</Text>
</View>
    )
  }


}
const styles = StyleSheet.create({
textContainer: {
backgroundColor : "blue",

},
text: {
color : "white",
padding : "32",
fontSize : 30,
fontWeight: 'bold',
textAlign :"center",
height: 60,
marginTop: 10,
}
  
})

export default AppHeader;
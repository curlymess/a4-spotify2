import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import images from '../../assets/Images/images';
import { Themes } from '../../assets/Themes';


const SpotifyAuthButton = ( props ) => { 
  return (
    <View>
     <Pressable style={styles.bttn} onPressOut={props.authFunction}>
        <Image style={styles.img} source={images.spotify} />
        <Text style={styles.txt}>Connect to Spotify</Text>
      </Pressable>
    </View>  
  );

};

export default SpotifyAuthButton;

const styles = StyleSheet.create({
  img: {
    flex: 1,
    resizeMode: 'contain',
    maxHeight: 20,
  },
  txt: {
    flex: 1,
    color: Themes.colors.white,
  },

  bttn: {
    borderRadius: 9999,
    backgroundColor:Themes.colors.spotify,
    padding: 5,
    flexDirection: 'row',
    alignItems: 'center',
    width: '70%',
  },

});
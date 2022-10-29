import { View, Text, StyleSheet, Image } from 'react-native';
import { Themes } from "../../assets/Themes";
import { millisToMinutesAndSeconds } from '../../utils';

const Song = ({indexNum, albumImg, title, artist, albumName, duration }) => 
{
  return (
    <View style={styles.container}>

     <Text style={[styles.txt, styles.centerTxt, styles.artistTxt]}>{indexNum}</Text>
     <Image style={styles.img} source={albumImg}/> 
     <View style={styles.info}>
        <Text style={[styles.stackTxt]} numberOfLines={1}>{title}</Text>
        <Text style={[styles.stackTxt, styles.artistTxt]} numberOfLines={1}>{artist}</Text>
     </View>
     <Text style={styles.txt} numberOfLines={1}>{albumName}</Text>
     <Text style={styles.txt}>{millisToMinutesAndSeconds(duration)}</Text>
    </View>  
  );
};

export default Song;

const styles = StyleSheet.create({
container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    marginBottom: 4,  
},
img: {
    flex: 1,
    height: 64,
    width: 64,
    resizeMode: 'contain',
    justifyContent: 'center',
    minWidth: 0,
},
info: {
    flexDirection: 'column',
    justifyContent: 'center',
    flex: 1,
    minWidth: 0,
},
txt: {
    color: Themes.colors.white,
    flex: 1,
    minWidth: 0,
},
artistTxt: {
    color: Themes.colors.gray,
},
centerTxt: {
    textAlign: 'center',
    maxWidth: 40,
},
stackTxt: {
    color: Themes.colors.white,
    minWidth: 0,
},
 
});
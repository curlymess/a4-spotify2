import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { Themes } from "../../assets/Themes";
import { millisToMinutesAndSeconds } from '../../utils';
import { Ionicons } from '@expo/vector-icons';

import SongPreview from "./SongPreview";
import SongDetail from './SongDetail';

const Song = ({indexNum, albumImg, title, artist, albumName, duration, navigation, previewURL, externalURL }) => 
{
  return (
    <View style={styles.container}>
        <Pressable onPress={() => navigation.navigate(SongPreview)}> 
            <Ionicons name="play-circle" size={32} color="green"  onPress={(e) => {
                e.stopPropagation();
                navigation.navigate('SongPreview', {url: {previewURL}}) // how to display url? now
            }} 
            />
        </Pressable>
        <Pressable style={styles.songContainer} onPress={() => navigation.navigate('SongDetail', {url: externalURL}) }>
            <Image style={styles.img} source={albumImg}/> 
            <View style={styles.info}>
                <Text style={[styles.stackTxt]} numberOfLines={1}>{title}</Text>
                <Text style={[styles.stackTxt, styles.artistTxt]} numberOfLines={1}>{artist}</Text>
            </View>
            <Text style={styles.txt} numberOfLines={1}>{albumName}</Text>
            <Text style={styles.txt}>{millisToMinutesAndSeconds(duration)}</Text>
        </Pressable>
        
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
songContainer: {
    flexDirection: 'row',
    flex: 1,
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
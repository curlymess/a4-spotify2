import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import { Themes } from "../../assets/Themes";
import Song from '../components/Song'
import images from '../../assets/Images/images';

const renderSong = ({ item, index }) =>  {
    return (
        <Song 
        indexNum={index} 
        albumName={item.album.name}
        albumImg={item.album.images}
        title={item.name}
        artist={item.album.name}
        duration={item.duration_ms} /> 
    );
};

const SongList = ( props ) => 
{
  return ( 
    <View style={styles.container}>
        <View style={styles.miniContainer}>
            <Image style={styles.logo} source={images.spotify}></Image>
            <Text style={styles.titleTxt}>My Top Tracks</Text>
        </View>
        <View style={styles.listContainer}>
            <FlatList style={styles.list}
            data={props.parts}
            renderItem={({item, index}) => renderSong({item, index})} // this is the problem but how to properly pass?
            />
        </View>
        
    </View>  
  );
};

export default SongList;

const styles = StyleSheet.create({
container: {
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    flexWrap: 'wrap',
    width: '100%',
    backgroundColor: Themes.colors.background,
},
miniContainer: {
    flex: .1,
    flexDirection: 'row',
},
listContainer: {
    flex: 1,
},
titleTxt: {
    fontSize: 24,
    color: Themes.colors.white,

},
logo: {
    height: 40,
    width: 40,
    resizeMode: 'contain',
    marginRight: 10,
},

list: {
    flex: 1,
},
 
});
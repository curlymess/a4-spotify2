import { StyleSheet, SafeAreaView, Text, TouchableOpacity, Button, Image, Pressable, FlatList } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { SpotifyAuthButton } from "./app/components";
import { Song } from "./app/components";
import images, { Images } from "./assets/Images/images";
import millisToMinutesAndSeconds from "./utils";
import SongList from "./app/components/SongList";

export default function App() {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

let contentDisplayed = null;

if(token){
  console.log(tracks[0]);
  contentDisplayed = <SongList parts={tracks} />;
} else {
  contentDisplayed = <SpotifyAuthButton authFunction={getSpotifyAuth} />;
}
  return (
    <SafeAreaView style={styles.container}>
     {contentDisplayed}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },

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

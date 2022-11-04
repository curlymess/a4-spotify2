import { StyleSheet, SafeAreaView, View } from "react-native";
import { useSpotifyAuth } from "./utils";
import { Themes } from "./assets/Themes";
import { SpotifyAuthButton } from "./app/components";
import SongList from "./app/components/SongList";
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import SongPreview from "./app/components/SongPreview";
import SongDetail from "./app/components/SongDetail";

function HomeScreen({ navigation }) {
  // Pass in true to useSpotifyAuth to use the album ID (in env.js) instead of top tracks
  const { token, tracks, getSpotifyAuth } = useSpotifyAuth();

  let contentDisplayed = null;

  if(token){
    contentDisplayed = <SongList tracks={tracks} navigation={navigation}/>;
  } else {
    contentDisplayed = <SpotifyAuthButton authFunction={getSpotifyAuth} />;
  }
  return (
    <View style={styles.homeScreen}>
      <SafeAreaView style={styles.container}>
       {contentDisplayed}
      </SafeAreaView>
    </View>
  );
}

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
      <Stack.Screen name="SongPreview" component={SongPreview} />
      <Stack.Screen name="SongDetail" component={SongDetail} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    width: '100%',
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
  homeScreen: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  homeScreenText: {
    fontSize: 32,
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

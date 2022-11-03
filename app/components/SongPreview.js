import { Text, View, StyleSheet, Button } from 'react-native';
import WebView from 'react-native-webview';

export default function SongPreview({ navigation, route }) {
    console.log(route.params);
    const { url } = route.params;
  return (
      <WebView source={{uri: url.previewURL}} />
  );
}

const styles = StyleSheet.create({
  screenOne: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center',
  },
  screenOneText: {
    fontSize: 32,
  },
});
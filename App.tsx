import {StyleSheet, Text, View} from 'react-native';
import React, {useEffect} from 'react';
import Home from './src/screens/Home';
import {Header} from './src/components';
import RNBootSplash from 'react-native-bootsplash';

export default function App(): React.JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return (
    <View style={{flex: 1}}>
      <Header />
      <View style={styles.container}>
        <Home />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    maxWidth: 480,
    alignSelf: 'center',
  },
});

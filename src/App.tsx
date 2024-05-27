import React, {useEffect} from 'react';
import Home from './screens/Home';
import RNBootSplash from 'react-native-bootsplash';

export default function App(): React.JSX.Element {
  useEffect(() => {
    RNBootSplash.hide({fade: true});
  }, []);

  return <Home />;
}

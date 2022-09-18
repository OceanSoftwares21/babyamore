import React from 'react';
import NetInfo from "@react-native-community/netinfo";
import Homestack from './src/screens/stack/homestack';
import { LogBox } from 'react-native';
import { Provider } from 'react-redux';
import store, { persister } from './src/screens/redux/store/store'
import { PersistGate } from 'redux-persist/integration/react';

const YourApp = () => {
  LogBox.ignoreAllLogs();
  LogBox.ignoreLogs([
    "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  ]);
  const [isOnline, setIsOnline] = React.useState();
  React.useEffect(() => {
    const unsubscribe = NetInfo.addEventListener(state => {
      setIsOnline(state.isConnected)
    })
  }, [])

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persister}>
        <Homestack val={isOnline} />
      </PersistGate>
    </Provider>
  );
}

export default YourApp;

import * as React from 'react';
import { Dimensions } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Bottom from '../stack/Bottomstack';
import 'react-native-gesture-handler';
const { height, width } = Dimensions.get('window');
import DrawerContent from './drawercontentscreen';
import Prenting from './parentingstack/homestack'

const Drawer = createDrawerNavigator();
export default function MyDrawer(props) {
  return (
    <Drawer.Navigator screenOptions={{
      drawerType: 'front',
      drawerStyle: { width: width / 1.5, borderTopRightRadius: 10, borderBottomRightRadius: 15, height: height / 100 * 99 }
    }} drawerContent={p => <DrawerContent {...p} />} >
      <Drawer.Screen name="MainScreen" component={Bottom}
        options={{ headerShown: false, }} />
      <Drawer.Screen name="Parenting" component={Prenting}
        options={{ headerShown: false }} />
    </Drawer.Navigator>
  );
}
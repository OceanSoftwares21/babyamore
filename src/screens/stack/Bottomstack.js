
import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TouchableWithoutFeedback, Modal } from 'react-native';
import Icon, { Icons } from '../../color/icon';
import Colors from '../../color/colors';
import Home from '../Homescreen/homescreen';
import Wishlist from '../Homescreen/wishlistscreen';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import * as Animatable from 'react-native-animatable';
import Search from '../search/sarchscreen';
const { height, width } = Dimensions.get('window');
import Cart from '../cartscreen/cartscreen'
import Icon3 from 'react-native-vector-icons/Feather';
import Profile from '../profile/profilescreen';
import Icon1 from 'react-native-vector-icons/Ionicons';
import { Badge } from 'react-native-paper';

var Windowheight = height;
const Tab = createBottomTabNavigator();
const TabArr = [
  {
    route: 'Home', type: Icons.Entypo, icon: 'home',
    component: Home,
  },
  {
    route: 'Searchscreen', type: Icons.AntDesign,
    icon: 'search1',
    component: Search,
  },
  {
    route: 'Wistlistscreen', type: Icons.FontAwesome,
    icon: 'heart-o',
    component: Wishlist,
  },
  {
    route: 'Cartscreen', type: Icons.Feather,
    icon: 'shopping-cart',
    component: Cart,
  },
  {
    route: 'Profilescreen', type: Icons.AntDesign,
    icon: 'user',
    component: Profile,
  },
];
const animate1 = { 0: { scale: .5, translateY: 7 }, .92: { translateY: -20 }, 1: { scale: 1.2, translateY: -14 } }
const animate2 = { 0: { scale: 1.2, translateY: -30 }, 1: { scale: 1, translateY: 7 } }
const circle1 = {
  0: { scale: 0 }, 0.3: { scale: .2 }, 0.5: { scale: .4 }, 0.8: { scale: .6 },
  1: { scale: 0.8 }
}
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }
const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props;
  const focused = accessibilityState.selected;
  const viewRef = React.useRef(null);
  const circleRef = React.useRef(null);
  const textRef = React.useRef(null);
  React.useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1);
      circleRef.current.animate(circle1);
      textRef.current.transitionTo({ scale: 1 });
    } else {
      viewRef.current.animate(animate2);
      circleRef.current.animate(circle2);
      textRef.current.transitionTo({ scale: 0 });
    }
  }, [focused])

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={onPress}
        activeOpacity={1}>
        <Animatable.View
          ref={viewRef}
          duration={500}
          style={styles.container}>
          <View style={styles.btn}>
            <Animatable.View
              ref={circleRef}
              style={styles.circle} />
            <Icon type={item.type} name={item.icon} color={focused ? Colors.white : null} />
          </View>
          <Animatable.Text
            ref={textRef}
            style={styles.text}>
            {item.label}
          </Animatable.Text>
        </Animatable.View>
      </TouchableOpacity>
    </View>

  )
}
export default function AnimTab1({ navigation }) {
  return (
    <Tab.Navigator
      screenOptions={{
        header: () =>
          <View style={{ height: Windowheight / 10.6, flexDirection: 'row', backgroundColor: 'white', }}>
            <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'flex-end' }}>
              <TouchableOpacity onPress={() => navigation.openDrawer()} >
                <Image style={{ height: height / 40, width: height / 31, tintColor: '#555555' }}
                  source={require('../../assets/images/menu-left.png')} />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.65, }}>
              <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ height: height / 25.4, width: height / 5, marginTop: 5, marginLeft: width / 6.8 }}
                  source={require('../../assets/images/logo.png')} />
                <TouchableWithoutFeedback onPress={() => console.log('press')}>
                  <Text style={{ fontSize: height / 90, fontFamily: 'Poppins-Regular', color: '#555555', marginTop: 4, marginLeft: width / 6.8 }}>
                    <Icon3 name='map-pin' style={{ fontSize: height / 80, }} />Map to see the product availability</Text>
                </TouchableWithoutFeedback>
              </View>
            </View>
            <View style={{ flex: 0.25, justifyContent: 'center' }}>
              <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <TouchableOpacity onPress={() => navigation.navigate('Notification')}
                  style={{}}>
                  <Icon1 style={{ color: '#555555', fontSize: height / 34, }} name="ios-notifications-outline" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Cartscreen')}
                  style={{}}>
                  <Image style={{ height: height / 36, width: height / 36, tintColor: '#555555' }}
                    source={require('../../assets/images/shopping-cart.png')} />
                </TouchableOpacity>
              </View>
              <View style={{ position: 'absolute', right: width / 36, bottom: height / 20, }}>
                <Badge style={{ fontSize: height / 90, fontFamily: 'Poppins-Medium', backgroundColor: '#FE2121', color: 'white', }} size={height / 55} >
                  3
                </Badge>
              </View>
              <View style={{ position: 'absolute', left: width / 12, bottom: height / 20 }}>
                <Badge style={{ fontSize: height / 90, fontFamily: 'Poppins-Medium', backgroundColor: '#FE2121', color: 'white', }} size={height / 55} >
                  3
                </Badge>
              </View>
            </View>
          </View>,
        headerStyle: { height: Windowheight / 10.6, }

      }}>
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen key={index} name={item.route} component={item.component}
            options={{
              tabBarBadge: 5,
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }} />

        )
      })}
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBar: {
    height: 70,
    position: 'absolute',
    borderTopLeftRadius: 10,
    borderTopLeftRadius: 10
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: Colors.white,
    justifyContent: 'center',
    alignItems: 'center'
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Colors.custom,
    borderRadius: 25,
  },
  text: {
    fontSize: 10,
    textAlign: 'center',
    color: Colors.primary,
  },
  centeredView: {
    flex: 1,
    alignItems: "center",
  },
  modalView: {
    flex: 0.5,
    width: width / 1.1,
    marginTop: height / 8,
    backgroundColor: '#EEEEEE',
    borderRadius: 20,
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 2,
    alignItems: 'center'
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  }
})




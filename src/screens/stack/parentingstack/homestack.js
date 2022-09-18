import React from 'react';
import {
    StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, TouchableWithoutFeedback,
    Modal
} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import colors from '../../../color/commoncolor';
import Toptab from './toptabstack'
import Icon1 from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icons2 from 'react-native-vector-icons/Ionicons';
import Icon4 from 'react-native-vector-icons/MaterialIcons';
import { Badge } from 'react-native-paper';

const { height, width } = Dimensions.get('window')
var Windowheight = height;

const Stack = createNativeStackNavigator();

const Homestack = ({ navigation }) => {

    const [modalVisible, setModalVisible] = React.useState(false);
    const Data = [
        {
            title: 'Welcome to Baby Amore',
            description: `You've unlocked your 1st ever offer on Baby Amore! Order today & avail Flat 30% OFF on Fashion, Diapers, Baby Gear,Nursery, Baby Care, Health & Safety, Toys & More>`,
            time: '2 hours ago'
        },
        {
            title: 'Booking Cancel',
            description: `You've unlocked your 1st ever offer on Baby Amore! Order today & avail Flat 30% OFF on Fashion, Diapers, Baby Gear,Nursery, Baby Care, Health & Safety, Toys & More>`,
            time: '2 hours ago'
        },

    ]
    return (
        <Stack.Navigator initialRouteName='Toptab'
            screenOptions={{
                header: () =>
                    <View style={{ height: Windowheight / 10.6, flexDirection: 'row', backgroundColor: 'white', }}>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'flex-end' }}>
                            {/* <Icons1 name="text" color={'#555555'} style={{ fontSize: height / 27 }}/> */}
                            <TouchableOpacity onPress={() => navigation.openDrawer()} >
                                <Image style={{ height: height / 40, width: height / 31, tintColor: '#555555' }}
                                    source={require('../../../assets/images/menu-left.png')} />
                            </TouchableOpacity>

                        </View>
                        <View style={{ flex: 0.65, }}>
                            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ height: height / 25.4, width: height / 5, marginTop: 5, marginLeft: width / 6.8 }}
                                    source={require('../../../assets/images/logo.png')} />
                                <TouchableWithoutFeedback onPress={() => console.log('press')}>
                                    <Text style={{ fontSize: height / 90, fontFamily: 'Poppins-Regular', color: '#555555', marginTop: 4, marginLeft: width / 6.8 }}>
                                        <Icon1 name='map-pin' style={{ fontSize: height / 80, }} />Map to see the product availability</Text>
                                </TouchableWithoutFeedback>
                            </View>
                        </View>

                        <View style={{ flex: 0.25, }}>
                            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Notification')}
                                    style={{}}>
                                    <Icons2 style={{ color: '#555555', fontSize: height / 34, }} name="ios-notifications-outline" />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Cartscreen')}
                                    style={{}}>
                                    <Image style={{ height: height / 36, width: height / 36, tintColor: '#555555' }}
                                        source={require('../../../assets/images/shopping-cart.png')} />
                                    {/* <Icon3 style={{ color: '#555555', fontSize: height / 34, }} name="shopping-cart" /> */}
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
                    </View>
                ,
                headerStyle: { height: height / 10.6, }
            }}>
            <Stack.Screen name="Toptab" component={Toptab} options={{ headerBackTitle: false }} />
        </Stack.Navigator>
    );
}
const styles = StyleSheet.create({
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
})
export default Homestack;
// navigation.navigate("App", {screen: "Dashboard"})

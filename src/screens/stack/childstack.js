import * as React from 'react';
import { Text, View, TouchableOpacity, Dimensions, Image, SafeAreaView, TouchableWithoutFeedback, } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Nappy from '../napycare/nappycarescreen';
import Details from '../detailscreen/detailscreen';
import Cart from '../cartscreen/cartscreen';
import Filter from '../filter/filterscreen';
import Address from '../cart/addresscreen';
import AddAddress from '../cart/addaddress';
import Payment from '../payment/paymentscreen';
import Addcard from '../payment/addcardscreen';
import Card from '../payment/cardscreen';
import Confirm from '../payment/orderconfirmscreen';
import Ordertrack from '../orders/trackorder';
import Ordersuccessscreen from '../orders/ordersuccessfullyscreen';
import Myorder from '../orders/myorderscreen';
import Orederfilter from '../orders/orderfilterscreen';
import Orederfilterdetail from '../orders/orderfilterdetails';
import Offer from '../offer/offerscreen';
import Blog from '../blog/blogscreen';
import BlogDetail from '../blog/blogdelailscreen';
import Profiledetails from '../profile/profiledetails';
import Notification from '../notification/notificationscreen';
import Homedetails from '../parenting/homescreen/homescreendetails';
import Readdetails from '../parenting/readscreens/readdetails';
import Detailscreen from '../parenting/readscreens/detailscreen';
import QandAnswer from '../parenting/Q&A/q&a-ask';
import Detail1 from '../parenting/Q&A/ques&ansdetail1';
import Detail2 from '../parenting/Q&A/ques&ansdetail2';
import Girdscreen from '../gird/girdscreen';
import Couponscreen from '../payment/couponscreen';
import Registersucess from '../Homescreen/registersucessreen';
import BabyDetail from '../Homescreen/babydetails';
import VideoDetails from '../parenting/AudioVideo/detailscreen';
import { Icons } from '../../color/icon';
import { Badge } from 'react-native-paper';
import Tabscreen from '../detailscreen/tabview';
const Stack = createNativeStackNavigator();
const { height, width } = Dimensions.get('window')
var Windowheight = height;
const Childstackscreen = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                header: ({ navigation }) =>
                    <SafeAreaView>
                        <View style={{ height: Windowheight / 10.6, flexDirection: 'row', backgroundColor: 'white', }}>
                            <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <TouchableOpacity
                                    onPress={() => navigation.goBack()}>
                                    <Icons.FontAwesome style={{
                                        color: '#1C2340',
                                        fontSize: height / 40,
                                    }} name="chevron-left" />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.65, }}>
                                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: height / 25.4, width: height / 5, marginTop: 5, marginLeft: width / 6.8 }}
                                        source={require('../../assets/images/logo.png')} />
                                    <TouchableWithoutFeedback onPress={() => console.log('press')}>
                                        <Text style={{ fontSize: height / 90, fontFamily: 'Poppins-Regular', color: '#555555', marginTop: 4, marginLeft: width / 6.8 }}>
                                            <Icons.Feather name='map-pin' style={{ fontSize: height / 80, }} />Map to see the product availability</Text>
                                    </TouchableWithoutFeedback>
                                </View>
                            </View>
                            <View style={{ flex: 0.25, justifyContent: 'center' }}>
                                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                    <TouchableOpacity onPress={() => navigation.navigate('Notification')}
                                        style={{}}>
                                        <Icons.Ionicons style={{ color: '#555555', fontSize: height / 34, }} name="notifications-outline" />
                                    </TouchableOpacity>
                                    <TouchableOpacity onPress={() => navigation.navigate('Cartscreen')}
                                        style={{}}>
                                        <Image style={{ height: height / 36, width: height / 36, tintColor: '#555555' }}
                                            source={require('../../assets/images/shopping-cart.png')} />
                                    </TouchableOpacity>
                                </View>
                                <View style={{ position: 'absolute', right: width / 60, bottom: height / 20, }}>
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
                    </SafeAreaView>,
                headerStyle: { height: Windowheight / 10.6, }
            }}>
            <Stack.Screen name="Tabscreen" component={Tabscreen} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Detailscreen" component={Details} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Nappyscreen" component={Nappy} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Cart" component={Cart} />
            <Stack.Screen name="Filterscreen" component={Filter} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Addrescreen" component={Address} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Addadress" component={AddAddress} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Paymentscreen" component={Payment} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Addcardscreen" component={Addcard} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Cardscreen" component={Card} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Orderconfirm" component={Confirm} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Ordertrackscreen" component={Ordertrack} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Ordersuccessfullyscreen" component={Ordersuccessscreen} options={{ headerShown: false }} />
            <Stack.Screen name="Myorderscreen" component={Myorder} options={{ headerBackVisible: false }} />
            <Stack.Screen name="OrderFilter" component={Orederfilter} options={{ headerBackVisible: false }} />
            <Stack.Screen name="OrderFilterdetail" component={Orederfilterdetail} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Offerscreen" component={Offer} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Blogscreen" component={Blog} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Blogdetailscreen" component={BlogDetail} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Profiledetailscreen" component={Profiledetails} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Notification" component={Notification} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Homedetail" component={Homedetails} options={{ headerBackVisible: false }} />
            <Stack.Screen name="ReadDetail" component={Readdetails} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Detail" component={Detailscreen} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Ques&Ans" component={QandAnswer} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Details1" component={Detail1} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Details2" component={Detail2} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Gird" component={Girdscreen} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Coupon" component={Couponscreen} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Baby" component={BabyDetail} options={{ headerBackVisible: false }} />
            <Stack.Screen name="Register" component={Registersucess} options={{ headerShown: false }} />
            <Stack.Screen name="Videodetail" component={VideoDetails} options={{ headerShown: false }} />
        </Stack.Navigator>
    );
}
export default Childstackscreen;

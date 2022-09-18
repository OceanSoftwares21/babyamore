import React from 'react';
import {
    Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image, TextInput
} from 'react-native';
import Colors from '../../color/commoncolor';
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window');
const Orderconfirmscreen = ({ navigation }) => {
    const [Data, setData] = React.useState([])
    const Data2 = [
        {
            id: 1, name: 'Allter Baby Diaper', amount: '₹1000', size: 'M', image: require('../../assets/images/sample3.jpg')
        },
        {
            id: 2, name: 'Shampoo', amount: '₹1000', size: 'M', image: require('../../assets/images/sample6.jpg')
        },
        { id: 3, name: 'Tableware', amount: '₹1000', size: 'M', image: require('../../assets/images/sample7.jpg') },

    ]
    const handleclick = (val) => {
        setData(
            Data.map(e => e.id === val.id ? ({ ...e, favBtn: !e.favBtn }) : (e))
        )
    }
    React.useEffect(() => {
        setData(Data2.map(s => ({ ...s, favBtn: false, counter: 0 })))
    }, [])
    const incrementCounter = (val) => {
        setData(
            Data.map((e) =>
                e.id === val.id ? ({ ...e, counter: e.counter + 1 }) : (e)
            ))
    }
    const decrementCounter = (val) => {
        setData(
            Data.map((e) =>
                e.id === val.id ? ({ ...e, counter: e.counter - 1 }) : (e)
            ))
    }
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={{ flex: 0.85 }}>
                <ScrollView style={{ flex: 1 }}>
                    <View style={{
                        height: height / 100 * 8,
                        justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
                    }}>
                        <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>Confirm order</Text>
                    </View>
                    <View style={styles.container1}>
                        <View style={styles.subContainer}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icons.AntDesign style={{ fontSize: height / 32, color: Colors.commoncolor }} name='checkcircle' />
                            </View>
                            <Text style={{ width: width / 2.8, height: 3, backgroundColor: Colors.commoncolor }}></Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icons.AntDesign style={{ fontSize: height / 32, color: Colors.commoncolor }} name='checkcircle' />
                            </View>
                            <Text style={{ width: width / 2.8, height: 3, backgroundColor: Colors.commoncolor }}></Text>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icons.AntDesign style={{ fontSize: height / 32, color: Colors.commoncolor }} name='checkcircle' />
                            </View>
                        </View>
                        <View style={{ flex: 0.4, flexDirection: 'row' }}>
                            <View style={{ flex: 0.3, justifyContent: 'center' }}>
                                <Text style={{ fontSize: height / 51, marginLeft: 15, color: '#1C2340', fontFamily: 'Poppins-Regular' }}>Address</Text>
                            </View>
                            <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: height / 51, marginLeft: 15, color: '#1C2340', fontFamily: 'Poppins-Regular' }}>Payment</Text>
                            </View>
                            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: height / 45, color: Colors.commoncolor, fontFamily: 'Poppins-Regular', marginRight: 10 }}>Confirm</Text>
                            </View>
                        </View>
                    </View>
                    <View >
                        <View style={{ height: height / 100 * 10, backgroundColor: 'white', borderTopRightRadius: 15, borderTopLeftRadius: 15, marginHorizontal: 10, flexDirection: 'row', marginTop: 5 }}>
                            <View style={{ flex: 1, backgroundColor: 'white', marginHorizontal: 15, borderRadius: 10, flexDirection: 'row' }}>
                                <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{
                                        height: height / 18, width: height / 18, borderRadius: 50, marginHorizontal: 10,
                                        justifyContent: 'center', alignItems: 'center'
                                    }}>
                                        <Image style={{ height: height / 15.5, width: height / 15.5 }}
                                            source={require('../../assets/images/cart.png')}
                                        />
                                    </View>
                                </View>
                                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-start' }}>
                                    <Text style={{ fontSize: height / 48, textAlign: 'center', fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>In Your Cart</Text>
                                </View>
                                <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={{
                                        height: height / 17, width: height / 17, borderColor: Colors.commoncolor, borderRadius: 10, marginHorizontal: 25,
                                        justifyContent: 'center', alignItems: 'center', borderWidth: 2
                                    }}>
                                        <Text style={{ fontSize: height / 40, fontFamily: 'Poppins-Bold', color: '#E74C3C' }}>3</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                        {Data.map((val, i) => {
                            return (
                                <View key={i} style={{ height: height / 5.5, justifyContent: 'center', marginTop: 10 }}>
                                    <View style={{ flex: 0.95, backgroundColor: 'white', marginHorizontal: 10, flexDirection: 'row', borderRadius: 10 }}>
                                        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image style={{ height: height / 6, width: height / 6, borderRadius: 5 }}
                                                source={val.image}
                                            />
                                        </View>
                                        <View style={{ flex: 0.6 }}>
                                            <View style={{ flex: 0.25, flexDirection: 'row', marginHorizontal: 5, alignItems: 'center', justifyContent: 'space-between' }}>
                                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>{val.name}</Text>
                                                <TouchableOpacity onPress={() => handleclick(val)}>
                                                    {val.favBtn ? <Icons.AntDesign style={[styles.cardTitleIcon, { color: Colors.commoncolor }]} name="heart" /> :
                                                        <Icons.FontAwesome style={[styles.cardTitleIcon, { color: '#58668c' }]} name="heart-o" />}
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ flex: 0.15, marginHorizontal: 5 }}>
                                                <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-Medium', color: '#FE2121' }}>{val.amount}</Text>
                                            </View>
                                            <View style={{ flex: 0.35, flexDirection: 'row', marginHorizontal: 5 }}>
                                                <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>Size Blue-{val.size}</Text>
                                                </View>
                                                <View style={{ flex: 0.6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                                    {val.counter == '0' ?
                                                        <TouchableOpacity
                                                            style={{ height: height / 29, width: height / 29, borderRadius: 50, backgroundColor: '#fedcdc', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Icons.Entypo style={{ fontSize: height / 62, color: '#FE2121', }} name="minus" />
                                                        </TouchableOpacity>
                                                        :
                                                        <TouchableOpacity onPress={() => decrementCounter(val)}
                                                            style={{ height: height / 29, width: height / 29, borderRadius: 50, backgroundColor: '#fedcdc', justifyContent: 'center', alignItems: 'center' }}>
                                                            <Icons.Entypo style={{ fontSize: height / 62, color: '#FE2121', }} name="minus" />
                                                        </TouchableOpacity>
                                                    }
                                                    <View style={{ height: height / 29, width: height / 29, backgroundColor: '#F4F6F7', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                                                        <Text style={{ fontSize: height / 62, color: '#1C2340', fontFamily: 'Poppins-Bold' }}>{val.counter}</Text>
                                                    </View>
                                                    <TouchableOpacity onPress={() => incrementCounter(val)}
                                                        style={{ height: height / 29, width: height / 29, borderRadius: 50, backgroundColor: '#fedcdc', justifyContent: 'center', alignItems: 'center' }}>
                                                        <Icons.Entypo style={{ fontSize: height / 62, color: '#FC8181', }} name="plus" />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                            <View style={{ flex: 0.25, marginHorizontal: 5, flexDirection: 'row', alignItems: 'center', }}>
                                                <View style={{ flex: 0.7, flexDirection: 'row', alignItems: 'flex-start' }}>
                                                    <Icons.AntDesign style={[styles.cardTitleIcon, { color: '#F4D03F' }]} name="star" />
                                                    <Icons.AntDesign style={[styles.cardTitleIcon, { color: '#F4D03F', marginLeft: 5 }]} name="star" />
                                                    <Icons.AntDesign style={[styles.cardTitleIcon, { color: '#F4D03F', marginLeft: 5 }]} name="star" />
                                                    <Icons.AntDesign style={[styles.cardTitleIcon, { color: '#F4D03F', marginLeft: 5 }]} name="star" />
                                                    <Text style={{ fontSize: height / 52, marginLeft: 5, marginBottom: 2 }}>4.9</Text>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </View>
                            )
                        })}
                    </View>
                    <View style={styles.container3}>
                        <View style={{ flex: 0.35, flexDirection: 'row', }}>
                            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: height / 15.5, width: height / 15.5, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: height / 15.5, width: height / 15.5 }}
                                        source={require('../../assets/images/truck.png')}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 0.7, justifyContent: 'center', }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Bold', color: '#1C2340' }}>Delivery</Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.3, justifyContent: 'center', marginHorizontal: 15 }}>
                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#637381', }}>No.12, 1, 57th St, Ashok Nagar, Chennai, Tamil Nadu 600083</Text>
                        </View>
                        <View style={{ flex: 0.35, justifyContent: 'center' }}>
                            <View style={{ flex: 0.8, backgroundColor: '#F9FAFB', marginHorizontal: 15, borderRadius: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                                <Text style={{ fontSize: height / 46.7, fontFamily: "Poppins-SemiBold", color: '#1C2340', marginLeft: 10 }}>Free</Text>
                                <Text style={{ fontSize: height / 56, fontFamily: "Poppins-Regular", color: '#8A8D9F', marginRight: 10 }}>Same day shipping</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container4}>
                        <View style={{ flex: 0.4, flexDirection: 'row', }}>
                            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                                <View style={{ height: height / 15.5, width: height / 15.5, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: height / 15.5, width: height / 15.5 }}
                                        source={require('../../assets/images/paymentscreen.png')}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 0.5, justifyContent: 'center', }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Bold', color: '#1C2340' }}>Payment</Text>
                            </View>
                            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                <TouchableOpacity >
                                    <Icons.MaterialCommunityIcons style={{ fontSize: 30, color: '#555555' }} name='dots-horizontal' />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 0.6, justifyContent: 'center' }}>
                            <View style={{ flex: 0.8, backgroundColor: '#F9FAFB', marginHorizontal: 15, borderRadius: 10, flexDirection: 'row', }}>
                                <View style={{ flex: 0.65, justifyContent: 'space-evenly' }}>
                                    <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-SemiBold', color: '#1C2340', marginLeft: 10 }}>Credit Card</Text>
                                    <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 10 }}>**** **** **** 3280</Text>
                                </View>
                                <View style={{ flex: 0.35, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: height / 100 * 6, width: height / 100 * 10 }}
                                        source={require('../../assets/images/master.png')} />
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container5}>
                        <View style={{ flex: 0.25, flexDirection: 'row', marginBottom: 5 }}>
                            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center', }}>
                                <View style={{ height: height / 15.5, width: height / 15.5, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: height / 15.5, width: height / 15.5 }}
                                        source={require('../../assets/images/rupee.png')}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 0.7, justifyContent: 'center', }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Bold', color: '#1C2340' }}>Cart Total</Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.2, justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 30, alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Sub total</Text>
                            <Text style={{ fontSize: 18, color: '#CCD1D1' }}>-  -  -  -  -  -  -  -  -</Text>
                            <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FC8181' }}>₹3297.00</Text>
                        </View>
                        <View style={{ flex: 0.2, justifyContent: 'center' }}>
                            <View style={{ flex: 0.5, justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 30 }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Shipping</Text>
                                <Text style={{ fontSize: 18, color: '#CCD1D1' }}>-  -  -  -  -  -  -  -  -</Text>
                                <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FC8181' }}>₹0.00</Text>
                            </View>
                            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-end' }}>
                                <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginRight: 20 }}> (Today we have kept free shipping above<Text style={{ fontSize: height / 68, fontFamily: 'Poppins-SemiBold', color: '#FC8181' }}>1999</Text><Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regula', color: '#8A8D9F' }}>)</Text></Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.25, justifyContent: 'center' }}>
                            <View style={{ flex: 0.5, justifyContent: 'space-between', flexDirection: 'row', marginHorizontal: 30 }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Total</Text>
                                <Text style={{ fontSize: 18, color: '#CCD1D1' }}>-  -  -  -  -  -  -  -  -</Text>
                                <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FC8181' }}>₹3297.00</Text>
                            </View>
                            <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-end', marginHorizontal: 20 }}>
                                <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>(includes ₹88.82 12% IGST estimated for India)</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.container6}>
                        <View style={{ flex: 0.35, flexDirection: 'row' }}>
                            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center', }}>
                                <View style={{ height: height / 15.5, width: height / 15.5, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: height / 15.5, width: height / 15.5 }}
                                        source={require('../../assets/images/coupon.png')}
                                    />
                                </View>
                            </View>
                            <View style={{ flex: 0.35, justifyContent: 'center', }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Bold', color: '#1C2340' }}>Apply Coupon</Text>
                            </View>
                            <View style={{ flex: 0.35, justifyContent: 'center', alignItems: 'center', }}>
                                <TouchableOpacity onPress={() => navigation.navigate('Coupon')}
                                    style={{
                                        height: height / 100 * 5, width: width / 100 * 28, borderWidth: 1, borderColor: Colors.commoncolor,
                                        borderRadius: 10, justifyContent: 'center', alignItems: 'center'
                                    }}>
                                    <Text style={{ fontSize: height / 68, fontFamily: 'poppins-Regular', color: Colors.commoncolor }}>
                                        Existing coupons
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                        <View style={{ flex: 0.65, justifyContent: 'center' }}>
                            <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                <View style={styles.input}>
                                    <TextInput style={{
                                        fontSize: height / 58, fontFamily: 'Poppins-Regular',
                                        marginLeft: 15, color: '#888C9B'
                                    }}
                                        placeholder="Enter Coupon Code" />
                                </View>
                                <TouchableOpacity style={{ height: '80%', width: '25%', backgroundColor: '#f68385', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: height / 50, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF' }}>Apply</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
            <View style={{ flex: 0.15, backgroundColor: '#F4F5FA', borderWidth: 0.5, borderColor: '#BFC9CA', borderTopLeftRadius: 30, borderTopRightRadius: 30 }}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 0.45, justifyContent: 'center', alignItems: 'center', marginHorizontal: 40, flexDirection: 'row', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-Bold', color: '#1C2340' }}>Total</Text>
                        <Text style={{ fontSize: height / 48, fontFamily: 'Poppins-Bold', color: '#FE2121' }}>₹3,297.00</Text>
                    </View>
                    <View style={{ flex: 0.65, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Ordersuccessfullyscreen')}
                            style={{ width: width / 1.2, height: height / 17, backgroundColor: Colors.commoncolor, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 46, fontFamily: 'Poppins-SemiBold', color: 'white' }}>Order now</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Colors.background
    },
    buttonStyle: {
        backgroundColor: '#b8baba',
        borderRadius: height / 81,
        margin: 5,
    },
    subText2: {
        color: '#ffffff',
        padding: height / 81,
        fontSize: 20,
        margin: 'auto',
    },
    buttonLeft: {
        width: height / 100 * 5
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height / 40,
    },
    container1: {
        height: height / 100 * 10, marginHorizontal: 8
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.6,
        alignItems: 'center',
        marginHorizontal: 15
    },
    cardTitleIcon: {
        fontWeight: 'bold',
        fontSize: height / 45,
    },
    container3: {
        height: height / 100 * 25, backgroundColor: 'white', marginHorizontal: 10, marginTop: 10
    },
    container4: {
        height: height / 100 * 25, backgroundColor: 'white', borderTopWidth: 0.5, marginHorizontal: 10, borderTopColor: '#CCD1D1'
    },
    container5: {
        height: height / 100 * 30, backgroundColor: 'white', borderTopWidth: 0.5, marginHorizontal: 10, borderTopColor: '#CCD1D1',
        justifyContent: 'center'
    },
    input: {
        width: '65%', height: '90%', justifyContent: 'center',
        borderRadius: 10, borderColor: Colors.commoncolor, borderWidth: 1
    },
    container6: {
        height: height / 100 * 24, backgroundColor: 'white', borderTopWidth: 0.5,
        marginHorizontal: 10, borderTopColor: '#CCD1D1', justifyContent: 'center'
    },
    container7: {
        height: height / 100 * 15, justifyContent: 'center'
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
})
export default Orderconfirmscreen;


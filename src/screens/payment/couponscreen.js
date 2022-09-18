import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import Colors from '../../color/commoncolor';
const { height, width } = Dimensions.get('window');
const Couponscreen = ({ navigation }) => {
    const Data = [
        {
            id: '1', title: 'COUPON DISCOUNT',
            offer: '30%', day: '3 DAYS LEFT'
        },
        {
            id: '2', title: 'COUPON DISCOUNT',
            offer: '40%', day: '6 DAYS LEFT'
        },
        {
            id: '3', title: 'COUPON DISCOUNT',
            offer: '60%', day: '9 DAYS LEFT'
        },
        {
            id: '4', title: 'COUPON DISCOUNT',
            offer: '70%', day: '12 DAYS LEFT'
        },
    ]
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView>
                <View style={styles.container1}>
                    <TouchableOpacity onPress={() => { navigation.navigate('Parenting') }}
                        style={{
                            height: height / 17, width: width / 2, backgroundColor: '#EEEEEE', borderTopRightRadius: height / 10, borderBottomRightRadius: height / 10,
                            position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center'
                        }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F', }}>
                            PARENTING
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}
                        style={{
                            height: height / 17, width: width / 2, backgroundColor: Colors.commoncolor, borderTopLeftRadius: height / 10, borderBottomLeftRadius: height / 10,
                            justifyContent: 'center', alignItems: 'center', borderTopRightRadius: height / 10, borderBottomRightRadius: height / 10,
                        }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', }}>
                            SHOPPING
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    {Data.map((val, i) => {
                        return (
                            <View key={i} style={{ marginTop: 20, backgroundColor: '#FDFEFE', height: height / 100 * 20, marginHorizontal: 15, borderRadius: 10, flexDirection: 'row', elevation: 3 }}>
                                <View style={{ flex: 0.35, justifyContent: 'center', alignItems: 'center', borderStyle: 'dashed', borderRightWidth: 1, borderRightColor: '#707070' }}>
                                    <Image style={{ height: height / 100 * 10, width: height / 100 * 10, tintColor: '#8A8D9F' }}
                                        source={require('../../assets/images/qrcode.png')}
                                    />
                                </View>
                                <View style={{ flex: 0.45, }}>
                                    <View style={{ flex: 0.3, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
                                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>{val.title}</Text>
                                    </View>
                                    <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F' }}>Up to</Text>
                                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#E08080', marginLeft: 5 }}>{val.offer}</Text>
                                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#E08080' }}>off</Text>
                                    </View>
                                    <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'flex-start' }}>
                                        <TouchableOpacity style={{ height: height / 22, width: height / 8, backgroundColor: Colors.commoncolor, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: 'white' }}>REDEEM</Text>
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center', }}>
                                    <Text style={{ fontSize: height / 72, fontFamily: 'Poppins-Regular', color: '#8A8D9F', transform: [{ rotate: '-90deg' }] }}>{val.day}</Text>
                                </View>
                            </View>
                        )
                    })}
                    <View style={{ height: height / 100 * 10, marginTop: 5, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Orderconfirm')}
                            style={{
                                height: height / 15, width: height / 3, backgroundColor: Colors.commoncolor, borderRadius: 40,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                            <Text style={{ fontSize: height / 47.7, fontFamily: 'Poppins-Medium', color: '#FFFFFF' }}>APPLY</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
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
        margin: 10,
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
        height: height / 100 * 6, justifyContent: 'center', marginHorizontal: 15, marginTop: 10,
    },
    container2: {
        flex: 1, marginHorizontal: 10, opacity: 2, borderRadius: 10, backgroundColor: '#F4F6F7',
        marginTop: 5
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
});
export default Couponscreen;
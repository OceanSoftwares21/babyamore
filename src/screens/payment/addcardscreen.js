import React from 'react';
import {
    Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity,
    ScrollView, Image,
} from 'react-native';
import Colors from '../../color/commoncolor';
import { SwipeRow } from 'react-native-swipe-list-view';
import { RadioButton, } from 'react-native-paper';
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window')
const Addcardscreen = (props) => {
    const [checked, setChecked] = React.useState(0);
    const cards = [{
        id: 111,
        name: "Username1",
        number: "2345 4567 5778 5677",
        type: "master",
        date: "12/21",
        code: '***'
    }, {
        id: 222,
        name: "Username2",
        number: "4567 2345 5778 5677",
        type: "visa",
        date: "22/24",
        code: '***'
    }, {
        id: 333,
        name: "Username3",
        number: "5778 5677 2345 4567 ",
        type: "master",
        date: "06/25",
        code: '***'
    }, {
        id: 444,
        name: "Username4",
        number: "6345 4567 5778 5677",
        type: "rupay",
        date: "12/21",
        code: '***'
    },
    ]
    const handledelete = (i, item) => {
    }
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView>
                <View style={{
                    height: height / 100 * 8,
                    justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
                }}>
                    <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>
                        Payment
                    </Text>
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
                            <Icons.Entypo style={{ fontSize: height / 32, color: Colors.commoncolor }} name='circle' />
                        </View>
                    </View>
                    <View style={{ flex: 0.4, flexDirection: 'row' }}>
                        <View style={{ flex: 0.3, justifyContent: 'center' }}>
                            <Text style={{ fontSize: height / 51, marginLeft: 15, color: '#1C2340', fontFamily: 'Poppins-Regular' }}>Address</Text>
                        </View>
                        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 51, marginLeft: 15, color: Colors.commoncolor, fontFamily: 'Poppins-SemiBold' }}>Payment</Text>
                        </View>
                        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: height / 51, color: '#1C2340', fontFamily: 'Poppins-Regular', marginRight: 10 }}>Confirm</Text>
                        </View>
                    </View>
                </View>
                {cards.length < 0 ?
                    <View style={styles.container2}>
                        <View style={{ flex: 0.7 }}>
                            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#8A8D9F' }}>Credit/Debit Card Details</Text>
                            </View>
                            <View style={{ flex: 0.55, justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ height: height / 100 * 25, width: height / 100 * 25 }}
                                    source={require('../../assets/images/card.png')}
                                />
                            </View>
                            <View style={{ flex: 0.2, alignItems: 'center' }}>
                                <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#5A5987' }}>You dont have any payment method.</Text>
                                <Text style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#5A5987' }}>Add Now</Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Cardscreen')}
                                style={{ width: '60%', height: '35%', backgroundColor: Colors.commoncolor, borderRadius: 35, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: 22, fontWeight: '500', color: 'white' }}>Add New Card</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    :
                    <View style={{ flex: 1 }}>
                        <View style={{ height: height / 100 * 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 20, fontFamily: 'Poppins-Medium', color: '#8A8D9F' }}>Credit/Debit Card Details</Text>
                        </View>
                        {cards.map((item, i) => {
                            return (
                                <SwipeRow leftOpenValue={height / 10.9} rightOpenValue={-height / 5.5} key={i}>
                                    <View style={{
                                        alignItems: 'center',
                                        flexDirection: 'row',
                                        justifyContent: 'space-between',
                                        padding: height / 101,
                                        borderRadius: height / 54,
                                        margin: height / 101,
                                        width: '98%'
                                    }}>
                                        <View></View>
                                        <View style={{ height: height / 100 * 12, justifyContent: 'space-evenly', }}>
                                            <TouchableOpacity onPress={() => props.navigation.navigate('Cardscreen')}
                                                style={{
                                                    height: height / 100 * 5, width: height / 100 * 5, borderRadius: 10,
                                                    justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginRight: 15, top: 0
                                                }}>
                                                <Icons.AntDesign style={{ fontSize: 20, color: '#153268' }} name='edit' />
                                            </TouchableOpacity>
                                            <TouchableOpacity onPress={() => handledelete(i, item)}
                                                style={{
                                                    height: height / 100 * 5, width: height / 100 * 5, borderRadius: 10,
                                                    justifyContent: 'center', alignItems: 'center', backgroundColor: 'white', marginRight: 15,
                                                }}>
                                                <Icons.FontAwesome style={{ fontSize: 20, color: '#FF0000' }} name='trash' />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{
                                        height: height / 100 * 15, marginTop: 10, marginHorizontal: 15, backgroundColor: '#FFFFFF', borderRadius: 15,
                                        flexDirection: 'row', elevation: 3
                                    }}>
                                        <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
                                            <RadioButton.Android
                                                color={Colors.commoncolor}
                                                value='0'
                                                status={i == checked ? 'checked' : 'unchecked'}
                                                onPress={() =>
                                                    setChecked(i)}
                                            />
                                        </View>
                                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
                                            {(() => {
                                                if (item.type === 'master') {
                                                    return <Image style={{ height: height / 100 * 6, width: height / 100 * 10 }} source={require('../../assets/images/master.png')} />
                                                } else if (item.type === 'visa') {
                                                    return <Image style={{ height: height / 100 * 3, width: height / 100 * 10 }} source={require('../../assets/images/visa.png')} />
                                                } else if (item.type === 'rupay') {
                                                    return <Image style={{ height: height / 100 * 3, width: height / 100 * 11 }} source={require('../../assets/images/rupay.png')} />
                                                } else {
                                                    return <Text style={{ fontSize: height / 27, fontWeight: 'bold', color: '#fff' }}>CARD</Text>
                                                }
                                            })()}
                                        </View>
                                        <View style={{ flex: 0.6, justifyContent: 'space-evenly', }}>
                                            <Text style={{ fontSize: height / 48, fontFamily: 'Poppins-Medium', color: '#5A5987', marginLeft: 5 }}>{item.name}</Text>
                                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#7B7E94', marginLeft: 5 }}>{item.number}</Text>
                                        </View>
                                    </View>
                                </SwipeRow>
                            )
                        })}
                        <View style={{ height: height / 100 * 12, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => props.navigation.navigate('Orderconfirm')}
                                style={{ width: height / 3, height: height / 15, backgroundColor: '#fc8181', borderRadius: height / 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-Medium', color: 'white' }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                }
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
        margin: 5
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
        height: height / 100 * 15, marginHorizontal: 8,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.6,
        alignItems: 'center',
        marginHorizontal: 15
    },
    container2: {
        flex: 0.8
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
export default Addcardscreen;
import React from 'react';
import {
    Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity,
    ImageBackground, Image, TouchableWithoutFeedback, ScrollView, TextInput
} from 'react-native';
import Colors from '../../color/commoncolor';
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window');
const Cardscreen = (props) => {
    const [cardInput, setCardInput] = React.useState({
        id: '',
        number: '',
        name: '------',
        date: '-----',
        code: '',
        type: ''
    });
    const handleChange = (name, value) => {
        console.log('1st', name);
        console.log('2st', value);
        let formattedText = value.replace(/\s?/g, '').replace(/(\d{4})/g, '$1 ').trim();
        setCardInput({
            ...cardInput,
            [name]: formattedText,
        });
    };
    const changetext = (text) => {
        setCardInput({
            ...cardInput,
            name: text,
        });
    }
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView>
                <View style={{
                    height: height / 100 * 8,
                    justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
                }}>
                    <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340' }}> Payment</Text>
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
                <View style={{ flex: 0.65, }}>
                    <View style={modal.container}>
                        <ImageBackground imageStyle={{ borderRadius: 8 }} style={{
                            height: height / 3.8,
                            width: '100%',
                        }} source={require('../../assets/images/cardMain.png')} >
                            <View style={{ padding: 10 }}>
                                {(() => {
                                    if (cardInput.number[0] === '2' || cardInput.number[0] === '5') {
                                        return <Image style={{ height: height / 100 * 6, width: height / 100 * 10 }} source={require('../../assets/images/master.png')} />
                                    } else if (cardInput.number[0] === '4') {
                                        return <Image style={{ height: height / 100 * 3, width: height / 100 * 10 }} source={require('../../assets/images/visa.png')} />
                                    } else if (cardInput.number[0] === '6') {
                                        return <Image style={{ height: height / 100 * 3, width: height / 100 * 11 }} source={require('../../assets/images/rupay.png')} />
                                    } else {
                                        return <Text style={{ fontSize: height / 32, fontFamily: 'Poppins-bold', color: '#fff', marginTop: 5 }}>CARD</Text>
                                    }
                                })()}
                                <Text style={modal.cardNo}>
                                    {cardInput.number.length ?
                                        cardInput.number : '****   ****   ****   ****'}
                                </Text>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: height / 27 }}>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Bold', color: '#fff' }}>CARD HOLDER NAME</Text>
                                        <Text style={{ fontSize: height / 58, color: '#fff', marginTop: 10 }}>
                                            {cardInput.name.length ?
                                                cardInput.name :
                                                '-------------'
                                            }
                                        </Text>
                                    </View>
                                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Bold', color: '#fff' }}>VALID THRU</Text>
                                        <Text style={{ fontSize: height / 58, color: '#fff', marginTop: 10 }}>{cardInput.date}</Text>
                                    </View>
                                </View>
                            </View>
                        </ImageBackground>
                        <View style={{ marginTop: height / 40 }}>
                            <View style={{ height: height / 14.1, borderRadius: 10, justifyContent: 'center', elevation: 2, backgroundColor: 'white' }}>
                                <TextInput
                                    style={modal.modalIn}
                                    placeholder='Card Number'
                                    keyboardType={'numeric'}
                                    maxLength={16}
                                    onChangeText={(text) => handleChange('number', text)}
                                />
                            </View>
                            <View style={{ height: height / 14.1, marginTop: 15, borderRadius: 10, justifyContent: 'center', elevation: 2, backgroundColor: 'white' }}>
                                <TextInput
                                    style={modal.modalIn}
                                    placeholder='Card Holder Name'
                                    onChangeText={(text) => changetext(text)}
                                    maxLength={19}
                                />
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between', width: '95%', alignItems: 'center' }}>
                                <View style={{ height: height / 14.1, width: '45%', borderRadius: 10, justifyContent: 'center', elevation: 2, backgroundColor: 'white', marginTop: 15 }}>
                                    <TextInput
                                        style={modal.modalIn}
                                        placeholder='Expiry'
                                        maxLength={6}
                                    />
                                </View>
                                <View style={{ height: height / 14.1, width: '45%', borderRadius: 10, justifyContent: 'center', elevation: 2, backgroundColor: 'white', marginTop: 15 }}>
                                    <TextInput
                                        style={modal.modalIn}
                                        placeholder='Security Code'
                                        maxLength={3}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: height / 10, justifyContent: 'center', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => props.navigation.goBack()}
                        style={{ width: height / 3, height: height / 15, backgroundColor: Colors.commoncolor, borderRadius: height / 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-Medium', color: 'white' }}>Save</Text>
                    </TouchableOpacity>
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
        margin: 5
    },
    subText2: {
        color: '#ffffff',
        fontSize: 20,
    },
    buttonLeft: {
        width: height / 100 * 5
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height / 40,
    },
    container1: {
        height: height / 100 * 10, marginHorizontal: 8,
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.6,
        alignItems: 'center',
        marginHorizontal: 12
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
const modal = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        padding: height / 40,
        margin: height / 81,
        borderRadius: height / 81, elevation: 3
    },
    pic: {
        height: height / 4,
        width: '100%',
    },
    radioPic: {
        height: height / 27,
        width: height / 8,
        resizeMode: 'contain'
    },
    modalIn: {
        marginLeft: 10, fontSize: height / 57.5, fontFamily: 'Poppins-Regular', color: '#9695AD'
    },
    cardNo: {
        fontSize: height / 40,
        fontWeight: 'bold',
        color: '#fff',
        textAlign: 'center',
        marginTop: height / 32.5
    },
    buttonStyle: {
        color: '#FFFFFF',
        height: height / 20,
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonTextStyle: {
        color: '#FFFFFF',
        fontSize: height / 45,
        fontWeight: 'bold'
    },

});
export default Cardscreen;
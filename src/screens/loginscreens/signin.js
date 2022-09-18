import React, { useEffect, useState } from 'react';
import {
    Text, View, StyleSheet, SafeAreaView, ScrollView, Dimensions,
    TextInput, TouchableOpacity, Image, Modal
} from 'react-native';
import colors from '../../color/commoncolor';
import { Checkbox, IconButton } from 'react-native-paper';
import baseurl from '../../baseurl/baseurl';
import axios from 'axios';
const { height, width } = Dimensions.get('window')
import { Icons } from '../../color/icon';
const Signinscreen = ({ navigation }) => {
    const [isSelected, setSelection] = useState(false);
    const [modalVisible, setModalVisible] = useState(false);
    const [username, setName] = useState()
    const [email, setEmail] = useState()
    const [phonenumber, setNumber] = useState()
    function makeid() {
        var text = "";
        var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        for (var i = 0; i < 30; i++)
            text += possible.charAt(Math.floor(Math.random() * possible.length));
        return text;
    }
    const signupfunction = () => {
        let data = makeid()
        // axios.post(  'http://54.255.246.233:5000/UserEmployee/Register',
        //     { Name: username, Email: email, PhoneNumber: phonenumber, Token: data })
        //     .then(response => {
        //         console.log(response.data._id) 
        //          let id=response.data._id
        //          navigation.navigate('SininOtpscreen',{id})
        //         // if (response.data.success == 'Successfully Create User') {
        //         //     navigation.navigate('Loginstack')
        //         // }
        //     })
        //     // .finally(function () {
        //     //     setLoding(false)
        //     // })
        //     .catch(error => console.log(error))
        navigation.navigate('SininOtpscreen', { id })
    }
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ height: height / 10, flexDirection: 'row', backgroundColor: '#FFFFFF' }}>
                    <View style={{ flex: 0.25, justifyContent: 'center' }}>
                        <TouchableOpacity
                            onPress={() => navigation.goBack()}>
                            <Icons.Entypo style={styles.leftIcon} name="chevron-left" />
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.75, justifyContent: 'center' }}>
                        <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340', marginLeft: width / 6 }}>Sign up</Text>
                    </View>
                </View>
                <View style={styles.container1}>
                    <View style={{ height: height / 1.3, backgroundColor: 'white', borderRadius: 8, elevation: 3, marginHorizontal: 15 }}>
                        <View style={styles.view1}>
                            <Image style={{ height: height / 14.5, width: height / 2.8 }}
                                source={require('../../assets/images/logo.png')} />
                        </View>
                        <View style={styles.view2}>
                            <View style={{ flex: 0.4, justifyContent: 'flex-end', marginHorizontal: 22 }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#707070' }}>Name</Text>
                            </View>
                            <View style={{ flex: 0.6 }}>
                                <View style={{ height: height / 14, flexDirection: 'row', backgroundColor: '#F4F5F7', marginHorizontal: 15, borderRadius: 10 }}>
                                    <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icons.FontAwesome name="user-circle-o" size={height / 45} color={colors.commoncolor} />
                                    </View>
                                    <View style={{ width: '85%', justifyContent: 'center', marginTop: 5 }}>
                                        <TextInput
                                            style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#1C2340' }}
                                            placeholder="User"
                                            keyboardType='default'
                                            onChangeText={(text) => setName(text)}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.view3}>
                            <View style={{ flex: 0.4, justifyContent: 'flex-end', marginHorizontal: 22 }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#707070' }}>Email</Text>
                            </View>
                            <View style={{ flex: 0.6 }}>
                                <View style={{ height: height / 14, flexDirection: 'row', backgroundColor: '#F4F5F7', marginHorizontal: 15, borderRadius: 10 }}>
                                    <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icons.Entypo name="mail" size={height / 45} color={colors.commoncolor} />
                                    </View>
                                    <View style={{ width: '85%', justifyContent: 'center', marginTop: 5 }}>
                                        <TextInput
                                            style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#1C2340' }}
                                            placeholder="Email"
                                            keyboardType='default'
                                            onChangeText={(text) => setEmail(text)}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.view3}>
                            <View style={{ flex: 0.4, justifyContent: 'flex-end', marginHorizontal: 22 }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#707070' }}>Phone Number</Text>
                            </View>
                            <View style={{ flex: 0.6 }}>
                                <View style={{ height: height / 14, flexDirection: 'row', backgroundColor: '#F4F5F7', marginHorizontal: 15, borderRadius: 10 }}>
                                    <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Icons.Entypo name="mobile" size={height / 45} color={colors.commoncolor} />
                                    </View>
                                    <View style={{ width: '85%', justifyContent: 'center', marginTop: 5 }}>
                                        <TextInput
                                            style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#1C2340' }}
                                            placeholder="9884286125"
                                            keyboardType='numeric'
                                            maxLength={10}
                                            onChangeText={(text) => setNumber(text)}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                        <View style={styles.view4}>
                            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                <Checkbox
                                    color={colors.commoncolor}
                                    status={isSelected ? 'checked' : 'unchecked'}
                                    onPress={() => setSelection(!isSelected)}
                                />
                            </View>
                            <View style={{ flex: 0.8, alignItems: 'center', flexDirection: 'row', justifyContent: 'flex-start' }}>
                                <Text style={styles.v4text}>By creating an account or logging in, you agree to BabyAmore’s Conditions of Useand Privacy Policy
                                    <Icons.Ionicons onPress={() => { setModalVisible(true) }}
                                        name='ios-information-circle-outline' style={{ fontSize: 20, color: colors.commoncolor }} />
                                </Text>
                            </View>
                            <Modal
                                transparent={true}
                                animationType='fade'
                                visible={modalVisible}>
                                <View style={styles.centeredView}>
                                    <View style={styles.modalView}>
                                        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                            <Text style={{ fontSize: height / 34, fontFamily: 'Poppins-Medium', color: '#FC8181', }}>Terms and Conditions</Text>
                                        </View>
                                        <View style={{ flex: 0.65, marginHorizontal: 15, }}>
                                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F', }}>
                                                Lorem ipsum dolor sit amet, consectetur  elit, sed
                                                do eiusmod tempor incididunt ut labore et dolore
                                                magna aliqua. Ut enim ad minim veniam, quis
                                                nostrud exercitation ullamco laboris nisi ut aliquip
                                                ex ea commodo consequat. Duis aute irure dolor
                                                in reprehenderit in voluptate velit esse cillum
                                                dolore eu fugiat nulla pariatur. Excepteur sint
                                                occaecat cupidatat non proident, sunt in culpa
                                                qui officia deserunt mollit anim id est laborum
                                            </Text>
                                        </View>
                                        <View style={{ flex: 0.15, alignItems: 'center', justifyContent: 'flex-start' }}>
                                            <TouchableOpacity onPress={() => setModalVisible(false)}
                                                style={{ height: height / 18, width: height / 7, backgroundColor: colors.commoncolor, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF' }}>OK</Text>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </Modal>
                        </View>
                        <View style={styles.view5}>
                            {isSelected ?
                                <TouchableOpacity
                                    onPress={() => signupfunction()}
                                    style={{ height: height / 14.9, width: height / 3.7, backgroundColor: colors.commoncolor, borderRadius: height / 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: height / 46.7, color: '#FFFAED', fontFamily: 'Poppins-SemiBold', }}>Sign up</Text>
                                </TouchableOpacity> :
                                <View
                                    style={{ height: height / 14.9, width: height / 3.7, backgroundColor: '#fed7d7', borderRadius: height / 10, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: height / 46.7, color: '#FFFAED', fontFamily: 'Poppins-SemiBold', }}>Sign up</Text>
                                </View>}
                        </View>
                        <View style={styles.view6}>
                            <View style={[Platform.OS === 'ios' ? { flex: 0.4, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' } : { flex: 0.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-around' }]}>
                                {Platform.OS === 'ios' ?
                                    <TouchableOpacity >
                                        <View style={{
                                            height: height / 23, width: height / 23, borderRadius: 50, borderWidth: 1, borderColor: colors.commoncolor,
                                            justifyContent: 'center', alignItems: 'center',
                                        }}>
                                            <Icons.AntDesign name="apple1" size={height / 51} color={colors.commoncolor} />
                                        </View>
                                    </TouchableOpacity>
                                    : null}
                                <TouchableOpacity >
                                    <View style={{
                                        height: height / 23, width: height / 23, borderRadius: 50, borderWidth: 1, borderColor: colors.commoncolor,
                                        justifyContent: 'center', alignItems: 'center',
                                    }}>
                                        <Icons.FontAwesome name="google" size={height / 51} color={colors.commoncolor} />
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <View style={{
                                        height: height / 23, width: height / 23, borderRadius: 50, borderWidth: 1, borderColor: colors.commoncolor,
                                        justifyContent: 'center', alignItems: 'center',
                                    }}>
                                        <Icons.FontAwesome name="facebook" size={height / 51} color={colors.commoncolor} />
                                    </View>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={styles.container2}>
                    <Text style={styles.cont2text1}>Already have an account?</Text>
                    <Text onPress={() => navigation.navigate('Loginscreen')} style={styles.cont2text2}>SIGN IN !</Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: colors.background
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height / 25,
        marginLeft: 10
    },
    container1: {
        height: height / 1.2, justifyContent: 'center', alignItems: 'center'
    },
    container2: {
        height: height / 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'
    },
    cont2text1: {
        fontSize: height / 46.7, fontFamily: 'Poppins-SemiBold', color: '#1C2340',
    },
    cont2text2: {
        fontSize: height / 48, fontFamily: 'Poppins-Bold', color: colors.commoncolor, marginLeft: 15
    },
    view1: {
        flex: 0.15,
        justifyContent: 'center', alignItems: 'center'
    },
    view2: {
        flex: 0.15, justifyContent: 'center'
    },
    view3: {
        flex: 0.15, justifyContent: 'flex-end'
    },
    view4: {
        flex: 0.13, flexDirection: 'row', justifyContent: 'space-evenly',
        marginHorizontal: 10,
    },
    view5: {
        flex: 0.13, justifyContent: 'flex-end', alignItems: 'center'
    },
    view6: {
        flex: 0.13, flexDirection: 'row', justifyContent: 'center'
    },
    v4checkbox: {
        flex: 0.2, alignItems: 'flex-end', marginTop: height / 40
    },
    v4label: {
        flex: 0.8, marginTop: 5, marginHorizontal: 5, marginTop: height / 40
    },
    v4text: {
        fontSize: height / 74, fontFamily: 'Poppins-Medium', color: '#8A8D9F',
    },
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(28,35,64,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        height: height / 2.1,
        width: height / 2.2,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})
export default Signinscreen;
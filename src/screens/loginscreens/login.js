import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
    Text, View, StyleSheet, SafeAreaView, TextInput,
    Image, Dimensions, Alert, TouchableOpacity,
} from 'react-native';
import colors from '../../color/commoncolor';
import { Icons } from '../../color/icon';
import Baseurl from '../../baseurl/baseurl';
const { height, width } = Dimensions.get('window');
const Loginscreen = ({ navigation }) => {
    const [Clicked, setclickedopen] = useState(true);
    const [email, setemail] = useState([]);
    const [number, setnumber] = useState([]);
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    var userid;
    const handlelogin = async () => {
        // if (!email) {
        //     Alert.alert('pleas enter email')
        // }
        // if (!number) {
        //     Alert.alert('pleas enter mobile number')
        // }
        // if (Clicked && reg.test(email)) {
        //     navigation.navigate('Otpscreen', { email, Clicked })
        // }
        // if (Clicked == false && number.length > 0) {
        //     navigation.navigate('Otpscreen', { number, Clicked })
        // }
        // if (reg.test(email)==false&&Clicked) {
        //     Alert.alert('pleas enter valid email')  
        // }
        if (Clicked) {
            navigation.navigate('EmailOtpscreen')
        } else {
            if (number.length >= 10) {
                console.log('number length');
                await axios.post(Baseurl + `/UserEmployee/OTPlogin/login`, { PhoneNumber: number })
                    .then(response => {
                        console.log(response.data);
                        var res = response.data.message
                        userid = response.data.id
                        if (res == 'OTP has sent to your Phone') {
                            navigation.navigate('Otpscreen', userid)
                            //    console.log('id',userid);
                        }
                    }).catch(err => {
                        let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
                        console.log(err.message);
                        Alert.alert('Error', message == `Email Doesn't exist or Account is inactive` ? 'Your Account is not Registered please register your account' : message)
                    })
            } else {
                Alert.alert('Please check mobile number ')
            }
            // navigation.navigate('Otpscreen')
        }
    }
    const handlecheck = (text) => {
        if (Clicked) {
            setemail(text)
        } else {
            setnumber(text)
        }
    }
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#FFFFFF' }}>
                <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>Sign in</Text>
            </View>
            <View style={styles.container1}>
                <Image style={styles.logo}
                    source={require('../../assets/images/logo.png')}
                />
            </View>
            <View style={styles.container2}>
                <Text style={styles.container2text1}>Welcome Back!</Text>
                <Text style={styles.container2text2}>Sign in to continue</Text>
            </View>
            <View style={styles.container3}>
                <View style={styles.cont3mainview}>
                    <View style={styles.cont3view1}>
                        <TouchableOpacity onPress={() => setclickedopen(true)}
                            style={[Clicked == true ? { height: height / 16, width: height / 5.9, backgroundColor: colors.commoncolor, borderTopLeftRadius: 10, borderBottomLeftRadius: 10, justifyContent: 'center', alignItems: 'center', } : { height: height / 16, width: height / 5.9, backgroundColor: 'white', borderWidth: 1, borderColor: colors.commoncolor, justifyContent: 'center', alignItems: 'center', borderTopLeftRadius: 10, borderBottomLeftRadius: 10 }]}>
                            <Text style={[Clicked == true ? { fontSize: height / 46.7, fontFamily: 'Poppins-SemiBold', color: 'white' } : { fontSize: height / 46.7, fontFamily: 'Poppins-Medium', color: colors.commoncolor }]}>Email</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setclickedopen(false)}
                            style={[Clicked ? { height: height / 16, width: height / 5.9, backgroundColor: 'white', borderWidth: 1, borderColor: colors.commoncolor, borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center', alignItems: 'center' } : { height: height / 16, width: height / 5.9, backgroundColor: colors.commoncolor, borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: 'center', alignItems: 'center' }]}>
                            <Text style={[Clicked ? { fontSize: height / 46.7, fontFamily: 'Poppins-Medium', color: colors.commoncolor } : { fontSize: height / 46.7, fontFamily: 'Poppins-SemiBold', color: 'white' }]}>Phone No </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cont3view2}>
                        <View style={{ flex: 0.35, marginHorizontal: 30, justifyContent: 'flex-end' }}>
                            {Clicked ? <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Email</Text>
                                :
                                <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Phone Number</Text>
                            }
                        </View>
                        <View style={{ flex: 0.65, justifyContent: 'flex-start', alignItems: 'center', marginHorizontal: 25, }}>
                            <View style={{ height: height / 14, width: '100%', flexDirection: 'row', backgroundColor: '#f4f5f7', marginHorizontal: 15, borderRadius: 15 }}>
                                <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                    {Clicked ? <Icons.Entypo name="mail" size={height / 45} color={colors.commoncolor} /> : <Icons.Entypo name="mobile" size={height / 40} color={colors.commoncolor} />}
                                </View>
                                <View style={{ width: '85%', justifyContent: 'center' }}>
                                    {Clicked ?
                                        <TextInput
                                            style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#1C2340' }}
                                            placeholder="@email.com"
                                            keyboardType='default'
                                            onChangeText={(text) => handlecheck(text)}
                                        /> :
                                        <TextInput
                                            style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#1C2340' }}
                                            placeholder="9884286125"
                                            keyboardType='numeric'
                                            onChangeText={(text) => handlecheck(text)}
                                            maxLength={10}
                                        />
                                    }
                                </View>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cont3view3}>
                        <View style={{ flex: 0.6, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => handlelogin()}
                                style={{ height: height / 14.9, width: height / 3.7, backgroundColor: colors.commoncolor, borderRadius: height / 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: height / 46.7, color: '#FFFAED', fontFamily: 'Poppins-SemiBold', marginTop: 3 }}>SIGN IN</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.4, alignItems: 'center', }}>
                            <Text onPress={() => navigation.navigate('Bottomtab')}
                                style={{ fontSize: height / 58, textDecorationLine: 'underline', fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginTop: 10 }}>Continue as guest</Text>
                        </View>
                    </View>
                    <View style={styles.cont3view4}>
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
            <View style={styles.container4}>
                <Text style={styles.cont4text1}>Don't have an account?</Text>
                <Text onPress={() => navigation.navigate('Sign')}
                    style={styles.cont4text2}>SIGN UP !</Text>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: colors.background
    },
    container1: {
        flex: 0.1, justifyContent: 'center', alignItems: 'center'
    },
    container2: {
        flex: 0.1, marginHorizontal: 30,
    },
    container2text1: {
        fontSize: height / 34, color: colors.commoncolor, fontFamily: "Poppins-SemiBold",
    },
    container2text2: {
        fontSize: height / 41, fontFamily: 'Poppins-SemiBold', color: '#1C2340'
    },
    container3: {
        flex: 0.6, alignItems: 'center', justifyContent: 'center'
    },
    cont3mainview: {
        height: height / 1.8, backgroundColor: '#FFFFFF', borderRadius: 10, width: width / 1.1, elevation: 3,
    },
    cont3view1: {
        flex: 0.2, justifyContent: 'center', alignItems: 'center', marginHorizontal: 30, flexDirection: 'row',
    },
    cont3view2: {
        flex: 0.3,
    },
    cont3view3: {
        flex: 0.3
    },
    cont3view4: {
        flex: 0.15, flexDirection: 'row', justifyContent: 'center'
    },
    container4: {
        flex: 0.1, flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start'
    },
    forgettext: {
        fontSize: 16, textAlign: 'right', color: '#fc8181', marginRight: 20, marginTop: 5
    },
    con3iconview1: {
        width: '20%', alignItems: 'flex-end',
    },
    con3iconview2: {
        width: '80%',
    },
    container3text: {
        fontSize: 18, fontFamily: 'Poppins-Regular', marginTop: 5,
    },
    cont4text1: {
        fontSize: height / 46.7, fontFamily: 'Poppins-SemiBold', color: '#1C2340', marginTop: 10
    },
    cont4text2: {
        fontSize: height / 48, color: colors.commoncolor, marginLeft: 10, marginTop: 10,
        fontFamily: 'Poppins-Bold'
    },
    logo: {
        height: height / 14.5, width: height / 2.8
    }
})
export default Loginscreen;

import React, { useState, useRef, useEffect } from 'react';
import {
    Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity,
    Keyboard, TextInput, Alert, ActivityIndicator
} from 'react-native';
import Colors from '../../color/commoncolor'
import Baseurl from '../../baseurl/baseurl';
import { Icons } from '../../color/icon';
import axios from 'axios';
import { AuthContext } from '../stack/context';
const { height, width } = Dimensions.get('window')
var heightScreen = height;
var widthScreen = width;
const Phoneotpscreen = (props) => {
    var id = props.route.params;
    const { signIn } = React.useContext(AuthContext);
    const [numbaer, setnum] = React.useState()
    const [loadingstate, setLoading] = useState(false);
    const [editableText1, setEditableText1] = useState([]);
    const [editableText2, setEditableText2] = useState([]);
    const [editableText3, setEditableText3] = useState([]);
    const [editableText4, setEditableText4] = useState([]);
    const [editableText5, setEditableText5] = useState([]);
    const [editableText6, setEditableText6] = useState([]);
    const [Values, setValues] = useState(false);
    const [Values2, setValues2] = useState(false);
    const [Values3, setValues3] = useState(false);
    const [Values4, setValues4] = useState(false);
    const [Values5, setValues5] = useState(false);
    const [Values6, setValues6] = useState(false);
    const firstinput = useRef();
    const secondinput = useRef();
    const thirdinput = useRef();
    const fourthinput = useRef();
    const fifthinput = useRef();
    const sixthinput = useRef();
    const funtextinput1 = (text) => {
        if (text) {
            secondinput.current.focus(),
                setEditableText1(text),
                setValues(true)
        }
    }
    const funtextinput2 = (text) => {
        if (text) {
            thirdinput.current.focus()
            setEditableText2(text),
                setValues2(true)
        }
    }
    const funtextinput3 = (text) => {
        if (text) {
            fourthinput.current.focus()
            setEditableText3(text), setValues3(true)
        }
    }
    const funtextinput4 = (text) => {
        if (text) {
            fifthinput.current.focus()
            setEditableText4(text), setValues4(true)
        }
    }
    const funtextinput5 = (text) => {
        if (text) {
            sixthinput.current.focus()
            setEditableText5(text), setValues5(true)
        }
    }
    const funtextinput6 = (text) => {
        if (text) {
            setEditableText6(text), setValues6(true)
        }
    }
    const verifyfunction = async () => {
        setLoading(true)
        var otp = editableText1.concat(editableText2, editableText3, editableText4, editableText5, editableText6)
        if (otp.length >= 6) {
            await axios.post(Baseurl + `/UserEmployee/otpverify/Phone/login/${id}/`, { "otpgenerate": otp })
                .then(res => {
                    // console.log(res.data, 'dddddd');
                    // s(res.data)
                    if (res.data) {
                        signIn(res.data)
                        setLoading(false)
                    }
                })
                .catch(err => {
                    setLoading(false)
                    let message = typeof err.response !== "undefined" ? err.response.data.message : err.message;
                    Alert.alert('error', message)
                })
        } else {
            Alert.alert('Please enter otp')
        }
        //props. navigation.navigate('Bottomtab')
    }
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={{ flex: 0.1, backgroundColor: '#FFFFFF', flexDirection: 'row' }}>
                <View style={{ flex: 0.25, justifyContent: 'center' }}>
                    <TouchableOpacity
                        onPress={() => props.navigation.goBack()}>
                        <Icons.FontAwesome style={styles.leftIcon} name="chevron-left" />
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.75, justifyContent: 'center' }}>
                    <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-SemiBold', color: '#1C2340', marginLeft: width / 15 }}>Phone Verification</Text>
                </View>
            </View>
            <View style={styles.container}>
                <View style={styles.container1}>
                    <View style={styles.view1}>
                        <Text style={{ fontSize: height / 34, fontFamily: 'Poppins-Medium', color: '#FC8181' }}>OTP Verification</Text>
                    </View>
                    <View style={styles.view2}>
                        <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>You will receive a OTP via SMS</Text>
                        <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginTop: 5 }}>(+91) 9*** ****65</Text>
                    </View>
                    <View style={styles.view3}>
                        <View style={styles.textInput}>
                            <TextInput
                                ref={firstinput}
                                underlineColorAndroid={Values ? Colors.commoncolor : '#f4f5f7'}
                                style={styles.textinputtext}
                                onChangeText={(text) => { funtextinput1(text) }}
                                keyboardType="numeric"
                                numberOfLines={1}
                                maxLength={1}
                                blurOnSubmit={false}
                                onKeyPress={({ nativeEvent }) => {
                                    nativeEvent.key === 'Backspace' ? (firstinput.current.clear(), setValues(false)) : null
                                }}
                            />
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                ref={secondinput}
                                underlineColorAndroid={Values2 ? Colors.commoncolor : '#f4f5f7'}
                                style={styles.textinputtext}
                                onChangeText={(text) => funtextinput2(text)}
                                keyboardType="numeric"
                                numberOfLines={1}
                                maxLength={1}
                                onKeyPress={({ nativeEvent }) => {
                                    nativeEvent.key === 'Backspace' ? (firstinput.current.focus(), secondinput.current.clear(), setValues2(false), firstinput.current.clear()) : null
                                }}
                            />
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                ref={thirdinput}
                                underlineColorAndroid={Values3 ? Colors.commoncolor : '#f4f5f7'}
                                style={styles.textinputtext}
                                onChangeText={(text) => funtextinput3(text)}
                                keyboardType="numeric"
                                numberOfLines={1}
                                maxLength={1}
                                onKeyPress={({ nativeEvent }) => {
                                    nativeEvent.key === 'Backspace' ? (secondinput.current.focus(), thirdinput.current.clear(), setValues3(false), secondinput.current.clear()) : null
                                }}
                            />
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                ref={fourthinput}
                                underlineColorAndroid={Values4 ? Colors.commoncolor : '#f4f5f7'}
                                style={styles.textinputtext}
                                onChangeText={(text) => funtextinput4(text)}
                                keyboardType="numeric"
                                numberOfLines={1}
                                maxLength={1}
                                onKeyPress={({ nativeEvent }) => {
                                    nativeEvent.key === 'Backspace' ? (thirdinput.current.focus(), fourthinput.current.clear(), setValues4(false), thirdinput.current.clear()) : null
                                }}
                            />
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                ref={fifthinput}
                                underlineColorAndroid={Values5 ? Colors.commoncolor : '#f4f5f7'}
                                style={styles.textinputtext}
                                onChangeText={(text) => funtextinput5(text)}
                                keyboardType="numeric"
                                numberOfLines={1}
                                maxLength={1}
                                onKeyPress={({ nativeEvent }) => {
                                    nativeEvent.key === 'Backspace' ? (fourthinput.current.focus(), fifthinput.current.clear(), setValues5(false), fourthinput.current.clear()) : null
                                }}
                            />
                        </View>
                        <View style={styles.textInput}>
                            <TextInput
                                ref={sixthinput}
                                underlineColorAndroid={Values6 ? Colors.commoncolor : '#f4f5f7'}
                                style={styles.textinputtext}
                                onChangeText={(text) => funtextinput6(text)}
                                keyboardType="numeric"
                                numberOfLines={1}
                                maxLength={1}
                                onKeyPress={({ nativeEvent }) => {
                                    nativeEvent.key === 'Backspace' ? (fifthinput.current.focus(), sixthinput.current.clear(), setValues6(false), fifthinput.current.clear()) : null
                                }}
                            />
                        </View>
                    </View>
                    <View style={styles.view4}>
                        <Text style={{ fontSize: height / 50, fontFamily: 'Poppins-SemiBold', color: '#15294B' }}>Haven't receive Code?  <Text
                            onPress={() => Alert.alert('Clicked')} style={{ fontSize: height / 50, fontFamily: 'Poppins-Medium', color: '#FC8181' }}>Resend Now !</Text></Text>
                    </View>
                    <View style={styles.value5}>
                        <TouchableOpacity onPress={() => verifyfunction()}
                            style={{ height: height / 14.9, width: height / 3.7, backgroundColor: Colors.commoncolor, borderRadius: height / 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
                                {loadingstate ?
                                    <ActivityIndicator style={{ marginLeft: 5 }} size='small' color="#FFFFFF" /> : null}
                            </View>
                            <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'flex-start' }}>
                                <Text style={{ fontSize: height / 46.7, color: '#FFFAED', fontFamily: 'Poppins-SemiBold', marginTop: 3 }}>Verify Now</Text>
                            </View>
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
        margin: 5
    },
    subText2: {
        color: '#ffffff',
        padding: height / 81,
        fontSize: 20,
        margin: 'auto',
    },
    buttonLeft: {
        backgroundColor: '#fff',
        borderRadius: 10,
        borderColor: '#b8baba',
        borderStyle: 'solid',
        borderWidth: 1,
        width: height / 100 * 5
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height / 40,
        marginLeft: height / 30
    },
    container: {
        flex: 0.75, justifyContent: 'flex-end'
    },
    container1: {
        flex: 0.9, backgroundColor: 'white', marginHorizontal: 15, borderRadius: 5,
    },
    view1: {
        flex: 0.2, justifyContent: 'center', alignItems: 'center'
    },
    view2: {
        flex: 0.15, justifyContent: 'center', alignItems: 'center'
    },
    view3: {
        flex: 0.25, justifyContent: "space-around", flexDirection: 'row', alignItems: 'center'
    },
    textInput: {
        width: widthScreen / 100 * 13,
        height: heightScreen / 100 * 7,
        borderRadius: 10,
        alignItems: "center", justifyContent: "center",
        backgroundColor: '#f4f5f7',
    },
    textinputtext: {
        color: "#242A37",
        fontSize: height / 52,
        fontFamily: "Poppins-Regular", textAlign: 'center'
    },
    view4: {
        flex: 0.1, alignItems: 'center'
    },
    value5: {
        flex: 0.2, justifyContent: 'center', alignItems: 'center'
    }
})
export default Phoneotpscreen;
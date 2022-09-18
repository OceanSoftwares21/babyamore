import React from 'react';
import {
    Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity,
    ScrollView, Image, TextInput, Platform, Modal
} from 'react-native';
import Colors from '../../color/commoncolor';
import { RadioButton, Checkbox, Badge } from 'react-native-paper';
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window');
const Paymentscreen = (props) => {
    const [checked, setChecked] = React.useState('');
    const [checked1, setChecked1] = React.useState('');
    const [checkedview, setcheckview] = React.useState('card');
    React.useEffect(() => {
        setChecked1('first')
        setChecked('first')
    }, [])
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{
                    height: height / 100 * 8,
                    justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
                }}>
                    <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>Payment</Text>
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
                            <Text style={{ fontSize: height / 45, marginLeft: 15, color: Colors.commoncolor, fontFamily: 'Poppins-SemiBold' }}>Payment</Text>
                        </View>
                        <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: height / 51, color: '#1C2340', fontFamily: 'Poppins-Regular', marginRight: 10 }}>Confirm</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.container2}>
                    {checkedview == 'card' ?
                        <View style={{ flex: 1, borderRadius: 10 }}>
                            <View style={{ flex: 0.3, marginHorizontal: 15, justifyContent: 'center' }}>
                                <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Medium', color: '#5A5987' }}>Credit/Debit Card</Text>
                            </View>
                            <View style={{
                                flex: 0.6, marginHorizontal: 15, borderWidth: 1, borderColor: '#4D5656',
                                borderRadius: 10, flexDirection: 'row'
                            }}>
                                <View style={{ flex: 0.3, flexDirection: 'row' }}>
                                    <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                                        <Checkbox.Android
                                            style={{}}
                                            color={'green'}
                                            status={checked ? 'checked' : 'unchecked'}
                                            onPress={() => {
                                                setChecked(!checked);
                                            }}
                                        />
                                    </View>
                                    <View style={{ flex: 0.6, justifyContent: 'center', }}>
                                        <Image style={{ width: height / 100 * 5, height: height / 100 * 1.5 }}
                                            source={require('../../assets/images/visa.png')}
                                        />
                                    </View>
                                </View>
                                <View style={{ flex: 0.5, justifyContent: 'center', }}>
                                    <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-Medium', color: '#5A5987', }}>Visa Master</Text>
                                    <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Regular', color: '#7B7E94' }}>xxxx-xxxx-xxxx-8524</Text>
                                </View>
                                <View style={{ flex: 0.2, alignItems: 'flex-end', }}>
                                    <TouchableOpacity onPress={() => props.navigation.navigate('Addcardscreen')}>
                                        <Icons.Entypo style={{ fontSize: 20, marginTop: 10, marginRight: 5 }} name='dots-three-vertical' />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View> : null}
                    {checkedview == 'upi' ?
                        <View style={{ flex: 1, borderRadius: 10, }}>
                            <View style={{ flex: 0.3, marginHorizontal: 25, justifyContent: 'center', }}>
                                <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Medium', color: '#5A5987' }}>ADD UPI ID</Text>
                            </View>
                            <View style={{ flex: 0.7, justifyContent: 'center' }}>
                                <View style={{ flex: 0.55, justifyContent: 'center', alignItems: 'center' }}>
                                    <View style={styles.input}>
                                        <TextInput style={{
                                            fontSize: 15, fontFamily: 'Poppins-Medium', textAlign: 'left',
                                            marginLeft: 25, color: '#8A8D9F'
                                        }} placeholder="UPI ID" />
                                    </View>
                                </View>
                                <View style={{ flex: 0.45, marginHorizontal: 25, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: height / 74, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>UPI ID format is mobilenumber@bank or name@bank</Text>
                                </View>
                            </View>
                        </View> : null}
                    {checkedview == 'cash on delivery' ?
                        <View style={{ flex: 1, borderRadius: 10, }}>
                            <View style={{ flex: 0.25, marginHorizontal: 15, justifyContent: 'center' }}>
                                <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Medium', color: '#5A5987' }}>Your Address</Text>
                            </View>
                            <View style={{ flex: 0.7, }}>
                                <View style={{ flex: 0.3, alignItems: 'center' }}>
                                    <Text style={{ fontSize: height / 40, letterSpacing: 1, textAlign: 'center', fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>My Home#1</Text>
                                </View>
                                <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: height / 58, letterSpacing: 1, textAlign: 'center', fontFamily: 'Poppins-Regular', color: '#637381' }}>No.12, 1, 57th Street Ashok Nagar</Text>
                                    <Text style={{ fontSize: height / 58, letterSpacing: 1, textAlign: 'center', fontFamily: 'Poppins-Regular', color: '#637381' }}>Chennai</Text>
                                    <Text style={{ fontSize: height / 58, letterSpacing: 1, textAlign: 'center', fontFamily: 'Poppins-Regular', color: '#637381' }}>TamilNadu 600083</Text>
                                </View>
                            </View>
                        </View> : null}
                </View>
                <View style={styles.container3}>
                    <View style={[checkedview === 'card' ? styles.clickstyle : styles.nonclicked]}>
                        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                            <RadioButton.Android
                                color={Colors.commoncolor}
                                value="first"
                                status={checked1 === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => { setcheckview('card'), setChecked1('first') }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => { setcheckview('card'), setChecked1('first') }}
                            style={{ flex: 0.8, justifyContent: 'center' }}>
                            <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-Medium', color: '#5A5987' }}>Credit/Debit Card</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={[checkedview === 'upi' ? styles.clickstyle : styles.nonclicked]}>
                        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                            <RadioButton.Android
                                color={Colors.commoncolor}
                                value="second"
                                status={checked1 === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => { setcheckview('upi'), setChecked1('second') }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => { setcheckview('upi'), setChecked1('second') }}
                            style={{ flex: 0.8, justifyContent: 'center' }}>
                            <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-Medium', color: '#5A5987' }}>UPI</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={[checkedview === 'cash on delivery' ? styles.clickstyle : styles.nonclicked]}>
                        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                            <RadioButton.Android
                                color={Colors.commoncolor}
                                value="third"
                                status={checked1 === 'third' ? 'checked' : 'unchecked'}
                                onPress={() => { setcheckview('cash on delivery'), setChecked1('third') }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => { setcheckview('cash on delivery'), setChecked1('third') }}
                            style={{ flex: 0.8, justifyContent: 'center' }}>
                            <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-Medium', color: '#5A5987' }}>Cash on Delivery</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: height / 100 * 10, justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Orderconfirm')}
                        style={{ width: height / 2.23, height: height / 14.9, backgroundColor: '#fc8181', borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-Medium', color: 'white' }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    );
}
const styles = StyleSheet.create({
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
    maincontainer: {
        flex: 1, backgroundColor: Colors.background,
    },
    container1: {
        height: height / 100 * 10, marginHorizontal: 8
    },
    container2: {
        height: height / 100 * 20, backgroundColor: 'white', marginHorizontal: 15,
        borderRadius: 10, marginTop: 10
    },
    container3: {
        height: height / 100 * 10, justifyContent: 'center', marginTop: height / 25
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.6,
        alignItems: 'center',
        marginHorizontal: 15
    },
    clickstyle: {
        flex: 0.8, marginHorizontal: 20, borderWidth: 1.5, borderColor: Colors.commoncolor, borderRadius: 10,
        flexDirection: 'row'
    },
    nonclicked: {
        flex: 0.8, marginHorizontal: 20, borderWidth: 1, borderColor: '#4D5656', borderRadius: 10,
        flexDirection: 'row'
    },
    input: {
        width: '90%', height: '90%', justifyContent: 'center',
        borderRadius: 5, borderWidth: 1, borderColor: '#e4e6e7',
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
export default Paymentscreen;
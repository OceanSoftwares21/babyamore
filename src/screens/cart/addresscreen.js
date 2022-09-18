import React from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, Dimensions, Alert,
    SafeAreaView, Image,
} from 'react-native';
import Colors from '../../color/commoncolor';
import { Checkbox } from 'react-native-paper';
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window');
const Addresscreen = (props) => {
    const [val, setVal] = React.useState([])
    const [val2, setVal2] = React.useState(
        `No.12, 1, 57th Street
        Ashok Nagar, Chennai,
        TamilNadu 600083`
    )
    React.useEffect(() => {
        setVal(props.route.params)
    }, [props])
    var values = props.route.params ? props.route.params : `No.12, 1, 57th Street
    Ashok Nagar, Chennai,
    TamilNadu 600083`;
    const [checked, setChecked] = React.useState('first');
    const Datas = [
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
        <SafeAreaView style={styles.maincontainer}>
            <View style={{
                height: height / 100 * 8,
                justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
            }}>
                <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>Address</Text>
            </View>
            <View style={styles.container1}>
                <View style={styles.subContainer}>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Icons.AntDesign style={{ fontSize: height / 32, color: Colors.commoncolor }} name='checkcircle' />
                    </View>
                    <Text style={{ width: width / 2.8, height: 3, backgroundColor: Colors.commoncolor }}></Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Icons.Entypo style={{ fontSize: height / 32, color: Colors.commoncolor }} name='circle' />
                    </View>
                    <Text style={{ width: width / 2.8, height: 3, backgroundColor: Colors.commoncolor }}></Text>
                    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                        <Icons.Entypo style={{ fontSize: height / 32, color: Colors.commoncolor }} name='circle' />
                    </View>
                </View>
                <View style={{ flex: 0.4, flexDirection: 'row' }}>
                    <View style={{ flex: 0.3, justifyContent: 'center' }}>
                        <Text style={{ fontSize: height / 45, marginLeft: 15, color: Colors.commoncolor, fontFamily: 'Poppins-SemiBold' }}>Address</Text>
                    </View>
                    <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 51, marginLeft: 15, color: '#1C2340', fontFamily: 'Poppins-Regular' }}>Payment</Text>
                    </View>
                    <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: height / 51, color: '#1C2340', fontFamily: 'Poppins-Regular', marginRight: 10 }}>Confirm</Text>
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.02 }}></View>
            <View style={styles.container2}>
                <View style={{ flex: 0.95, backgroundColor: 'white', marginHorizontal: 25, borderRadius: 15, elevation: 3 }}>
                    <View style={{ flex: 0.3, borderBottomWidth: 0.5, flexDirection: 'row', borderBottomColor: '#e4e6e7' }}>
                        <View style={{ flex: 0.65, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>My home#1</Text>
                        </View>
                        <View style={{ flex: 0.35, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <View style={{ height: height / 30, width: height / 30, borderRadius: 50, borderWidth: 1.5, borderColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: '50%', width: '50%', tintColor: '#153268' }}
                                        source={require('../../assets/images/pen.png')}

                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: height / 30, width: height / 30, borderRadius: 50, borderWidth: 1, borderColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center' }}>
                                <Icons.Feather
                                    name="trash-2"
                                    color={'#FF0000'}
                                    size={height / 60}
                                    onPress={() => Alert.alert('Alert',)}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.7, flexDirection: 'row' }}>
                        <View style={{ flex: 0.75, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ fontSize: height / 58, letterSpacing: 1, textAlign: 'center', fontFamily: 'Poppins-Regular', color: '#637381' }}>No.12, 1, 57th Street Ashok Nagar</Text>
                            <Text style={{ fontSize: height / 58, letterSpacing: 1, textAlign: 'center', fontFamily: 'Poppins-Regular', color: '#637381' }}>Chennai</Text>
                            <Text style={{ fontSize: height / 58, letterSpacing: 1, textAlign: 'center', fontFamily: 'Poppins-Regular', color: '#637381' }}>TamilNadu 600083</Text>
                        </View>
                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                            <Checkbox.Android
                                style={{}}
                                color={'green'}
                                status={checked == 'first' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked('first');
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.container3}>
                <View style={{ flex: 0.9, backgroundColor: 'white', marginHorizontal: 25, borderRadius: 15, elevation: 5 }}>
                    <View style={{ flex: 0.3, borderBottomWidth: 0.5, flexDirection: 'row', borderBottomColor: '#e4e6e7' }}>
                        <View style={{ flex: 0.65, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>Work(My office)</Text>
                        </View>
                        <View style={{ flex: 0.35, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <View style={{ height: height / 30, width: height / 30, borderRadius: 50, borderWidth: 1.5, borderColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: '50%', width: '50%', tintColor: '#153268' }}
                                        source={require('../../assets/images/pen.png')}
                                    />
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: height / 30, width: height / 30, borderRadius: 50, borderWidth: 1, borderColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center' }}>
                                <Icons.Feather
                                    name="trash-2"
                                    color={'#FF0000'}
                                    size={height / 60}
                                    onPress={() => Alert.alert('Alert',)}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.7, flexDirection: 'row' }}>
                        <View style={{ flex: 0.75, justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ fontSize: height / 58, letterSpacing: 1, textAlign: 'center', fontFamily: 'Poppins-Regular', color: '#637381' }}>No.12, 1, 57th Street Ashok Nagar</Text>
                            <Text style={{ fontSize: height / 58, letterSpacing: 1, textAlign: 'center', fontFamily: 'Poppins-Regular', color: '#637381' }}>Chennai</Text>
                            <Text style={{ fontSize: height / 58, letterSpacing: 1, textAlign: 'center', fontFamily: 'Poppins-Regular', color: '#637381' }}>TamilNadu 600083</Text>
                        </View>
                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                            <Checkbox.Android
                                style={{}}
                                color={'green'}
                                status={checked == 'second' ? 'checked' : 'unchecked'}
                                onPress={() => {
                                    setChecked('second');
                                }}
                            />
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.container4}>
                <TouchableOpacity onPress={() => props.navigation.navigate('Childstack',{screen:'Addadress'})}
                    style={{ height: height / 16, width: height / 4.08, backgroundColor: '#fc8181', marginHorizontal: 80, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: 'white' }}>Add Address</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container5}>
                <View style={{ flex: 0.5, alignItems: 'center', marginHorizontal: 35, justifyContent: 'center' }}>
                    <Text style={{ fontSize: height / 68, textAlign: 'center', fontWeight: '500' }}> Your pincode is closer to our warehouse you are eligible for same day shipping.</Text>
                </View>
                <View style={{ flex: 0.5, justifyContent: 'flex-start', alignItems: 'center' }}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('Childstack',{screen:'Paymentscreen'})}
                        style={{ height: height / 15, width: height / 2.3, backgroundColor: '#fc8181', marginHorizontal: 40, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-SemiBold', color: 'white' }}>Continue</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Colors.background
    },
    containertitle: {
        height: height / 100 * 5,
        justifyContent: 'center', alignItems: 'center', marginTop: 10
    },
    container1: {
        flex: 0.10, marginHorizontal: 8
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.6,
        alignItems: 'center',
        marginHorizontal: 15
    },
    container2: {
        flex: 0.25, justifyContent: 'center'
    },
    container3: {
        flex: 0.3, justifyContent: 'center'
    },
    container4: {
        flex: 0.1, justifyContent: 'center', alignItems: 'center',
    },
    container5: {
        flex: 0.2,
    },
    buttonLeft: {
        width: height / 100 * 5
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height / 40,
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
export default Addresscreen;
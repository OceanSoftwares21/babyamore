import React from 'react';
import {
    Text, View, StyleSheet, TouchableOpacity, Dimensions, ScrollView,
    SafeAreaView, TextInput,
} from 'react-native';
import Colors from '../../color/commoncolor'
import DropDownPicker from 'react-native-dropdown-picker';
import { Icons } from '../../color/icon';

const { height, width } = Dimensions.get('window')
var windowheight = height;
const Addaddress = ({ navigation }) => {
    const [name, setName] = React.useState('');
    const [number, setNumber] = React.useState('');
    const [address, setAddress] = React.useState('');
    const [Area, setArea] = React.useState('');
    const [landmark, setLandmark] = React.useState('');
    const [city, setCity] = React.useState('');
    const [Selectedvalue, setSelected] = React.useState('');
    const [Selectedvalue2, setSelected2] = React.useState('');
    var data = [name, address, city, Area, landmark, number, Selectedvalue, Selectedvalue2]
    const Click = () => {
        navigation.navigate('Addrescreen', data)
    }
    const [open, setOpen] = React.useState(false);
    const [value, setValue] = React.useState(null);
    const [items, setItems] = React.useState([
        { label: 'Home', value: 'home' },
        { label: 'Work', value: 'work' }
    ]);
    const [open2, setOpen2] = React.useState(false);
    const [value2, setValue2] = React.useState(null);
    const [items2, setItems2] = React.useState([
        { label: 'Tamilnadu', value: 'tamilnadu' },
        { label: 'Kerala', value: 'kerala' }
    ]);
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
            <ScrollView style={{ flex: 1 }}>
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
                <View style={styles.container2}>
                    <View style={styles.cont2view1}>
                        <View style={{ flex: 0.1, justifyContent: 'center', marginHorizontal: width / 20 }}>
                            <DropDownPicker
                                style={{ backgroundColor: '#E0E0E0', borderWidth: 0 }}
                                open={open}
                                value={value}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValue}
                                setItems={setItems}
                                listMode='SCROLLVIEW'
                                placeholder="Select Address Type"
                                placeholderStyle={{ fontSize: height / 62, color: '#8A8D9F', fontFamily: 'Poppins-Regular' }}
                                textStyle={{ fontSize: height / 48, color: '#8A8D9F', fontFamily: 'Poppins-Medium' }}
                            />
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.input}>
                                <TextInput
                                    style={{
                                        fontSize: height / 62.3, fontFamily: 'Poppins-Regular', textAlign: 'left',
                                        marginLeft: 15, color: '#888C9B'
                                    }}
                                    placeholder="Full Name"
                                    onChangeText={(text) => setName(text)}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.input}>
                                <TextInput
                                    style={{
                                        fontSize: height / 62.3, fontFamily: 'Poppins-Regular', textAlign: 'left',
                                        marginLeft: 15, color: '#888C9B'
                                    }}
                                    placeholder="Mobile Number"
                                    onChangeText={(text) => setNumber(text)}
                                    keyboardType='numeric'
                                />
                            </View>
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.input}>
                                <TextInput
                                    style={{
                                        fontSize: height / 62.3, fontFamily: 'Poppins-Regular',
                                        marginLeft: 15, color: '#888C9B'
                                    }}
                                    placeholder="Flat,House no,Building,Company,Apartment"
                                    onChangeText={(text) => setAddress(text)}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.input}>
                                <TextInput
                                    style={{
                                        fontSize: height / 62.3, fontFamily: 'Poppins-Regular',
                                        marginLeft: 15, color: '#888C9B'
                                    }}
                                    placeholder="Area,Colony,Village,Street"
                                    onChangeText={(text) => setArea(text)}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.input}>
                                <TextInput
                                    style={{
                                        fontSize: height / 62.3, fontFamily: 'Poppins-Regular',
                                        marginLeft: 15, color: '#888C9B'
                                    }}
                                    placeholder="Landmark e.g(Near Hospital)"
                                    onChangeText={(text) => setLandmark(text)}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.input}>
                                <TextInput
                                    style={{
                                        fontSize: height / 62.3, fontFamily: 'Poppins-Regular',
                                        marginLeft: 15, color: '#888C9B'
                                    }}
                                    placeholder="Town/City"
                                    onChangeText={(text) => setCity(text)}
                                />
                            </View>
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'center', marginHorizontal: width / 20, }}>
                            <DropDownPicker
                                style={{ backgroundColor: '#E0E0E0', borderWidth: 0 }}
                                open={open2}
                                value={value2}
                                items={items2}
                                setOpen={setOpen2}
                                setValue={setValue2}
                                setItems={setItems2}
                                listMode='SCROLLVIEW'
                                placeholder="Select State"
                                placeholderStyle={{ fontSize: height / 62, color: '#8A8D9F', fontFamily: 'Poppins-Regular' }}
                                textStyle={{ fontSize: height / 48, color: '#8A8D9F', fontFamily: 'Poppins-Medium' }}
                            />
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', }}>
                            <TouchableOpacity style={{
                                width: '90%', height: height / 17, justifyContent: 'center',
                                backgroundColor: '#E0E0E0', borderRadius: 10, alignItems: 'center', flexDirection: 'row'
                            }}>
                                <Icons.Feather name='map-pin' style={{ fontSize: height / 80, }} />
                                <Text style={{ fontSize: height / 62.3, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginTop: 2, marginLeft: 5 }}>Use Current Location</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => Click()}
                                style={{ height: height / 16, width: height / 4, backgroundColor: '#fc8181', borderRadius: height / 10, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: 'white' }}>Save</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ height: windowheight / 100 * 2 }}></View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Colors.background
    },
    container1: {
        height: windowheight / 100 * 10, marginHorizontal: 8
    },
    subContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        flex: 0.6,
        alignItems: 'center',
        marginHorizontal: 15
    },
    container2: {
        height: windowheight / 100 * 80, justifyContent: 'center', marginTop: 5
    },
    cont2view1: {
        flex: 1, backgroundColor: 'white', marginHorizontal: 20, borderRadius: 15
    },
    inputview: {
        flex: 0.15, justifyContent: 'center', alignItems: 'center'
    },
    input: {
        width: '90%', height: '80%', justifyContent: 'center',
        backgroundColor: '#F4F5F7', borderRadius: 15,
    },
    inputview: {
        flex: 0.15, justifyContent: 'center', alignItems: 'center'
    },
    cont2view2: {
        flex: 0.25, justifyContent: 'center', alignItems: 'center'
    },
    subText2: {
        color: '#ffffff',
        fontSize: 25,
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
export default Addaddress;

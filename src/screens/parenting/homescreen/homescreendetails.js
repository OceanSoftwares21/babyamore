import React from 'react';
import { Text, View, SafeAreaView, Dimensions, StyleSheet, ScrollView, Image, TouchableOpacity, TextInput } from 'react-native';
import Color from '../../../color/commoncolor';
import DatePicker from 'react-native-date-picker';
import Icon from 'react-native-vector-icons/AntDesign';
import { RadioButton } from 'react-native-paper';
const { height, width } = Dimensions.get('window');
const Homedetails = ({ navigation }) => {
    const [datee, setDate] = React.useState()
    const [open, setOpen] = React.useState(false)
    const [checked, setChecked] = React.useState('');
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView>
                <View style={styles.container}>
                    <TouchableOpacity onPress={() => props.navigation.navigate('MainScreen')}
                        style={{
                            height: height / 100 * 7, width: width / 100 * 45, backgroundColor: '#EEEEEE', borderTopLeftRadius: 20, borderBottomLeftRadius: 20,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F', }}>
                            SHOPPING
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: height / 100 * 7, width: width / 100 * 48, backgroundColor: Color.commoncolor, borderTopLeftRadius: 20, borderBottomLeftRadius: 20,
                        borderTopRightRadius: 20, borderBottomRightRadius: 20, position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', }}>
                            PARENTING
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container1}>
                    <View style={styles.view1}>
                        <Text style={{ fontSize: height / 40, fontFamily: 'Poppins-SemiBold', color: '#FC8181' }}>
                            Enter Child Details
                        </Text>
                    </View>
                    <View style={styles.view2}>
                        <TouchableOpacity>
                            <Image style={{ height: height / 100 * 20, width: width / 100 * 35 }}
                                source={require('../../../assets/images/fsample3.png')}
                            />
                        </TouchableOpacity>
                        <Text style={{ fontSize: height / 40, fontFamily: 'Poppins-Regular', color: '#555555' }}>
                            Add Profile Photo
                        </Text>
                    </View>
                    <View style={styles.view3}>
                        <View style={{ flex: 0.4, marginHorizontal: 40 }}>
                            <Text style={{ fontSize: height / 35, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Child Name</Text>
                        </View>
                        <View style={{ flex: 0.6, flexDirection: 'row', backgroundColor: '#F4F5F7', marginHorizontal: 25, borderRadius: 25 }}>
                            <View style={{ width: '95%', justifyContent: 'center' }}>
                                <TextInput
                                    style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#1C2340', marginLeft: 15 }}
                                    placeholder=""
                                    keyboardType='default'
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.view4}>
                        <View style={{ flex: 0.4, marginHorizontal: 40 }}>
                            <Text style={{ fontSize: height / 45, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                                Date Of Birth
                            </Text>
                        </View>
                        <TouchableOpacity onPress={() => setOpen(!open)}
                            style={{
                                flex: 0.6, backgroundColor: '#F4F5F7', marginHorizontal: 25,
                                borderRadius: 25, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'
                            }}>
                            {datee ?
                                <Text style={{ fontSize: height / 45, marginLeft: 15, color: '#1C2340', fontFamily: 'Poppins-Regular' }}> {datee}</Text>
                                :
                                <Text style={{ fontSize: height / 45, marginLeft: 15, color: '#626567', fontFamily: 'Poppins-Regular' }}> dd/mm/yy</Text>}
                            <Icon name='calendar' style={{ fontSize: 28, color: '#CCD1D1', marginRight: 15 }} />
                        </TouchableOpacity>
                        <DatePicker
                            mode='date'
                            modal
                            open={open}
                            date={new Date()}
                            onConfirm={(d) => { setOpen(false), setDate(JSON.stringify(d)) }}
                            onCancel={() => { setOpen(false) }}
                        />
                    </View>
                    <View style={styles.view5}>
                        <View style={{ flex: 0.3, justifyContent: 'flex-end', marginHorizontal: 50, }}>
                            <Text style={{ fontSize: height / 40, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                                Gender
                            </Text>
                        </View>
                        <View style={{ flex: 0.7, flexDirection: 'row', justifyContent: 'center' }}>
                            <View style={{
                                flex: 0.35, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',
                            }}>
                                <RadioButton.Android
                                    color={'#fc8181'}
                                    value="first"
                                    status={checked === 'first' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('first')}
                                />
                                <Text style={{ fontSize: height / 40, fontFamily: 'Poppins-Medium', color: '#8A8D9F' }}>Boy</Text>
                            </View>
                            <View style={{ flex: 0.35, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', }}>
                                <RadioButton.Android
                                    value="second"
                                    status={checked === 'second' ? 'checked' : 'unchecked'}
                                    onPress={() => setChecked('second')}
                                    color={'#fc8181'}
                                />
                                <Text style={{ fontSize: height / 40, fontFamily: 'Poppins-Medium', color: '#8A8D9F' }}>Girl</Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.view6}>
                        <TouchableOpacity
                            style={{ width: '50%', height: '40%', backgroundColor: '#fc8181', borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 35, fontFamily: 'Poppins-Medium', color: 'white' }}>SUBMIT</Text>
                        </TouchableOpacity>
                        <Text onPress={() => navigation.goBack()}
                            style={{ fontSize: height / 40, fontFamily: 'Poppins-Medium', color: '#8A8D9F' }}>
                            Cancel
                        </Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Color.background
    },
    container: {
        height: height / 100 * 10, justifyContent: 'center', marginHorizontal: 15,
    },
    container1: {
        height: height / 100 * 90, backgroundColor: 'white', borderRadius: 10, marginHorizontal: 10
    },
    view1: {
        flex: 0.1, justifyContent: 'center', alignItems: 'center',
    },
    view2: {
        flex: 0.3, alignItems: 'center', justifyContent: 'center'
    },
    view3: {
        flex: 0.15,
    },
    view4: {
        flex: 0.15,
    },
    date: {
        height: height / 100 * 10,
        width: '100%', top: 18, marginTop: 5
    },
    view5: {
        flex: 0.15
    },
    view6: {
        flex: 0.15, alignItems: 'center', justifyContent: 'space-evenly'
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
        color: '#b8baba',
        padding: height / 81,
        fontSize: 20,
        margin: 'auto',
    }
})
export default Homedetails;

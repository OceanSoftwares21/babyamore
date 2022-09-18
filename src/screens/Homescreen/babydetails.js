import React from 'react';
import { Text, View, SafeAreaView, Dimensions, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import Color from '../../color/commoncolor';
import DatePicker from 'react-native-date-picker';
import { RadioButton } from 'react-native-paper';
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window');

const Homedetails = ({ navigation }) => {
    const [datee, setDate] = React.useState()
    const [open, setOpen] = React.useState(false)
    const [checked, setChecked] = React.useState('');
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container1}>
                <View style={styles.view1}>
                    <Text style={{ fontSize: height / 48, fontFamily: 'Poppins-SemiBold', color: '#FC8181' }}>
                        Enter Child Details
                    </Text>
                    <TouchableOpacity>
                        <Image style={{ height: height / 6.1, width: height / 6.2 }}
                            source={require('../../assets/images/fsample3.png')}
                        />
                    </TouchableOpacity>
                    <Text style={{ fontSize: height / 48, fontFamily: 'Poppins-Regular', color: '#555555' }}>
                        Add Profile Photo
                    </Text>
                </View>
                <View style={styles.view2}>
                    <View style={{ flex: 0.4, marginHorizontal: 25, justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                            Parent Name
                        </Text>
                    </View>
                    <View style={{ flex: 0.6, alignItems: 'center' }}>
                        <View style={{ width: '90%', height: '70%', backgroundColor: '#F4F5F7', marginHorizontal: 25, borderRadius: 10, justifyContent: 'center' }}>
                            <TextInput
                                style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#1C2340', marginLeft: 15 }}
                                placeholder=""
                                keyboardType='default'
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.view3}>
                    <View style={{ flex: 0.4, marginHorizontal: 25, justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                            Child Name
                        </Text>
                    </View>
                    <View style={{ flex: 0.6, alignItems: 'center' }}>
                        <View style={{ width: '90%', height: '70%', backgroundColor: '#F4F5F7', marginHorizontal: 25, borderRadius: 10, justifyContent: 'center' }}>
                            <TextInput
                                style={{ fontSize: 16, fontFamily: 'Poppins-Regular', color: '#1C2340', marginLeft: 15 }}
                                placeholder=""
                                keyboardType='default'
                            />
                        </View>
                    </View>
                </View>
                <View style={styles.view4}>
                    <View style={{ flex: 0.4, marginHorizontal: 25, justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                            Date Of Birth
                        </Text>
                    </View>
                    <TouchableOpacity onPress={() => setOpen(!open)}
                        style={{
                            flex: 0.6, backgroundColor: '#F4F5F7', marginHorizontal: 25,
                            borderRadius: 10, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row'
                        }}>
                        {datee ?
                            <Text style={{ fontSize: height / 51, marginLeft: 15, color: '#1C2340', fontFamily: 'Poppins-Regular' }}> {datee}</Text>
                            :
                            <Text style={{ fontSize: height / 51, marginLeft: 15, color: '#8A8D9F', fontFamily: 'Poppins-Regular' }}> dd/mm/yyyy</Text>}
                        <Icons.AntDesign name='calendar' style={{ fontSize: height / 34, color: '#CCD1D1', marginRight: 15 }} />
                    </TouchableOpacity>
                    <DatePicker
                        mode='date'
                        modal
                        open={open}
                        date={new Date()}
                        onConfirm={(d) => {
                            setOpen(false)
                            let formattedDate = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate()
                            const [year, month, day] = formattedDate.split('-');
                            let newDate = `${day}/${month}/${year}`
                            setDate(newDate)
                        }}
                        onCancel={() => {
                            setOpen(false)
                        }}
                    />
                </View>
                <View style={styles.view5}>
                    <View style={{ flex: 0.3, justifyContent: 'center', marginHorizontal: 30 }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                            Gender
                        </Text>
                    </View>
                    <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
                        <RadioButton.Android
                            style={{ height: 100 }}
                            color={'#fc8181'}
                            value="first"
                            status={checked === 'first' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('first')}
                        />
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Medium', color: '#8A8D9F' }}>Boy</Text>
                    </View>
                    <View style={{ flex: 0.4, flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-start', }}>
                        <RadioButton.Android
                            style={{}}
                            value="second"
                            status={checked === 'second' ? 'checked' : 'unchecked'}
                            onPress={() => setChecked('second')}
                            color={'#fc8181'}
                        />
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Medium', color: '#8A8D9F' }}>Girl</Text>
                    </View>
                </View>
                <View style={styles.view6}>
                    <TouchableOpacity onPress={() => navigation.navigate('Register')}
                        style={{ height: height / 14.7, width: height / 3.7, backgroundColor: '#fc8181', borderRadius: height / 10, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-Medium', color: 'white' }}>SUBMIT</Text>
                    </TouchableOpacity>
                    <Text onPress={() => navigation.goBack()}
                        style={{ fontSize: height / 51, fontFamily: 'Poppins-Medium', color: '#8A8D9F' }}>
                        Cancel
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Color.background, justifyContent: 'center'
    },
    container1: {
        flex: 0.98, backgroundColor: 'white', borderRadius: 10, marginHorizontal: 10, elevation: 3
    },
    view1: {
        flex: 0.05, justifyContent: 'center', alignItems: 'center'
    },
    view1: {
        flex: 0.3, alignItems: 'center', justifyContent: 'center'
    },
    view2: {
        flex: 0.15
    },
    view3: {
        flex: 0.15
    },
    view4: {
        flex: 0.15,
    },
    date: {
        height: height / 100 * 10,
        width: '100%', top: 18, marginTop: 5
    },
    view5: {
        flex: 0.1, flexDirection: 'row'
    },
    view6: {
        flex: 0.15, alignItems: 'center', justifyContent: 'space-evenly'
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
export default Homedetails;

import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image, TextInput } from 'react-native';
import Color from '../../../color/commoncolor';
import { RadioButton } from 'react-native-paper';
import { Icons } from '../../../color/icon';
const { height, width } = Dimensions.get('window');

const Detail1 = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
    return (
        <View style={styles.maincontainer}>
            <View style={styles.container1}>
                <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}
                    style={{
                        height: height / 17, width: width / 2, backgroundColor: '#EEEEEE', borderTopLeftRadius: height / 10, borderBottomLeftRadius: height / 10,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                    <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F', }}>
                        SHOPPING
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height: height / 17, width: width / 2, backgroundColor: Color.commoncolor, borderTopLeftRadius: height / 10, borderBottomLeftRadius: height / 10,
                    borderTopRightRadius: height / 10, borderBottomRightRadius: height / 10, position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', }}>
                        PARENTING
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container2}>
                <Text style={{ fontSize: height / 72, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                    upload your Photo, we need to know a little more about you
                </Text>
            </View>
            <View style={styles.container3}>
                <View style={styles.cont3view}>
                    <View style={{ flex: 0.15, marginHorizontal: 10, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Medium', color: Color.commoncolor }}>01/<Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Medium', color: '#8A8D9F' }}>02</Text> </Text>
                    </View>
                    <View style={{ flex: 0.3, }}>
                        <View style={{ flex: 0.3, marginHorizontal: 25, justifyContent: 'flex-end' }}>
                            <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Medium', color: '#1C2340', textAlign: 'left' }}>
                                Your name
                            </Text>
                        </View>
                        <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={styles.input}>
                                <TextInput style={{
                                    fontSize: 15, fontFamily: 'Poppins-Regular', textAlign: 'left',
                                    marginLeft: 15, color: '#888C9B'
                                }}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.55, }}>
                        <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, }}>
                            <RadioButton.Android
                                color={Color.commoncolor}
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                            <TouchableOpacity onPress={() => { setChecked('first') }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Medium', color: '#8A8D9F', marginLeft: 15 }}>Mom</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, }}>
                            <RadioButton.Android
                                color={Color.commoncolor}
                                value="two"
                                status={checked === 'two' ? 'checked' : 'unchecked'}
                                onPress={() => { setChecked('two') }}
                            />
                            <TouchableOpacity onPress={() => { setChecked('two') }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Medium', color: '#8A8D9F', marginLeft: 15 }}>Dad</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, }}>
                            <RadioButton.Android
                                color={Color.commoncolor}
                                value="three"
                                status={checked === 'three' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('three')}
                            />
                            <TouchableOpacity onPress={() => { setChecked('three') }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Medium', color: '#8A8D9F', marginLeft: 15 }}>Guardian</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, }}>
                            <RadioButton.Android
                                color={Color.commoncolor}
                                value="four"
                                status={checked === 'four' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('four')}
                            />
                            <TouchableOpacity onPress={() => { setChecked('four') }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Medium', color: '#8A8D9F', marginLeft: 15 }}>Expecting</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.2, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, }}>
                            <RadioButton.Android
                                color={Color.commoncolor}
                                value="five"
                                status={checked === 'five' ? 'checked' : 'unchecked'}
                                onPress={() => { setChecked('five') }}
                            />
                            <TouchableOpacity onPress={() => { setChecked('five') }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Medium', color: '#8A8D9F', marginLeft: 15 }}>Trying to conceive</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>

                <TouchableOpacity style={{ position: 'absolute', top: height / -25, right: width / 100 * 40 }}>
                    <Image style={{ height: height / 100 * 12, width: height / 100 * 12, borderRadius: 100, }}
                        source={require('../../../assets/images/profileicon.png')} />
                    <TouchableOpacity style={{
                        position: 'absolute', marginBottom: height / 25, borderRadius: 50, right: 5, bottom: height / -20, borderWidth: 1, borderColor: '#CCD1D1',
                        height: height / 30, width: height / 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Icons.Entypo style={{ fontSize: height / 55 }} color='#A9ABB5' name="pencil" />
                    </TouchableOpacity>
                </TouchableOpacity>
            </View>
            <View style={styles.container4}>
                <TouchableOpacity onPress={() => navigation.navigate('Details2')}
                    style={{ height: height / 15, width: height / 4.5, backgroundColor: Color.commoncolor, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: height / 46.7, color: 'white', fontFamily: 'Poppins-SemiBold', }}>CONTINUE</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Color.background
    },
    buttonLeft: {
        width: height / 100 * 5
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height / 40,
    },
    container1: {
        flex: 0.12, marginHorizontal: 15, marginTop: 10,
    },
    container2: {
        flex: 0.1, alignItems: 'center',
    },
    container3: {
        flex: 0.65, justifyContent: 'center', position: 'relative'
    },
    cont3view: {
        flex: 0.95, backgroundColor: 'white', position: 'relative', marginHorizontal: 10, borderRadius: 10
    },
    input: {
        width: '90%', height: height / 14, justifyContent: 'center',
        backgroundColor: '#F4F5F7', borderRadius: 15,
    },
    container4: {
        flex: 0.15, alignItems: 'center', justifyContent: 'center'
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
export default Detail1;
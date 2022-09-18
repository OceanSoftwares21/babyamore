import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Color from '../../../color/commoncolor';
import { RadioButton } from 'react-native-paper';
const { height, width } = Dimensions.get('window');
const Detail2 = ({ navigation }) => {
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
            <View style={{ flex: 0.1 }}></View>
            <View style={styles.container3}>
                <View style={styles.cont3view}>
                    <View style={styles.View1}>
                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Medium', color: Color.commoncolor }}>02/<Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Medium', color: '#8A8D9F' }}>02</Text> </Text>
                    </View>
                    <View style={styles.View2}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>Your Gender</Text>
                    </View>
                    <View style={styles.View3}>
                        <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, }}>
                            <RadioButton.Android
                                color={Color.commoncolor}
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                            <TouchableOpacity onPress={() => { setChecked('first') }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Medium', color: '#8A8D9F', marginLeft: 15 }}>Female</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.3, flexDirection: 'row', alignItems: 'center', marginHorizontal: 20, }}>
                            <RadioButton.Android
                                color={Color.commoncolor}
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                            />
                            <TouchableOpacity onPress={() => { setChecked('second') }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Medium', color: '#8A8D9F', marginLeft: 15 }}>Male</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </View>
            </View>
            <View style={styles.container4}>
                <TouchableOpacity onPress={() => navigation.navigate('Ques&Ans')}
                    style={{
                        height: height / 15, width: height / 4.5, backgroundColor: Color.commoncolor, borderRadius: 40, justifyContent: 'center', alignItems: 'center',
                    }}>
                    <Text style={{ fontSize: height / 46.7, color: 'white', fontFamily: 'Poppins-SemiBold' }}>DONE</Text>
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
        flex: 0.12, marginHorizontal: 15, marginTop: 10
    },
    container2: {
        flex: 0.15, justifyContent: 'center', alignItems: 'center'
    },
    container3: {
        flex: 0.5, justifyContent: 'center'
    },
    cont3view: {
        flex: 0.8, backgroundColor: 'white', marginHorizontal: 10, borderRadius: 10, elevation: 3
    },
    View1: {
        flex: 0.2, marginHorizontal: 10, justifyContent: 'center', alignItems: 'flex-end'
    },
    View2: {
        flex: 0.15, justifyContent: 'center', alignItems: 'center'
    },
    View3: {
        flex: 0.65
    },
    container4: {
        flex: 0.23, justifyContent: 'flex-end', alignItems: 'center'
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
export default Detail2;
import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../../color/commoncolor';
import { RadioButton } from 'react-native-paper';
const { height, width } = Dimensions.get('window');
const Orderfilterscreen = ({ navigation }) => {
    const [checked, setChecked] = React.useState('first');
    const [checked1, setChecked1] = React.useState('first');
    const [val, setvalue] = React.useState('Last 30 Days');
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={{ height: height / 100 * 8, justifyContent: 'center', alignItems: 'center', backgroundColor: 'white' }}>
                <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>My orders</Text>
            </View>
            <View style={styles.container1}>
                <View style={styles.cont1mainview}>
                    <View style={styles.view1}>
                        <Text style={{ fontSize: height / 45, fontFamily: 'Poppins-SemiBold', color: '#0C0B52' }}>Order Type</Text>
                    </View>
                    <View style={styles.view2}>
                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                            <RadioButton.Android
                                color={Colors.commoncolor}
                                value="first"
                                status={checked === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('first')}
                            />
                        </View>
                        <TouchableOpacity onPress={() => setChecked('first')}
                            style={{ flex: 0.75, justifyContent: 'center' }}>
                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Orders</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view3}>
                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                            <RadioButton.Android
                                color={Colors.commoncolor}
                                value="second"
                                status={checked === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('second')}
                            />
                        </View>
                        <TouchableOpacity onPress={() => setChecked('second')}
                            style={{ flex: 0.75, justifyContent: 'center' }}>
                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Not Yet Shipped</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view4}>
                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                            <RadioButton.Android
                                color={Colors.commoncolor}
                                value="third"
                                status={checked === 'third' ? 'checked' : 'unchecked'}
                                onPress={() => setChecked('third')}
                            />
                        </View>
                        <TouchableOpacity onPress={() => setChecked('third')}
                            style={{ flex: 0.75, justifyContent: 'center' }}>
                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Cancelled Oreders</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.cont2mainview}>
                    <View style={styles.cont2view1}>
                        <Text style={{ fontSize: height / 45, fontFamily: 'Poppins-SemiBold', color: '#0C0B52' }}>Order Date</Text>
                    </View>
                    <View style={styles.cont2view2}>
                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                            <RadioButton.Android
                                color={Colors.commoncolor}
                                value="first"
                                status={checked1 === 'first' ? 'checked' : 'unchecked'}
                                onPress={() => { setChecked1('first'), setvalue('Last 30 Days') }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => { setChecked1('first'), setvalue('Last 30 Days') }}
                            style={{ flex: 0.75, justifyContent: 'center' }}>
                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Last 30 Days</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cont2view2}>
                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                            <RadioButton.Android
                                color={Colors.commoncolor}
                                value="second"
                                status={checked1 === 'second' ? 'checked' : 'unchecked'}
                                onPress={() => { setChecked1('second'), setvalue('Last 6 Months') }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => { setChecked1('second'), setvalue('Last 6 Months') }}
                            style={{ flex: 0.75, justifyContent: 'center' }}>
                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Last 6 Months</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cont2view2}>
                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                            <RadioButton.Android
                                color={Colors.commoncolor}
                                value="third"
                                status={checked1 === 'third' ? 'checked' : 'unchecked'}
                                onPress={() => { setChecked1('third'), setvalue('2022') }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => { setChecked1('third'), setvalue('2022') }}
                            style={{ flex: 0.75, justifyContent: 'center' }}>
                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>2022</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cont2view2}>
                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                            <RadioButton.Android
                                color={Colors.commoncolor}
                                value="fourth"
                                status={checked1 === 'fourth' ? 'checked' : 'unchecked'}
                                onPress={() => { setChecked1('fourth'), setvalue('2021') }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => { setChecked1('fourth'), setvalue('2021') }}
                            style={{ flex: 0.75, justifyContent: 'center' }}>
                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>2021</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cont2view2}>
                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                            <RadioButton.Android
                                color={Colors.commoncolor}
                                value="fifth"
                                status={checked1 === 'fifth' ? 'checked' : 'unchecked'}
                                onPress={() => { setChecked1('fifth'), setvalue('2020') }}
                            />
                        </View>
                        <TouchableOpacity onPress={() => { setChecked1('fifth'), setvalue('2020') }}
                            style={{ flex: 0.75, justifyContent: 'center' }}>
                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>2020</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.container3}>
                <TouchableOpacity onPress={() => navigation.navigate('OrderFilterdetail', val)}
                    style={{ width: height / 2.2, height: height / 15, backgroundColor: '#fc8181', borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-Medium', color: 'white' }}>Apply</Text>
                </TouchableOpacity>
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
        width: height / 100 * 5
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height / 40,
    },
    container1: {
        flex: 0.35, justifyContent: 'center'
    },
    cont1mainview: {
        flex: 0.9, backgroundColor: 'white', marginHorizontal: 15, borderRadius: 15, elevation: 3
    },
    view1: {
        flex: 0.25, marginHorizontal: 20, justifyContent: 'flex-end'
    },
    view2: {
        flex: 0.25, flexDirection: 'row', alignItems: 'center'
    },
    view3: {
        flex: 0.25, flexDirection: 'row', alignItems: 'center'
    },
    view4: {
        flex: 0.25, flexDirection: 'row', alignItems: 'center'
    },
    container2: {
        flex: 0.5,
    },
    cont2mainview: {
        flex: 1, backgroundColor: 'white', marginHorizontal: 15, borderRadius: 15, elevation: 3
    },
    cont2view1: {
        flex: 0.2, marginHorizontal: 20, justifyContent: 'flex-end'
    },
    cont2view2: {
        flex: 0.15, flexDirection: 'row', alignItems: 'center'
    },
    container3: {
        flex: 0.15, justifyContent: 'center', alignItems: 'center'
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
export default Orderfilterscreen;
import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image, TextInput } from 'react-native';
import Colors from '../../color/commoncolor';
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window');
const Myorderscreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{
                    height: height / 100 * 8,
                    justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
                }}>
                    <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>My orders</Text>
                </View>
                <View style={styles.container1}>
                    <View style={styles.cont1view1}>
                        <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <View style={{ height: height / 14.9, width: width / 1.3, backgroundColor: '#FFFFFF', borderRadius: 15, elevation: 3, flexDirection: 'row' }}>
                                <View style={{ width: '80%', justifyContent: 'center' }}>
                                    <TextInput
                                        style={{ fontSize: height / 57.7, fontFamily: 'Poppins-Regular', marginLeft: 15, color: '#595959' }}
                                        placeholder="Search"
                                        keyboardType='default'
                                    />
                                </View>
                                <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                    <Icons.FontAwesome name='search' style={{ fontSize: height / 40, color: '#FC8181', opacity: 0.6 }} />
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => navigation.navigate('OrderFilter')}>
                                <Image style={{ height: height / 17, width: height / 17, resizeMode: 'contain' }}
                                    source={require('../../assets/images/filtericon.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.container2}>
                    <Text style={{ fontSize: 18, fontFamily: 'Poppins-Regular', color: '#555555', marginLeft: 30 }}>Last 6Months</Text>
                </View>
                <View style={{ height: height / 100 * 8, justifyContent: 'center', marginHorizontal: 10 }}>
                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 30 }}>
                        No orders or transactions found.
                        Please select a different time period or order type</Text>
                </View>
            </ScrollView>
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
        height: height / 100 * 15
    },
    cont1view1: {
        flex: 0.9, flexDirection: 'row',
    },
    search: {
        backgroundColor: '#fff',
        fontWeight: '600',
        fontSize: 18,
        margin: 8,
        color: '#555858',
        borderRadius: 15,
        width: '80%'
    },
    filter: {
        color: '#ffffff',
        fontSize: height / 32,
        textAlign: 'center',
    },
    container2: {
        height: height / 100 * 8, backgroundColor: '#EEEEEE', justifyContent: 'center'
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
export default Myorderscreen;
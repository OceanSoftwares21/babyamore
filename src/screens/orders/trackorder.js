import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../../color/commoncolor';
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window');
const Trackorderscreen = ({ navigation }) => {
    const Data = { status: 'confirmed' };
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={{
                height: height / 100 * 8,
                justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
            }}>
                <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>Track order</Text>
            </View>
            <View style={styles.container}>
                <View style={styles.view1}>
                    <View style={{ flex: 0.85, justifyContent: 'center', backgroundColor: '#F9FAFB', marginHorizontal: 20, borderRadius: 15, justifyContent: 'center', }}>
                        <View style={{ flex: 0.4, justifyContent: 'flex-end', alignItems: 'center' }}>
                            <View style={{ height: height / 18, width: height / 2.7, backgroundColor: '#edeff2', borderRadius: 15, flexDirection: 'row' }}>
                                <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: height / 52, fontFamily: 'Poppins-Medium', color: '#8A8D9F', marginLeft: 20 }}>
                                        No. Order
                                    </Text>
                                </View>
                                <View style={{ flex: 0.6, alignItems: 'flex-end', justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ height: height / 25, width: height / 25, backgroundColor: '#c7c8d1', borderRadius: 50, marginRight: 15, justifyContent: 'center', alignItems: 'center' }}>
                                        <Icons.Ionicons style={{ fontSize: height / 45, color: '#8A8D9F' }} name="md-paper-plane-outline" />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        <View style={styles.view1subview}>
                            <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>Your order code:<Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FC8181' }}>#800715</Text></Text>
                            <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>3 items -<Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FC8181' }}>₹4,099.00</Text></Text>
                        </View>
                    </View>
                </View>
                <View style={styles.view2}>
                    <View style={{ flex: 0.2, }}>
                        <View style={{ flex: 0.9, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                <Icons.AntDesign style={{ fontSize: height / 37, color: Colors.commoncolor }} name='checkcircle' />
                            </View>
                            <View style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ width: 2, height: height / 13, backgroundColor: Colors.commoncolor }}></Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                {Data.status == 'confirmed' ?
                                    <Icons.AntDesign style={{ fontSize: height / 37, color: Colors.commoncolor }} name='checkcircle' />
                                    : <Icons.Entypo style={{ fontSize: height / 37, color: Colors.commoncolor }} name='circle' />}
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ width: 2, height: height / 13, backgroundColor: Colors.commoncolor }}></Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                {Data.status == 'Order shipped' ?
                                    <Icons.AntDesign style={{ fontSize: height / 37, color: Colors.commoncolor }} name='checkcircle' />
                                    : <Icons.Entypo style={{ fontSize: height / 37, color: Colors.commoncolor }} name='circle' />}
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ width: 2, height: height / 13, backgroundColor: Colors.commoncolor }}></Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                {Data.status == 'Out for delivery' ?
                                    <Icons.AntDesign style={{ fontSize: height / 37, color: Colors.commoncolor }} name='checkcircle' />
                                    : <Icons.Entypo style={{ fontSize: height / 37, color: Colors.commoncolor }} name='circle' />}
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ width: 2, height: height / 13, backgroundColor: Colors.commoncolor }}></Text>
                            </View>
                            <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                                {Data.status == 'Delivered' ?
                                    <Icons.AntDesign style={{ fontSize: height / 37, color: Colors.commoncolor }} name='checkcircle' />
                                    : <Icons.Entypo style={{ fontSize: height / 37, color: Colors.commoncolor }} name='circle' />}
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.7 }}>
                        <View style={{ flex: 0.2, marginTop: 10 }}>
                            <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#212B36' }}>Order placed</Text>
                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>We have received your order</Text>
                        </View>
                        <View style={{ flex: 0.2, }}>
                            <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#212B36' }}>Confirmed</Text>
                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Your order has been confirmed</Text>
                        </View>
                        <View style={{ flex: 0.2, }}>
                            <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#212B36' }}>Order shipped</Text>
                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Estimated for 02 July, 2022</Text>
                        </View>
                        <View style={{ flex: 0.2, }}>
                            <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#212B36' }}>Out for delivery</Text>
                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Estimated for 5 July, 2022</Text>
                        </View>
                        <View style={{ flex: 0.2, }}>
                            <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#212B36' }}>Delivered</Text>
                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Estimated for 7 July, 2022</Text>
                        </View>
                    </View>
                </View>
            </View>
            <View style={styles.view3}>
                <TouchableOpacity onPress={() => navigation.navigate('Home')}
                    style={{ width: height / 3.2, height: height / 14.9, backgroundColor: '#fc8181', borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-Medium', color: 'white' }}>Back to Home</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Colors.background, justifyContent: 'center'
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
    container: {
        height: height / 1.4, backgroundColor: 'white', marginHorizontal: 15, borderRadius: 15, justifyContent: 'flex-end', elevation: 2
    },
    view1: {
        flex: 0.25, justifyContent: 'center'
    },
    view1subview: {
        flex: 0.6, justifyContent: 'center', alignItems: 'center'
    },
    view2: {
        flex: 0.75, flexDirection: 'row'
    },
    view3: {
        height: height / 10, justifyContent: 'center', alignItems: 'center', marginTop: 5
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

export default Trackorderscreen;

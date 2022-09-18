import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Colors from '../../color/commoncolor';
const { height, width } = Dimensions.get('window');
const Ordersuccess = (props) => {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container1}>
                <Image source={require('../../assets/images/oredersuccess.png')}
                />
            </View>
            <View style={styles.container2}>
                <View style={{
                    flex: 0.65, backgroundColor: 'white', marginHorizontal: 25, borderRadius: 20,
                    alignItems: 'center',
                    shadowColor: '#000',
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                }}>
                    <View style={{ flex: 0.2, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 37, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>Order Successful!</Text>
                    </View>
                    <View style={{ flex: 0.2, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-Medium', color: '#888C9B', textAlign: 'center' }}>Your order will be delivered on</Text>
                        <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-Medium', color: '#888C9B', textAlign: 'center' }}>time.Thank You!</Text>
                    </View>
                    <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Ordertrackscreen')}
                            style={{
                                justifyContent: 'center', height: height / 14.9, width: width / 1.3,
                                backgroundColor: Colors.commoncolor, borderRadius: height / 10, alignItems: 'center'
                            }}>
                            <Text style={{ fontSize: height / 47, fontFamily: 'Poppins-Medium', color: 'white' }}>View Order</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'flex-start' }}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}
                            style={{
                                height: height / 14.9, width: width / 1.3, justifyContent: 'center',
                                backgroundColor: '#fff2f2', borderRadius: height / 10, alignItems: 'center'
                            }}>
                            <Text style={{ fontSize: height / 47, fontFamily: 'Poppins-Medium', color: Colors.commoncolor }}>Continue Shopping</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>

        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Colors.background
    },
    container1: {
        flex: 0.4, justifyContent: 'center', alignItems: 'center'
    },
    container2: {
        flex: 0.6
    },
})
export default Ordersuccess;

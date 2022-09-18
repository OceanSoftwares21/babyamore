import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, Image } from 'react-native';
import Colors from '../../color/commoncolor';
const { height, width } = Dimensions.get('window');

const Ordersuccess = ({navigation}) => {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container1}>
                <Image style={{height:height/3.5,width:height/2.4}}
                 source={require('../../assets/images/oredersuccess.png')}
                />
            </View>
            <View style={styles.container2}>
                <View style={{
                    flex: 0.7, backgroundColor: 'white', marginHorizontal: 35, borderRadius: 20,
                    alignItems: 'center',
                    shadowColor: '#000',
                    justifyContent:'space-evenly',    
                    shadowOffset: {
                        width: 0,
                        height: 2,
                    },
                    shadowOpacity: 0.25,
                    shadowRadius: 4,
                    elevation: 5,
                }}>
                    <View style={{ flex:0.25, justifyContent: 'flex-end', alignItems: 'center' }}>
                        <Text style={{ fontSize: height/37.4, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>Registration Successfull</Text>
                    </View>
                    <View style={{flex:0.45,justifyContent:'center',alignItems:'center',marginHorizontal:15 }}>
                        <Text style={{ fontSize: height/54, fontFamily: 'Poppins-Medium', color: '#888C9B', textAlign: 'center' }}>You will get exciting offers</Text>
                        <Text style={{ fontSize: height/54, fontFamily: 'Poppins-Medium', color: '#888C9B', textAlign: 'center' }}>based on your details</Text>
                    </View>
                    <View style={{flex:0.3,alignItems:'center'}}>
                    <TouchableOpacity onPress={()=>navigation.navigate('MainScreen')}
                    style={{height:height/14.9,width:height/2.5, justifyContent: 'center',
                        backgroundColor: Colors.commoncolor, borderRadius: height/10, alignItems: 'center'}}>
                        <Text style={{ fontSize: height/46.7, fontFamily: 'Poppins-SemiBold', color: 'white' }}>Continue</Text>
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
        flex: 0.4, justifyContent:'flex-end', alignItems: 'center'
    },
    container2: {
        flex: 0.5,justifyContent:'center'
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 200,
    },
    modalView: {
        height: '50%',
        width: '80%',
        backgroundColor: 'white',
        borderRadius: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    button: {
        borderRadius: 20,
        elevation: 2,
    },

    buttonClose: {
        backgroundColor: '#2196F3',
    },
    textStyle: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center',
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
    },
})
export default Ordersuccess;
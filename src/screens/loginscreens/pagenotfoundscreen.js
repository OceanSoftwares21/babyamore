import React from 'react';
import {
    Text, View, SafeAreaView, StyleSheet, TouchableOpacity, Image,
    ActivityIndicator,Dimensions,Modal
} from 'react-native';
import colors from '../../color/commoncolor';
const { height, width } = Dimensions.get('window')
const YourApp = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container1}>
                <Image style={{height:height/2.5,width:height/2.5,resizeMode:'stretch'}}
                source={require('../../assets/images/errorimg.png')}

                />
            </View>
            <View style={styles.container2}>
                <View style={styles.cont2view1}>
                    <Text style={styles.cont2text1}>No Internet Connetction available</Text>
                </View>
                <View style={styles.cont2view2}>
                    <Text style={{ fontSize: height/58, textAlign: 'center', fontWeight: '600' }}> Your are not connected to the internet,
                        please check your connection is working</Text>
                </View>
                <View style={styles.cont2view4}>
                    <TouchableOpacity 
                        style={{ flex: 0.35, backgroundColor: colors.commoncolor, marginHorizontal: 70, borderRadius: 20, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: height/58, fontWeight: '500', color: 'white' }}>Try Again</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: colors.background
    },
    container1: {
        flex: 0.55, justifyContent: 'center', alignItems: 'center'
    },
    container2: {
        flex: 0.4, backgroundColor: 'white', marginHorizontal: 20,
        borderRadius: 15,
    },
    cont2text1: {
        fontSize: height/45, color: '#fc8181', fontFamily: "Poppins-Bold", fontWeight: 'bold',
        textAlign: 'center', letterSpacing: 2,
    },
    cont2view1: {
        flex: 0.3, justifyContent: 'center', alignItems: 'center',
    },
    cont2view2: {
        flex: 0.3, alignItems: 'center', marginHorizontal: 20, justifyContent: 'center'
    },

    cont2view4: {
        flex: 0.4, justifyContent: 'center'
    },
    centeredView: {
        flex: 1,
        backgroundColor: '#1C2340',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
    },
    modalView: {
        height: height / 100 * 35,
        width: height / 100 * 45,
        backgroundColor: 'white',
        borderRadius: 10,

        // shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})
export default YourApp;
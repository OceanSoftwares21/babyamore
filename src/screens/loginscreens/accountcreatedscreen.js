import React from 'react';
import { Text, View, SafeAreaView, StyleSheet,TouchableOpacity,Image,
Dimensions,PixelRatio } from 'react-native';
import colors from '../../color/commoncolor';
const YourApp = ({navigation}) => {
    const size =40;  
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container1}>
                <View style={{ flex: 0.3,justifyContent:'center',marginHorizontal:20}}>
                    <Image style={{height:PixelRatio.getPixelSizeForLayoutSize(30),
                    width:PixelRatio.getPixelSizeForLayoutSize(150)}}
                    source={require('../../assets/images/logo.png')}
                    />
                </View>
                <View style={{ flex: 0.7, }}>
                </View>
            </View>
            <View style={styles.container2}>
                <View style={styles.cont2view1}>
                    <Text style={styles.cont2text1}>Account successfully Created!</Text>
                </View>
                <View style={styles.cont2view2}>
                    <Text style={{fontSize:18,textAlign:'center'}}>Your account has beed Created successfully.</Text>
                </View>
                <View style={styles.cont2view3}>
                    <Text style={{fontSize:18,textAlign:'center'}}>Please sign in to use your account and enjoy</Text>
                </View>
                <View style={styles.cont2view4}>
                <TouchableOpacity onPress={()=>navigation.navigate('Login')}
                style={{ flex: 0.4, backgroundColor: '#fc8181', marginHorizontal: 30, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: 22, fontWeight: '500', color: 'white' }}>Take me to Sign in!</Text>
                        </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor:colors.background
    },
    container1: {
        flex: 0.55
    },
    container2: {
        flex: 0.4, backgroundColor: 'white', marginHorizontal: 20,
        borderRadius: 15,
    },
    cont2text1: {
        fontSize: 24, color: '#fc8181', fontFamily: "Poppins-Bold", fontWeight: 'bold'
    },
    cont2view1: {
        flex: 0.2, justifyContent: 'center', alignItems: 'center'
    },
    cont2view2: {
        flex: 0.2, alignItems: 'center',marginHorizontal:20
    },
    cont2view3: {
        flex: 0.2,alignItems:'center',marginHorizontal:20
    },
    cont2view4: {
        flex: 0.4,justifyContent:'center'
    },

})
export default YourApp;
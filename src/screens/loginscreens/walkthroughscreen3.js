import React from 'react';
import {
    Text, View, StyleSheet, SafeAreaView, ImageBackground, Image, Dimensions,
    TouchableOpacity
} from 'react-native';
import Color from '../../color/commoncolor';
const { height, width } = Dimensions.get('window');
const Walkthrough3 = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ImageBackground style={{ height: '100%', width: '100%', justifyContent: 'flex-end' }}
                source={require('../../assets/images/imagebackground3.png')}>
                <View style={{ flex: 0.55, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: height / 2.55, width: height / 2.7 }}
                        source={require('../../assets/images/walkimg3.png')}
                    />
                </View>
                <View style={styles.container1}>
                    <View style={styles.view1}>
                        <Image style={{ height: height / 15.85, width: height / 3.13, marginTop: 10 }}
                            source={require('../../assets/images/logo.png')}
                        />
                    </View>
                    <View style={styles.view2}>
                        <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: Color.commoncolor, marginTop: 10 }}>
                            Fastest Delivery
                        </Text>
                    </View>
                    <View style={styles.view3}>
                        <Text style={{ fontSize: height / 53.4, fontFamily: 'Poppins-Regular', color: '#656565', textAlign: 'center' }}>Fastest delivery for your location</Text>
                        <Text style={{ fontSize: height / 53.4, fontFamily: 'Poppins-Regular', color: '#656565', textAlign: 'center' }}>on time</Text>
                    </View>
                    <View style={styles.view4}>
                        <TouchableOpacity onPress={() => navigation.navigate('Login', { screen: 'Loginscreen' })}
                            style={{ height: height / 13.6, width: width / 1.15, borderRadius: height / 10, backgroundColor: '#FC8181', justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                            <Text style={{ fontSize: height / 41.5, fontFamily: 'Poppins-Medium', color: '#FFFFFF' }}>GET STARTED</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1
    },
    container1: {
        flex: 0.45, backgroundColor: 'white', borderTopLeftRadius: height / 8,
    },
    view1: {
        flex: 0.3, alignItems: 'center', justifyContent: 'flex-end', marginLeft: 15
    },
    view2: {
        flex: 0.2, justifyContent: 'center', alignItems: 'center'
    },
    view3: {
        flex: 0.2, justifyContent: 'center', alignItems: 'center'
    },
    view4: {
        flex: 0.3, justifyContent: 'center', alignItems: 'center'
    }
})
export default Walkthrough3;
import React, { useEffect, useState } from 'react';
import {
    Text, View, StyleSheet, SafeAreaView, ImageBackground, Image, Dimensions,
    TouchableOpacity
} from 'react-native';
import Color from '../../color/commoncolor';
const { height, width } = Dimensions.get('window');
const Walkthrough = ({ navigation }) => {
    const [refresh, setRefresh] = useState(false)
    useEffect(() => {
        setRefresh(true)
    }, [navigation])
    var timeoutVariable
    useEffect(() => {
        if (refresh) {
            timeoutVariable = setTimeout(() =>
                navigation.navigate('Walkthrough2'), 5000)
        }
        return () => clearTimeout(timeoutVariable)
    }, [refresh])

    const change = () => {
        navigation.navigate('Walkthrough2'),
            clearTimeout(timeoutVariable)
    }
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ImageBackground style={{ flex: 1 }}
                source={require('../../assets/images/imagebackground1.png')}>
                <View style={{ flex: 0.55, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ height: height / 2.8, width: height / 2.3 }}
                        source={require('../../assets/images/walkimg1.png')}
                    />
                </View>
                <View style={styles.container1}>
                    <View style={styles.view1}>
                        <Image style={{ height: height / 15.85, width: height / 3.13 }}
                            source={require('../../assets/images/logo.png')}
                        />
                    </View>
                    <View style={styles.view2}>
                        <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: Color.commoncolor }}>
                            Order Your Favourites
                        </Text>
                    </View>
                    <View style={styles.view3}>
                        <Text style={{ fontSize: height / 53.4, fontFamily: 'Poppins-Regular', color: '#656565', textAlign: 'center' }}>You Can order your favourite</Text>
                        <Text style={{ fontSize: height / 53.4, fontFamily: 'Poppins-Regular', color: '#656565', textAlign: 'center', marginTop: 5 }}>baby products</Text>
                    </View>
                    <View style={styles.view4}>
                        <TouchableOpacity onPress={() => { change() }}
                            style={{ height: height / 13.6, width: height / 13.6, borderRadius: 50, backgroundColor: Color.commoncolor, justifyContent: 'center', alignItems: 'center', marginRight: width / 15 }}>
                            <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF' }}>SKIP</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.view5}>
                        <Text style={{ width: width / 100 * 30, height: height / 100 * 1.5, backgroundColor: Color.commoncolor, borderRadius: 10, marginBottom: 10 }}></Text>
                        <Text style={{ width: width / 100 * 60, height: height / 100 * 1.5, backgroundColor: '#FBEEE6', borderTopRightRadius: 10, borderBottomRightRadius: 10, marginBottom: 10 }}></Text>
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
        flex: 0.45, backgroundColor: '#FFFFFF', borderTopLeftRadius: height / 8
    },
    view1: {
        flex: 0.3, alignItems: 'center', justifyContent: 'center', marginLeft: 15
    },
    view2: {
        flex: 0.1, justifyContent: 'center', alignItems: 'center'
    },
    view3: {
        flex: 0.2, justifyContent: 'flex-end', alignItems: 'center', marginHorizontal: 30
    },
    view4: {
        flex: 0.25, alignItems: 'flex-end', justifyContent: 'center', marginHorizontal: 15,
    },
    view5: {
        flex: 0.15, alignItems: 'center', flexDirection: 'row', marginHorizontal: 10, justifyContent: 'center'
    }
})
export default Walkthrough;

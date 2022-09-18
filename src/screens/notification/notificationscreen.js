import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Colors from '../../color/commoncolor';
import { ScrollView } from 'react-native-gesture-handler';
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window');
const Notificationscreen = ({ navigation }) => {
    const Data = [
        {
            title: 'Welcome to Baby Amore',
            description: `You've unlocked your 1st ever offer on Baby Amore! Order today & avail Flat 30% OFF on Fashion, Diapers, Baby Gear,Nursery, Baby Care, Health & Safety, Toys & More>`,
            time: '2 hours ago'
        },
        {
            title: 'Welcome to Baby Amore',
            description: `You've unlocked your 1st ever offer on Baby Amore! Order today & avail Flat 30% OFF on Fashion, Diapers, Baby Gear,Nursery, Baby Care, Health & Safety, Toys & More>`,
            time: '2 hours ago'
        },
    ]
    const Data2 = [
        {
            title: 'Booking Cancel',
            description: `Booking #107 has been cancelled`,
            iconname: 'cancel',
            color: 'red'
        },
        {
            title: 'Payment ',
            description: `Thank you! Your transaction is com...`,
            iconname: 'payment', color: '#FFBC00'
        },
        {
            title: 'Booking Accept ',
            description: `Booking #1234 has been success...`,
            iconname: 'check-circle', color: '#FC8181'
        }
    ];
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView>
                <View style={{
                    height: height / 100 * 8,
                    justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>Notifications</Text>
                </View>
                {Data.map((val, i) => {
                    return (
                        <View key={i} style={{ height: height / 100 * 20, justifyContent: 'center' }}>
                            <View style={{ flex: 0.9, backgroundColor: 'white', borderRadius: 10, marginHorizontal: 10, marginTop: 5 }}>
                                <View style={{ flex: 0.25, flexDirection: 'row', marginHorizontal: 5, }}>
                                    <View style={{ flex: 0.8, justifyContent: 'center', marginHorizontal: 10 }}>
                                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Bold', color: '#555555' }}>{val.title}</Text>
                                    </View>
                                    <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'flex-end' }}>
                                        <TouchableOpacity >
                                            <Icons.MaterialCommunityIcons style={{ fontSize: 25, color: '#555555' }} name='dots-vertical' />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={{ flex: 0.5, marginHorizontal: 10, justifyContent: 'center' }}>
                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>{val.description}</Text>
                                </View>
                                <View style={{ flex: 0.25, justifyContent: 'center', flexDirection: 'row' }}>
                                    <View style={{ flex: 0.5, marginHorizontal: 20 }}>
                                        <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Regular', color: '#FC8181' }}>{val.time}</Text>
                                    </View>
                                    <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-end', marginHorizontal: 10 }}>
                                        <TouchableOpacity>
                                            <Icons.EvilIcons style={{ fontSize: 30, color: '#8A8D9F' }} name='trash' />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })}
                {Data2.map((item, i) => {
                    return (
                        <View key={i} style={{ height: height / 100 * 15, justifyContent: 'center' }}>
                            <View style={{ flex: 0.9, backgroundColor: 'white', borderRadius: 10, marginHorizontal: 10, flexDirection: 'row', marginTop: 5 }}>
                                <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                                    <Icons.MaterialIcons style={{ fontSize: 30, }} color={item.color} name={item.iconname} />
                                </View>
                                <View style={{ flex: 0.7, }}>
                                    <View style={{ flex: 0.5, flexDirection: 'row', }}>
                                        <View style={{ flex: 0.8, justifyContent: 'center' }}>
                                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Bold', color: '#FC8181' }}>{item.title}</Text>
                                        </View>
                                        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'flex-end' }}>
                                            <TouchableOpacity >
                                                <Icons.MaterialCommunityIcons style={{ fontSize: 25, color: '#555555' }} name='dots-vertical' />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.5 }}>
                                        <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>{item.description}</Text>
                                    </View>
                                </View>

                            </View>
                        </View>
                    )
                })}
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
    messagestyle: {
        height: height / 100 * 20, justifyContent: 'center'
    },
    cancelstyle: {
        height: height / 100 * 15, justifyContent: 'center'
    }
})
export default Notificationscreen;
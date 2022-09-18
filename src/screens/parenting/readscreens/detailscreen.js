import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, Image, ScrollView, TouchableWithoutFeedback } from 'react-native';
import Color from '../../../color/commoncolor';
import { Icons } from '../../../color/icon';
const { height, width } = Dimensions.get('window');
const Detailscreen = ({ navigation }) => {
    const Data = [
        {
            id: '1', detail: 'BABY',
            title: `7 Ways to Aid Your Baby's Ability to Reason`,
            destitle: 'In Collaboration with Nestle Start Healthy Stay Healthy',
            description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum`,
            authname: 'Sanjana Lokur', date: 'March 18, 2022 10:34 AM',
        }
    ]
    const Data1 = [
        { id: '1', img: require('../../../assets/images/baby1.png'), },
        { id: '2', img: require('../../../assets/images/baby2.png'), }
    ]
    return (
        <View style={styles.maincontainer}>
            <ScrollView>
                <View style={styles.container1}>
                    <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}
                        style={{
                            height: height / 17, width: width / 2, backgroundColor: '#EEEEEE', borderTopLeftRadius: height / 10, borderBottomLeftRadius: height / 10,
                            justifyContent: 'center', alignItems: 'center'
                        }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F', }}>
                            SHOPPING
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{
                        height: height / 17, width: width / 2, backgroundColor: Color.commoncolor, borderTopLeftRadius: height / 10, borderBottomLeftRadius: height / 10,
                        borderTopRightRadius: height / 10, borderBottomRightRadius: height / 10, position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center'
                    }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', }}>
                            PARENTING
                        </Text>
                    </TouchableOpacity>
                </View>
                {Data.map((item, i) => {
                    return (
                        <View key={i} style={styles.container2}>
                            <View style={styles.view1}>
                                <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginTop: 5 }}>
                                    {item.detail}
                                </Text>
                                <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-SemiBold', color: '#0C0B52', }}>
                                    {item.title}
                                </Text>
                            </View>
                            <View style={styles.view2}>
                                <Image style={{ height: '100%', width: '100%', borderRadius: 5, resizeMode: 'cover' }}
                                    source={require('../../../assets/images/read1.png')}
                                />
                                <TouchableOpacity
                                    style={{
                                        height: height / 22, width: height / 22, position: 'absolute', backgroundColor: 'white', borderRadius: 50,
                                        justifyContent: 'center', alignItems: 'center', bottom: 10, right: 12,
                                    }}>
                                    <Icons.Ionicons name='paper-plane-outline' style={{ fontSize: height / 40, color: '#8A8D9F' }} />
                                </TouchableOpacity>
                            </View>
                            <View style={styles.view3}>
                                <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-SemiBold Italic', color: '#1C2340', }}>
                                    {item.destitle}
                                </Text>
                            </View>
                            <View style={styles.view4}>
                                <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F', textAlign: 'left' }}>
                                    {item.description}
                                </Text>
                            </View>
                            <View style={styles.view5}>
                                <Text style={{ fontSize: height / 55, fontFamily: 'Poppins-SemiBold', color: '#1C2340', }}>
                                    Also Read:
                                </Text>
                                <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#546AF2', textAlign: 'center' }}>
                                    How to Teach a Child to Chew Food -
                                    Easy Ways for Parents
                                </Text>
                                <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F', textAlign: 'center' }}>

                                    This post was last modified on March 18, 2022 1:52 PM
                                </Text>
                            </View>
                            <View style={styles.view6}>
                                <TouchableWithoutFeedback onPress={() => console.log('predded')}>
                                    <Text style={{ fontSize: height / 55, fontFamily: 'Poppins-SemiBold', color: '#1C2340', }}>
                                        NEXT{'>'}
                                    </Text>
                                </TouchableWithoutFeedback>
                                <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#555555', }}>
                                    Sending Your Child to Preschool for the First Time{'>>'}
                                </Text>
                            </View>
                            <View style={styles.view7}>
                                <TouchableWithoutFeedback onPress={() => console.log('predded')}>
                                    <Text style={{ fontSize: height / 55, fontFamily: 'Poppins-SemiBold', color: '#1C2340', }}>
                                        {'<'}Previous
                                    </Text>
                                </TouchableWithoutFeedback>
                                <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#555555', }}>
                                    {'<<'}Mazikeen Name Meening and Origin
                                </Text>
                            </View>
                            <View style={styles.view8}>
                                <Text style={{ fontSize: height / 55, fontFamily: 'Poppins-SemiBold', color: '#1C2340', marginLeft: 5, marginTop: 8 }}>
                                    Published By
                                </Text>
                                <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#555555', marginLeft: 5, marginTop: 8 }}>
                                    {item.authname}
                                </Text>
                                <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 5, marginTop: 8 }}>
                                    {item.date}
                                </Text>
                            </View>
                        </View>
                    )
                })}
                <View style={styles.container3}>
                    <View style={{ flex: 0.2, marginHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#555555', marginLeft: 10 }}>
                            Related Post</Text>
                        <TouchableOpacity >
                            <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-SemiBold', color: '#FC8181', textDecorationLine: 'underline' }}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.8, flexDirection: 'row', alignItems: 'center', }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {Data1.map((item, i) => {
                                return (
                                    <TouchableOpacity key={i} style={{ height: height / 100 * 20, width: height / 100 * 35, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                                        <Image style={{ height: height / 100 * 20, width: height / 100 * 35, borderRadius: 10 }}
                                            source={item.img}>
                                        </Image>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
                <View style={{ height: height / 100 * 5 }}></View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1,
    },
    buttonLeft: {
        width: height / 100 * 5
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height / 40,
    },
    container1: {
        height: height / 100 * 6, justifyContent: 'center', marginHorizontal: 15, marginTop: 10
    },
    container2: {
        height: height / 100 * 150, backgroundColor: 'white', marginHorizontal: 10,
        marginTop: 10, borderRadius: 10, elevation: 3
    },
    view1: {
        flex: 0.1, marginHorizontal: 15, justifyContent: 'space-evenly'
    },
    view2: {
        flex: 0.3, alignItems: 'center'
    },
    view3: {
        flex: 0.08,
        justifyContent: 'center', marginHorizontal: 15
    },
    view4: {
        flex: 0.2, marginHorizontal: 10, justifyContent: 'center'
    },
    view5: {
        flex: 0.1, marginHorizontal: 10, justifyContent: 'space-evenly'
    },
    view6: {
        flex: 0.05, marginHorizontal: 10,
        justifyContent: 'space-evenly', alignItems: 'flex-end'
    },
    view7: {
        flex: 0.05, marginHorizontal: 10,
        justifyContent: 'space-evenly', alignItems: 'flex-start',
        borderBottomColor: '#CCD1D1', borderBottomWidth: 1
    },
    view8: {
        flex: 0.1, marginHorizontal: 10, justifyContent: 'center'
    },
    container3: {
        height: height / 100 * 25, backgroundColor: 'white', marginHorizontal: 5,
        marginTop: 15, borderRadius: 15
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
export default Detailscreen;
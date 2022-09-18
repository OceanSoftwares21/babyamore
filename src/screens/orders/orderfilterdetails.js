import React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import Colors from '../../color/commoncolor';
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window');
const OrderFilterdetail = ({ navigation, route }) => {
    const val = route.params;
    const Data = [
        { id: '1', title: 'Alter Baby Diaper', img: require('../../assets/images/grid2_1.png'), date: 'Ordered on 23-Jan-2022' },
        { id: '2', title: 'Alter Baby Diaper', img: require('../../assets/images/grid2_2.png'), date: 'Ordered on 30-Jan-2022' },
        { id: '3', title: 'Alter Baby Diaper', img: require('../../assets/images/grid2_1.png'), date: 'Ordered on 5-Mar-2022' },
        { id: '4', title: 'Alter Baby Diaper', img: require('../../assets/images/grid2_2.png'), date: 'Ordered on 5-Mar-2022' },
        { id: '5', title: 'Alter Baby Diaper', img: require('../../assets/images/grid2_1.png'), date: 'Ordered on 20-Mar-2022' }
    ];
    return (
        <View style={styles.maincontainer}>
            <ScrollView>
                <View style={{
                    height: height / 100 * 8,
                    justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
                }}>
                    <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>My orders</Text>
                </View>
                <View style={{ marginTop: 10, backgroundColor: '#EEEEEE', height: height / 18, justifyContent: 'center', }}>
                    <Text style={{ fontSize: height / 52, fontFamily: 'Poppins-regular', color: '#555555', marginLeft: 10 }}>
                        {val}
                    </Text>
                </View>
                <View style={{ marginTop: 10 }}>
                    {val == 'Last 30 Days' ?
                        <>
                            {Data.slice(0, 2).map((item, i) => {
                                return (
                                    <View key={i} style={{ height: height / 5.5, marginHorizontal: 15, backgroundColor: 'white', borderRadius: 10, marginTop: 10, flexDirection: 'row' }}>
                                        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image style={{ height: '100%', width: '100%', borderRadius: 3, resizeMode: 'contain' }}
                                                source={item.img}
                                            />
                                        </View>
                                        <View style={{ flex: 0.5, justifyContent: 'center' }}>
                                            <TouchableOpacity style={{ flex: 0.5, flexDirection: 'row', }}>
                                                <View style={{ flex: 0.85, justifyContent: 'center', marginHorizontal: 5 }}>
                                                    <Text style={{ fontSize: height / 60, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>{item.title}</Text>
                                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555', marginTop: 5 }}>{item.date}</Text>
                                                </View>
                                                <View style={{ flex: 0.15, marginHorizontal: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Icons.FontAwesome style={styles.rightIcon} name='chevron-right' />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            })}
                        </>
                        : null}
                    {val == 'Last 6 Months' ?
                        <>
                            {Data.slice(0, 3).map((item, i) => {
                                return (
                                    <View key={i} style={{ height: height / 5.5, marginHorizontal: 15, backgroundColor: 'white', borderRadius: 10, marginTop: 10, flexDirection: 'row' }}>
                                        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image style={{ height: '95%', width: '95%', borderRadius: 10 }}
                                                source={item.img}
                                            />
                                        </View>
                                        <View style={{ flex: 0.5, justifyContent: 'center' }}>
                                            <TouchableOpacity style={{ flex: 0.5, flexDirection: 'row', }}>
                                                <View style={{ flex: 0.85, justifyContent: 'center', marginHorizontal: 5 }}>
                                                    <Text style={{ fontSize: height / 60, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>{item.title}</Text>
                                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555' }}>{item.date}</Text>
                                                </View>
                                                <View style={{ flex: 0.15, marginHorizontal: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Icons.FontAwesome style={styles.rightIcon} name='chevron-right' />
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                )
                            })}
                        </> :
                        null}
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Colors.background
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height / 40,
    },
    rightIcon: {
        color: '#E0E0E0',
        fontSize: height / 48
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
export default OrderFilterdetail;
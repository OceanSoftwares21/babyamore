import React, { useRef } from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import Color from '../../../color/commoncolor';
import { Icons } from '../../../color/icon';
const { height, width } = Dimensions.get('window');
const Audiovideodetailscreen = ({ navigation }) => {
    const Datas = [
        {
            id: '1', title: 'Baby Care', img: require('../../../assets/images/detailvideo.png'),
            views: '50 Views', duration: '25 Min', desctiption: `Newborn screening tests are the test performed on the  newborn to look for different disorders. This video helps you know various newborn screening tests along the `
        }
    ]
    const [Data, setData] = React.useState([])
    React.useEffect(() => {
        setData(Datas.map(s => ({ ...s, isopen: false, isopen1: false })))
    }, [])
    const Click = (e) => {
        setData(
            Data.map(a => a.id === e.id ? ({ ...a, isopen: !a.isopen }) : (a))
        )
    }
    const Click2 = (e) => {
        setData(
            Data.map(a => a.id === e.id ? ({ ...a, isopen1: !a.isopen1 }) : (a))
        )
    }
    const Data2 = [
        { id: '1', img: require('../../../assets/images/babydetail.png'), },
        { id: '2', img: require('../../../assets/images/babydetail.png'), }
    ]
    return (
        <View style={styles.maincontainer}>
            <ScrollView>
                <View style={{}}>
                    {Data.map((e, i) => {
                        var value = e.desctiption.slice(0, 95)
                        return (
                            <View key={i} style={{}}>
                                <View style={{ height: height / 1.7, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }}
                                        source={e.img}
                                    />
                                </View>
                                <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 15 }}>
                                    <Text style={{ fontSize: height / 45, fontFamily: 'Poppins-Medium', color: '#292727' }}>
                                        {e.title}</Text>
                                    <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F' }}>
                                        {e.views}
                                    </Text>
                                </View>
                                <View style={{ marginTop: 5, marginHorizontal: 15 }}>
                                    <Text style={{ fontSize: height / 75, fontFamily: 'Poppins-SemiBold', color: '#555555' }}>
                                        {e.duration}
                                    </Text>
                                </View>
                                <View style={{ marginTop: 5, marginHorizontal: 10, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                                    <Text style={{ fontSize: height / 60, fontFamily: 'Poppins-Regular', color: '#FC8181' }}>#new born</Text>
                                    <Text style={{ fontSize: height / 60, fontFamily: 'Poppins-Regular', color: '#FC8181' }}>#new born baby</Text>
                                    <Text style={{ fontSize: height / 60, fontFamily: 'Poppins-Regular', color: '#FC8181' }}>#new born baby care</Text>
                                </View>
                                <View style={{ marginTop: 5, marginHorizontal: 15 }}>
                                    {e.isopen ? <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555' }}>{e.desctiption}</Text> :
                                        <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555' }}>{value}</Text>}
                                </View>
                                <View style={{ marginTop: 5, marginHorizontal: 15, borderBottomWidth: 1, borderBottomColor: '#BFC9CA' }}>
                                    <Text onPress={() => Click(e)}
                                        style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Medium', color: Color.commoncolor }}>Read More...</Text>
                                </View>
                                <View style={{ marginTop: 5, flexDirection: 'row', height: height / 100 * 12, marginHorizontal: 15, borderBottomWidth: 1, borderBottomColor: '#BFC9CA' }}>
                                    <View style={{ flex: 0.4, flexDirection: 'row', justifyContent: 'space-between' }}>
                                        <View style={{ flex: 0.5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                            <TouchableOpacity onPress={() => Click2(e)}>
                                                {e.isopen1 ?
                                                    <Icons.AntDesign name='heart' style={{ fontSize: height / 40, color: Color.commoncolor }} /> :
                                                    <Icons.AntDesign name='hearto' style={{ fontSize: height / 40 }} />
                                                }
                                            </TouchableOpacity>
                                            <Text style={{ fontSize: height / 60, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F' }}>50 Likes</Text>
                                        </View>
                                        <View style={{ flex: 0.5, justifyContent: 'space-evenly', alignItems: 'center' }}>
                                            <Image style={{ height: height / 40, width: height / 40, tintColor: '#8A8D9F' }}
                                                source={require('../../../assets/images/Share.png')}
                                            />
                                            <Text style={{ fontSize: height / 60, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F' }}>6 Shares</Text>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
                <View style={styles.container2}>
                    <View style={{ flex: 0.15, flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Medium', color: '#292727' }}>
                            Up Next
                        </Text>
                        <Text
                            style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Regular', color: '#FC8181', textDecorationLine: 'underline' }}>
                            See All
                        </Text>
                    </View>
                    <View style={{ flex: 0.85, flexDirection: 'row', alignItems: 'center', }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {Data2.map((item, i) => {
                                return (
                                    <TouchableOpacity
                                        key={i} style={{ height: height / 100 * 20, width: height / 100 * 35, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                                        <Image style={{ height: height / 100 * 20, width: height / 100 * 35, borderRadius: 10 }}
                                            source={item.img}>
                                        </Image>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
                <TouchableOpacity style={styles.buttonLeft}
                    onPress={() => navigation.goBack()}>
                    <Icons.FontAwesome style={styles.leftIcon} name="chevron-left" />
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Color.background
    },
    container2: {
        height: height / 100 * 30, marginTop: 15
    },
    buttonLeft: {
        width: height / 100 * 5, position: 'absolute', left: width / 30, top: height / 35
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height / 40,
    },
})
export default Audiovideodetailscreen;

import React from 'react';
import { Text, View, StyleSheet, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import Color from '../../../color/commoncolor'
const { height, width } = Dimensions.get('window')
const Data = [
    { id: '1', img: require('../../../assets/images/video1.png'), },
    { id: '2', img: require('../../../assets/images/video1.png'), }
]
const Data1 = [
    { id: '1', img: require('../../../assets/images/babyvideo.png'), },
    { id: '2', img: require('../../../assets/images/babyvideo.png'), }
]
const Data2 = [
    { id: '1', img: require('../../../assets/images/foodvideo.png'), },
    { id: '2', img: require('../../../assets/images/foodvideo.png'), }
]
const Audiovidescreen = ({ navigation }) => {
    return (
        <View style={styles.maincontainer}>
            <ScrollView>
                <TouchableOpacity style={styles.container1}
                    onPress={() => navigation.navigate('Videodetail')}>
                    <Image style={{ height: '95%', width: '98%' }}
                        source={require('../../../assets/images/detailvideo.png')}
                    />
                </TouchableOpacity>
                <View style={styles.container2}>
                    <View style={{ flex: 0.2, flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: '#555555' }}>
                            Baby Care
                        </Text>
                        <Text onPress={() => navigation.navigate('Videodetail')}
                            style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Regular', color: '#FC8181', textDecorationLine: 'underline' }}>
                            See All
                        </Text>
                    </View>
                    <View style={{ flex: 0.8, flexDirection: 'row', alignItems: 'center', }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {Data.map((item, i) => {
                                return (
                                    <TouchableOpacity
                                        key={i} style={{ height: height / 100 * 20, width: height / 100 * 40, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                                        <Image style={{ height: height / 100 * 20, width: height / 100 * 40, borderRadius: 10 }}
                                            source={item.img}>
                                        </Image>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={{ flex: 0.2, flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: '#555555' }}>
                            Baby Health
                        </Text>
                        <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Regular', color: '#FC8181', textDecorationLine: 'underline' }}>
                            See All
                        </Text>
                    </View>
                    <View style={{ flex: 0.8, flexDirection: 'row', alignItems: 'center', }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {Data1.map((item, i) => {
                                return (
                                    <TouchableOpacity key={i} style={{ height: height / 100 * 20, width: height / 100 * 40, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                                        <Image style={{ height: height / 100 * 20, width: height / 100 * 40, borderRadius: 10 }}
                                            source={item.img}>
                                        </Image>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={{ flex: 0.2, flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: '#555555' }}>
                            Baby Food
                        </Text>
                        <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Regular', color: '#FC8181', textDecorationLine: 'underline' }}>
                            See All
                        </Text>
                    </View>
                    <View style={{ flex: 0.8, flexDirection: 'row', alignItems: 'center', }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {Data2.map((item, i) => {
                                return (
                                    <TouchableOpacity key={i} style={{ height: height / 100 * 20, width: height / 100 * 40, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                                        <Image style={{ height: height / 100 * 20, width: height / 100 * 40, borderRadius: 10 }}
                                            source={item.img}>
                                        </Image>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.container2}>
                    <View style={{ flex: 0.2, flexDirection: 'row', marginHorizontal: 15, justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: '#555555' }}>
                            Pregnancy Care
                        </Text>
                        <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Regular', color: '#FC8181', textDecorationLine: 'underline' }}>
                            See All
                        </Text>
                    </View>
                    <View style={{ flex: 0.8, flexDirection: 'row', alignItems: 'center', }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {Data.map((item, i) => {
                                return (
                                    <TouchableOpacity key={i} style={{ height: height / 100 * 20, width: height / 100 * 35, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                                        <Image style={{ height: height / 100 * 20, width: height / 100 * 35, borderRadius: 10 }}
                                            source={require('../../../assets/images/pregnancy.png')}>
                                        </Image>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Color.background
    },
    container1: {
        height: height / 3, justifyContent: 'center', alignItems: 'center'
    },
    container2: {
        height: height / 100 * 28, marginTop: 10
    }
})
export default Audiovidescreen;
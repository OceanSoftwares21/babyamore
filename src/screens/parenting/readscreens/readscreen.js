import React from 'react';
import {
    Text, View, StyleSheet, SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity,
} from 'react-native';
import Color from '../../../color/commoncolor'
import Carousel from 'react-native-snap-carousel';
const { height, width } = Dimensions.get('window')
const Readingscreen = ({ navigation }) => {
    const [carouselItems, setcarous] = React.useState(
        [
            {
                title: "Item 1",
                text: "Text 1",
            },
            {
                title: "Item 2",
                text: "Text 2",
            },
            {
                title: "Item 3",
                text: "Text 3",
            },]
    )
    const SLIDER_WIDTH = Dimensions.get('window').width + 10;
    const ITEM_WIDTH = Math.round(SLIDER_WIDTH * 0.8);
    const _renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: '100%', height: '100%', borderRadius: 15 }}
                    source={require('../../../assets/images/blog.jpg')}
                />
             </View>
        );
    }
    const Data = [
        { id: '1', img: require('../../../assets/images/baby1.png'), },
        { id: '2', img: require('../../../assets/images/baby2.png'), }
    ]
    const Data1 = [
        { id: '1', img: require('../../../assets/images/toddler1.png'), },
        { id: '2', img: require('../../../assets/images/toddler2.png'), }
    ]
    const Data2 = [
        { id: '1', img: require('../../../assets/images/preschooler1.png'), },
        { id: '2', img: require('../../../assets/images/preschooler2.png'), }
    ]
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView>
                <View style={styles.container1}>
                    <Carousel
                        loop={true}
                        layout={"default"}
                        data={carouselItems}
                        sliderWidth={SLIDER_WIDTH}
                        itemWidth={ITEM_WIDTH}
                        renderItem={_renderItem}
                    />
                    <Text style={{ fontSize: height / 90, position: 'absolute', fontFamily: 'Poppins-Regular', color: '#FFFFFF', textAlign: 'center', bottom: height / 8, left: 0, right: 0 }}>Read all about</Text>
                    <Text style={{ fontSize: height / 34, position: 'absolute', fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', textAlign: 'center', bottom: height / 14, left: 0, right: 0 }}>Baby's Food &Nutrition</Text>
                    <TouchableOpacity onPress={() => navigation.navigate('ReadDetail')}
                    style={{
                        position: 'absolute', bottom: height / 38, right: width/2.8, height: height / 25, width: height / 7, backgroundColor: Color.commoncolor,
                        alignItems: 'center',borderRadius:15,justifyContent:'center',
                    }}>
                        <Text style={{ fontSize: height / 90, fontFamily: 'Poppins-Medium', color: '#FFFFFF' }}>EXPLORE     {'-->'}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.container2}>
                    <View style={{ flex: 0.2, marginHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#555555', marginLeft: 10 }}>Baby</Text>
                        <TouchableOpacity onPress={() => navigation.navigate('ReadDetail')}>
                            <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Regular', color: '#FC8181', textDecorationLine: 'underline' }}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.8, flexDirection: 'row', alignItems: 'center', }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {Data.map((item, i) => {
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
                <View style={styles.container3}>
                    <View style={{ flex: 0.2, marginHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#555555', marginLeft: 10 }}>Toddler</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Regular', color: '#FC8181', textDecorationLine: 'underline' }}>See All</Text>
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
                <View style={styles.container4}>
                    <View style={{ flex: 0.2, marginHorizontal: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#555555', marginLeft: 10 }}>Preschooler</Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Regular', color: '#FC8181', textDecorationLine: 'underline' }}>See All</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.8, flexDirection: 'row', alignItems: 'center', }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {Data2.map((item, i) => {
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
                <View style={{ height: height / 100 * 2 }}></View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Color.background
    },
    container1: {
        height: height / 100 * 30, marginTop: 15,
    },
    container2: {
        height: height / 100 * 28, backgroundColor: 'white', marginHorizontal: 5, marginTop: 15, borderRadius: 15
    },
    container3: {
        height: height / 100 * 28, backgroundColor: 'white', marginHorizontal: 5, marginTop: 15, borderRadius: 15
    },
    container4: {
        height: height / 100 * 28, backgroundColor: 'white', marginHorizontal: 5, marginTop: 15, borderRadius: 15
    },
})
export default Readingscreen;
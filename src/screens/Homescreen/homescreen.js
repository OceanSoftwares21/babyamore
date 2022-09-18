import React from 'react';
import {
    Text, View, SafeAreaView, StyleSheet, ScrollView, FlatList, BackHandler,
    Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity, Modal, Alert
} from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Color from '../../color/commoncolor';
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window');
import { useFocusEffect } from '@react-navigation/native';
import Shoppingparentingbutton from '../../components/shoppingparentingbutton';
import { useDispatch } from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Userdata } from '../redux/action/action';
const Homescreen = ({ navigation }) => {
    const dispatch = useDispatch()
    const [carouselItems, setcarous] = React.useState(
        [
            {
                title: "Item 1",
                text: "Text 1",
                img: require('../../assets/images/homebanner.png')
            },
            {
                title: "Item 2",
                text: "Text 2",
                img: require('../../assets/images/homebanner2.png')
            },
            {
                title: "Item 3",
                text: "Text 3",
                img: require('../../assets/images/homebanner.png')
            },
            {
                title: "Item 3",
                text: "Text 3",
                img: require('../../assets/images/homebanner2.png')
            },
        ]
    )
    const [modalVisible, setModalVisible] = React.useState(false);
    const [list, setList] = React.useState([]);
    const [activeSlide, setactiveSlide] = React.useState(0);
    const [paginationvalue, setValue] = React.useState();
    const currentref = React.useRef();
    const Data = [
        { id: '1', img: require('../../assets/images/brand2.png') },
        { id: '2', img: require('../../assets/images/brand3.png') },
        { id: '3', img: require('../../assets/images/brand1.png') },
        { id: '4', img: require('../../assets/images/brand4.png') },
        { id: '5', img: require('../../assets/images/brand5.png') },
        // {id:'1',img:require('../../assets/images/banner.jpg')},
    ]
    const Data2 = [
        {
            id: '1', title: 'An amazing experience!',
            desctiption: `I am seriously impressed with 
Babyamore for delivering my
 order so quickly. Kudos team. 
So happy to have found a good 
seller for baby products`, subtitle: 'Meenaakshi Venkhataraman'
        },
        {
            id: '1', title: 'Seriously impressed!',
            desctiption: `I am seriously impressed with 
Babyamore for delivering my
 order so quickly. Kudos team. 
So happy to have found a good 
seller for baby products`, subtitle: 'Meenaakshi Venkhataraman'
        },
        {
            id: '1', title: 'An amazing experience!',
            desctiption: `I am seriously impressed with 
Babyamore for delivering my
 order so quickly. Kudos team. 
So happy to have found a good 
seller for baby products`, subtitle: 'Meenaakshi Venkhataraman'
        },
    ]
    const val = [
        { id: '1', title: 'PureBorn Diapers, Single Pack', img: require('../../assets/images/sample2.jpg'), amount: '1099.00' },
        { id: '2', title: 'PureBorn Diapers, Value Pack', img: require('../../assets/images/sample2.jpg'), amount: '1099.00' },
        { id: '3', title: 'Desitin Maximum Strength Diaper Rash Paste, 136g', img: require('../../assets/images/sample2.jpg'), amount: '1099.00' },
    ]
    const SLIDER_WIDTH = width;
    const ITEM_WIDTH = width - width / 14;
    // const currentref = React.useRef();
    // React.useEffect(() => {
    //     setModalVisible(true)
    // }, [navigation])
    React.useEffect(() => {
        async function fetchuserdata() {
            var userdataa = await AsyncStorage.getItem('USERDATA')
            dispatch(Userdata(userdataa))
        }
        fetchuserdata()
    }, [])
    React.useEffect(() => {
        setList(val.map(s => ({ ...s, isopen: false })))
        // dispatch(Userdata(userdata))
    }, [])
    useFocusEffect(
        React.useCallback(() => {
            const backAction = () => {
                Alert.alert("Exit App", "Are you sure you want to exit?", [
                    { text: "Cancel" },
                    { text: "Yes", onPress: () => BackHandler.exitApp() }
                ]);
                return true;
            };

            const backHandler = BackHandler.addEventListener(
                "hardwareBackPress",
                backAction
            );

            return () => backHandler.remove();
        }, [])
    );
    // React.useEffect(() => {
    //     BackHandler.addEventListener('hardwareBackPress', handleBackButton);
    //     return () => BackHandler.removeEventListener
    // }, [])
    // const handleBackButton = () => {
    //     Alert.alert(
    //         'Exit App',
    //         'Exiting the application', [{
    //             text: 'Cancel',
    //             onPress: () => console.log('presss')
    //         }, {
    //             text: 'OK',
    //             onPress: () => BackHandler.exitApp()
    //         },], {
    //         cancelable: true
    //     }
    //     )
    //     return true;
    // }
    const _renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: '100%', height: '100%', resizeMode: 'stretch', borderRadius: 10 }}
                    source={item.img}
                />
            </View>
        );
    }
    const pagination = () => {
        return (
            <Pagination
                dotsLength={carouselItems.length}
                activeDotIndex={activeSlide}
                containerStyle={{ height: 5, width: 10, }}
                dotStyle={{
                    width: height / 80,
                    height: height / 80,
                    borderRadius: 10,
                    marginHorizontal: 2,
                    backgroundColor: Color.commoncolor
                }}
                inactiveDotStyle={{
                    backgroundColor: '#8A8D9F',
                    height: height / 80,
                    width: height / 80,
                    borderRadius: 10,
                }}
                inactiveDotOpacity={1}
                inactiveDotScale={0.6}
            />
        );
    }
    const makeTimer = () => {
        setModalVisible(false)
    }
    const click2 = (item) => {
        setList(
            list.map(e => e.id === item.id ? ({ ...e, isopen: !e.isopen }) : (e))
        )
    }
    const onViewRef = React.useRef((viewableItems) => {
        let activeind = viewableItems.changed.map((e) => { return e.index })
        setValue(parseInt(activeind))
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView>
                <Shoppingparentingbutton props={navigation} />
                <View style={styles.container3}>
                    <View style={{ flex: 0.9, }}>
                        <Carousel
                            autoplay={false}
                            loop={true}
                            enableSnap={true}
                            layout={"default"}
                            data={carouselItems}
                            sliderWidth={SLIDER_WIDTH}
                            itemWidth={ITEM_WIDTH}
                            renderItem={_renderItem}
                            onSnapToItem={(index) => setactiveSlide(index)}
                        />
                    </View>
                    <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
                        {pagination()}
                    </View>
                </View>
                <View style={styles.container4}>
                    <View style={styles.cont4view1}>
                        <Text style={styles.cont4text}>What are you looking  for today?</Text>
                    </View>
                    <View style={styles.cont4view2}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            < TouchableWithoutFeedback>
                                <View style={styles.cont4view2subview}>
                                    <View style={{ height: '75%', justifyContent: 'center', alignItems: 'center', }}>
                                        <Image style={{ height: height / 10, width: height / 10 }}
                                            source={require('../../assets/images/brand.png')}
                                        />
                                    </View>
                                    <View style={{ height: '25%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#1C2340' }}>Brands</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback onPress={() => navigation.navigate('Childstack', { screen: 'Gird' })}>
                                <View style={styles.cont4view2subview}>
                                    <View style={{ height: '75%', justifyContent: 'center', alignItems: 'center', }}>
                                        <Image style={{ height: height / 10, width: height / 10 }}
                                            source={require('../../assets/images/nappy.png')}
                                        />
                                    </View>
                                    <View style={{ height: '25%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#7CC8F5' }}>Nappy Care</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={styles.cont4view2subview}>
                                    <View style={{ height: '75%', justifyContent: 'center', alignItems: 'center', }}>
                                        <Image style={{ height: height / 10, width: height / 10 }}
                                            source={require('../../assets/images/oral.png')}
                                        />
                                    </View>
                                    <View style={{ height: '25%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#E6CC86' }}>Oral Care</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={styles.cont4view2subview}>
                                    <View style={{ height: '75%', justifyContent: 'center', alignItems: 'center', }}>
                                        <Image style={{ height: height / 10, width: height / 10 }}
                                            source={require('../../assets/images/gear.png')}
                                        />
                                    </View>
                                    <View style={{ height: '25%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#6F70C3' }}>Gears & Toys</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={styles.cont4view2subview}>
                                    <View style={{ height: '75%', justifyContent: 'center', alignItems: 'center', }}>
                                        <Image style={{ height: height / 10, width: height / 10 }}
                                            source={require('../../assets/images/feeding.png')}
                                        />
                                    </View>
                                    <View style={{ height: '25%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#FA943F' }}>Feeding</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={styles.cont4view2subview}>
                                    <View style={{ height: '75%', justifyContent: 'center', alignItems: 'center', }}>
                                        <Image style={{ height: height / 10, width: height / 10 }}
                                            source={require('../../assets/images/skin.png')}
                                        />
                                    </View>
                                    <View style={{ height: '25%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#B88148' }}>Skin & Hair</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={styles.cont4view2subview}>
                                    <View style={{ height: '75%', justifyContent: 'center', alignItems: 'center', }}>
                                        <Image style={{ height: height / 10, width: height / 10 }}
                                            source={require('../../assets/images/mother.png')}
                                        />
                                    </View>
                                    <View style={{ height: '25%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#F685F9' }}>Parenthood</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={styles.cont4view2subview}>
                                    <View style={{ height: '75%', justifyContent: 'center', alignItems: 'center', }}>
                                        <Image style={{ height: height / 10, width: height / 10 }}
                                            source={require('../../assets/images/cloth.png')}
                                        />
                                    </View>
                                    <View style={{ height: '25%', alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#10C8D4' }}>Baby Clothes</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.container5}>
                    <View style={{ flex: 0.3, marginHorizontal: 15, justifyContent: 'flex-end' }}>
                        <Text style={{ fontSize: height / 45, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>Featured Brands</Text>
                    </View>
                    <View style={{ flex: 0.6, justifyContent: 'center' }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {Data.map((val, i) => {
                                return (
                                    <View key={i} style={{ height: height / 18, width: height / 10.8, justifyContent: 'center', alignItems: 'center', elevation: 3, backgroundColor: '#FFFFFF', marginTop: 10, marginHorizontal: 15 }}>
                                        <Image style={{ height: '90%', width: '90%', resizeMode: 'contain' }}
                                            source={val.img}
                                        />
                                    </View>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.container6}>
                    <View style={styles.cont6view1}>
                        <View style={{ flex: 0.75, marginHorizontal: 15, justifyContent: 'center', }}>
                            <Text style={styles.cont5text}>Popular Categories</Text>
                        </View>
                        <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
                            <TouchableOpacity>
                                <Text style={{ textDecorationLine: 'underline', fontSize: height / 58, color: Color.commoncolor, fontFamily: 'Poppins-Regular' }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cont6view2}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableWithoutFeedback>
                                <View style={styles.cont6view2subview}>
                                    <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ height: '100%', width: '100%', borderRadius: 10 }}
                                            source={require('../../assets/images/sample3.jpg')}
                                        />
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555' }}>Diapers & pants</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={styles.cont6view2subview}>
                                    <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ height: '100%', width: '100%', borderRadius: 10 }}
                                            source={require('../../assets/images/sample6.jpg')}
                                        />
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555' }}>Shampoos</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={styles.cont6view2subview}>
                                    <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ height: '100%', width: '100%', borderRadius: 10 }}
                                            source={require('../../assets/images/sample7.jpg')}
                                        />
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555' }}>Tableware</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={styles.cont6view2subview}>
                                    <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ height: '100%', width: '100%', borderRadius: 10 }}
                                            source={require('../../assets/images/sample7.jpg')}
                                        />
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555' }}>Tableware</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.container7}>
                    <View style={styles.cont7view1}>
                        <View style={{ flex: 0.75, justifyContent: 'center', marginHorizontal: 15 }}>
                            <Text style={styles.cont5text}>Deals of the Week</Text>
                        </View>
                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Text style={{ textDecorationLine: 'underline', fontSize: height / 58, color: '#fc8181', fontFamily: 'Poppins-Regular' }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cont7view2}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableWithoutFeedback>
                                <View style={{ height: height / 4.8, width: height / 2.6, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                                    <Image source={require('../../assets/images/sample.jpg')}
                                        style={{ height: height / 4.8, width: height / 2.6, }}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={{ height: height / 4.8, width: height / 2.6, justifyContent: 'center', alignItems: 'center', marginLeft: 10 }}>
                                    <Image source={require('../../assets/images/sample.jpg')}
                                        style={{ height: height / 4.8, width: height / 2.6, }}
                                    />
                                </View>
                            </TouchableWithoutFeedback>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.container8}>
                    <View style={styles.cont7view1}>
                        <View style={{ flex: 0.75, justifyContent: 'center', marginHorizontal: 15 }}>
                            <Text style={styles.cont5text}>Everyday needs</Text>
                        </View>
                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity>
                                <Text style={{ textDecorationLine: 'underline', fontSize: height / 58, color: '#fc8181', fontFamily: 'Poppins-Regular' }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{ flex: 0.8, }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {list.map((item, i) => {
                                return (
                                    <TouchableWithoutFeedback key={i}>
                                        <View style={{ width: height / 5.5, height: height / 4, backgroundColor: '#FFFFFF', borderRadius: 10, elevation: 3, marginTop: 5, marginLeft: 15 }}>
                                            <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                                                <Image style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                                                    source={item.img}
                                                />
                                                <TouchableOpacity onPress={() => click2(item)}
                                                    style={{
                                                        position: 'absolute', right: 5, top: 5, justifyContent: 'center', alignItems: 'center',
                                                    }}>
                                                    {item.isopen ? <Icons.FontAwesome style={[styles.cardTitleIcon, { color: Color.commoncolor }]} name="heart" /> :
                                                        <Icons.FontAwesome style={[styles.cardTitleIcon, { color: '#8A8D9F' }]} name="heart-o" />}
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ flex: 0.25, marginHorizontal: 5, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: height / 70, fontFamily: 'Poppins-Medium', color: '#555555', }}>{item.title}</Text>
                                            </View>
                                            <View style={{ flex: 0.15, marginHorizontal: 5, justifyContent: 'center' }}>
                                                <Text style={{ fontSize: height / 62.3, fontFamily: 'Poppins-Medium', textAlign: 'right', color: '#fc8181', marginRight: 10 }}>₹{item.amount}</Text>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                )
                            })}
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.container9}>
                    <View style={{ height: height / 1.2, width: width / 1.05 }}>
                        <View style={styles.cont9view1}>
                            <Text style={styles.cont9text}>Everyday Needs</Text>
                        </View>
                        <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around' }}>
                            <View style={{ flex: 0.31, }}>
                                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', }}>
                                    <Image style={{ height: '95%', width: '100%', borderRadius: 8, resizeMode: 'cover' }}
                                        source={require('../../assets/images/sample3.jpg')}
                                    />
                                </View>
                                <View style={{ flex: 0.2, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={{ fontSize: height / 68, fontWeight: '800', fontFamily: 'Poppins-SemiBold', color: '#555555' }}>Diapers</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.31, }}>
                                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image style={{ height: '95%', width: '100%', borderRadius: 8, resizeMode: 'cover' }}
                                        source={require('../../assets/images/sample6.jpg')}
                                    />
                                </View>
                                <View style={{ flex: 0.2, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={{ fontSize: height / 68, fontWeight: '800', fontFamily: 'Poppins-SemiBold', color: '#555555' }}>Shampoos</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.31, }}>
                                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center' }}>
                                    <Image style={{ height: '95%', width: '100%', borderRadius: 8, resizeMode: 'cover' }}
                                        source={require('../../assets/images/sample7.jpg')}
                                    />
                                </View>
                                <View style={{ flex: 0.2, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={{ fontSize: height / 68, fontWeight: '800', fontFamily: 'Poppins-SemiBold', color: '#555555' }}>Occasion Wear</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around', }}>
                            <View style={{ flex: 0.32 }}>
                                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', }}>
                                    <Image style={{ height: '95%', width: '100%', borderRadius: 8, resizeMode: 'cover' }}
                                        source={require('../../assets/images/sample8.jpg')}
                                    />
                                </View>
                                <View style={{ flex: 0.2, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={{ fontSize: height / 68, fontWeight: '800', fontFamily: 'Poppins-SemiBold', color: '#555555' }}>Lotions</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.32, }}>
                                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', }}>
                                    <Image style={{ height: '95%', width: '100%', borderRadius: 8, resizeMode: 'cover' }}
                                        source={require('../../assets/images/sample9.jpg')}
                                    />
                                </View>
                                <View style={{ flex: 0.2, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={{ fontSize: height / 68, fontWeight: '800', fontFamily: 'Poppins-SemiBold', color: '#555555' }}>Oral Care</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.32, }}>
                                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', }}>
                                    <Image style={{ height: '95%', width: '100%', borderRadius: 8, resizeMode: 'cover' }}
                                        source={require('../../assets/images/sample10.jpg')}
                                    />
                                </View>
                                <View style={{ flex: 0.2, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={{ fontSize: height / 68, fontWeight: '800', fontFamily: 'Poppins-SemiBold', color: '#555555' }}>Feeding Bottle</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 0.3, flexDirection: 'row', justifyContent: 'space-around', }}>
                            <View style={{ flex: 0.32 }}>
                                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', }}>
                                    <Image style={{ height: '95%', width: '100%', borderRadius: 8, resizeMode: 'cover' }}
                                        source={require('../../assets/images/sample11.jpg')}
                                    />
                                </View>
                                <View style={{ flex: 0.2, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={{ fontSize: height / 68, fontWeight: '800', fontFamily: 'Poppins-SemiBold', color: '#555555' }}>Motherhood</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.32, }}>
                                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', }}>
                                    <Image style={{ height: '95%', width: '100%', borderRadius: 8, resizeMode: 'cover' }}
                                        source={require('../../assets/images/sample12.jpg')}
                                    />
                                </View>
                                <View style={{ flex: 0.2, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={{ fontSize: height / 68, fontWeight: '800', fontFamily: 'Poppins-SemiBold', color: '#555555' }}>Snacks&Drinks</Text>
                                </View>
                            </View>
                            <View style={{ flex: 0.32, }}>
                                <View style={{ flex: 0.8, alignItems: 'center', justifyContent: 'center', }}>
                                    <Image style={{ height: '95%', width: '100%', borderRadius: 8, resizeMode: 'cover' }}
                                        source={require('../../assets/images/sample13.jpg')}
                                    />
                                </View>
                                <View style={{ flex: 0.2, justifyContent: 'flex-start', alignItems: 'center' }}>
                                    <Text style={{ fontSize: height / 68, fontWeight: '800', fontFamily: 'Poppins-SemiBold', color: '#555555' }}>Baby clothes</Text>
                                </View>
                            </View>
                        </View>
                    </View>
                </View>
                <View style={{ height: height / 100 * 60, marginTop: 10, backgroundColor: 'white', marginHorizontal: 5, borderRadius: 10 }}>
                    <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 45, fontFamily: 'Poppins-Medium', color: '#555555', textDecorationLine: 'underline' }}>
                            What our customers say
                        </Text>
                    </View>
                    <View style={{ flex: 0.85 }}>
                        <FlatList
                            ref={currentref}
                            onViewableItemsChanged={onViewRef.current}
                            viewabilityConfig={viewConfigRef.current}
                            horizontal={true}
                            data={Data2}
                            keyExtractor={(item, index) => { return item.id, index.toString() }}
                            showsHorizontalScrollIndicator={false}
                            pagingEnabled={true}
                            renderItem={(item, index) => {
                                return (
                                    <View style={{ width: width / 100 * 95, alignItems: 'center', marginLeft: 10 }}>
                                        <View style={[item.index == paginationvalue ? { height: height / 2.3, width: width / 100 * 60, backgroundColor: '#F2F7FB', elevation: 2 } : { height: height / 2.3, width: width / 100 * 60, backgroundColor: '#F2F7FB', marginTop: height / 25 }]}>
                                            <View style={{ flex: 0.2, justifyContent: 'flex-end', alignItems: 'center' }}>
                                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Bold', color: '#555555', textDecorationLine: 'underline' }}>
                                                    {item.item.title}
                                                </Text>
                                            </View>
                                            <View style={{ flex: 0.6, justifyContent: 'center' }}>
                                                <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Italic', color: '#8A8D9F', textAlign: 'center' }}>
                                                    {item.item.desctiption}
                                                </Text>
                                            </View>
                                            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: '#555555' }}>
                                                    {item.item.subtitle}
                                                </Text>
                                            </View>
                                        </View>
                                    </View>
                                )
                            }}
                        />
                    </View>
                </View>
                <Modal
                    animationType='fade'
                    transparent={true}
                    visible={modalVisible}>
                    <View style={styles.centeredView}>
                        <View style={styles.modalView}>
                            <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center', marginHorizontal: 55 }}>
                                <Text style={{ fontSize: height / 53, fontFamily: 'Poppins-SemiBold', color: Color.commoncolor, textAlign: 'center' }}>
                                    Enter Your child details to get
                                    exciting offers
                                </Text>
                            </View>
                            <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => {
                                    navigation.navigate('Baby'),
                                        setModalVisible(false)
                                }}
                                    style={{ height: height / 14.9, width: height / 3.7, backgroundColor: Color.commoncolor, borderRadius: height / 10, justifyContent: 'center', alignItems: 'center', marginBottom: 10 }}>
                                    <Text style={{ fontSize: height / 45, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF' }}>Sure</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'flex-start' }}>
                                <TouchableOpacity onPress={() => makeTimer()}>
                                    <Text style={{ fontSize: height / 45, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Later</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </Modal>
                <View style={{ height: height / 100 * 2 }}></View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Color.background
    },
    cardTitleIcon: {
        fontWeight: 'bold',
        fontSize: height / 48,
    },
    container1: {
        height: height / 100 * 6, justifyContent: 'center', marginHorizontal: 15, marginTop: 10,
    },
    cont1view1: {
        flex: 0.5,
    },
    cont1view2: {
        flex: 0.5,
    },
    container2: {
        height: height / 100 * 7, marginHorizontal: 5, justifyContent: 'center'
    },
    container3: {
        height: height / 2.4, marginTop: 10
    },
    container4: {
        height: height / 3.6, elevation: 3, backgroundColor: '#FFFFFF'
    },
    cont4view1: {
        flex: 0.2, justifyContent: 'flex-end', marginHorizontal: 15
    },
    cont4text: {
        fontSize: height / 45, fontFamily: 'Poppins-SemiBold', color: '#1C2340'
    },
    cont4view2: {
        flex: 0.8, flexDirection: 'row', marginTop: 5
    },
    cont4view2subview: {
        width: width / 3.2, height: height / 5.5, backgroundColor: '#FFFFFF', borderRadius: 10, elevation: 5, marginHorizontal: 15, marginTop: 8
    },
    container5: {
        height: height / 7, marginTop: 10, elevation: 3, backgroundColor: '#FFFFFF'
    },
    cont5text: {
        fontSize: height / 45, fontFamily: 'Poppins-SemiBold', color: '#1C2340'
    },
    container6: {
        height: height / 3.2, backgroundColor: '#FFFFFF', marginTop: 10, elevation: 3
    },
    cont6view1: {
        flex: 0.2, flexDirection: 'row'
    },
    cont6view2subview: {
        width: height / 5.6, height: height / 4.4, backgroundColor: '#FFFFFF', borderRadius: 10, elevation: 3, marginLeft: 15
    },
    cont6view2: {
        flex: 0.75
    },
    container7: {
        height: height / 3.8, marginTop: 10, backgroundColor: '#FFFFFF', elevation: 3
    },
    cont7view1: {
        flex: 0.15, flexDirection: 'row'
    },
    cont7view2: {
        flex: 0.8, justifyContent: 'center', alignItems: 'center'
    },
    container8: {
        height: height / 3, marginTop: 10, elevation: 3, backgroundColor: '#FFFFFF'
    },
    container9: {
        height: height / 1.2, backgroundColor: '#FFFFFF', marginTop: 10, borderRadius: 10, elevation: 3, alignItems: 'center', marginHorizontal: 5
    },
    cont9view1: {
        flex: 0.1, justifyContent: "center", alignItems: 'center'
    },
    cont9text: {
        fontSize: height / 45, fontFamily: 'Poppins-SemiBold', color: '#1C2340', textDecorationLine: 'underline'
    },
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(28,35,64,0.8)',
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalView: {
        height: height / 3,
        width: '100%',
        backgroundColor: 'white',
        borderTopLeftRadius: height / 20,
        borderTopRightRadius: height / 20,
        shadowOpacity: 2,
    },
    normal: {
        width: width / 100 * 50, height: height / 3.2, backgroundColor: '#F2F7FB', elevation: 2, marginHorizontal: 10
    },
    currentposition: {
        width: width / 100 * 60, height: '85%', backgroundColor: '#F2F7FB', marginLeft: 10,
    }
})


export default Homescreen;
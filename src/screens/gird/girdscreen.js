
import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, ScrollView, ActivityIndicator, Dimensions, Image, TouchableWithoutFeedback, TouchableOpacity, ImageBackground } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import Color from '../../color/commoncolor';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/Entypo';
import baseurl from '../../baseurl/baseurl';
import axios from 'axios';
import Shoppingparentingbutton from '../../components/shoppingparentingbutton';

const { height, width } = Dimensions.get('window');
const Girdscreen = ({ navigation }) => {
    const SLIDER_WIDTH = width;
    const ITEM_WIDTH = width - 15;
    const SLIDER_WIDTH2 = Dimensions.get('window').width + 50;
    const ITEM_WIDTH2 = Math.round(SLIDER_WIDTH2 * 0.8);
    const [activeSlide, setactiveSlide] = React.useState(0);
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
            },
            {
                title: "Item 3",
                text: "Text 3",
            },
        ]
    );
    const [values, setValues] = React.useState([]);
    const Data = [
        {
            id: '1',
            product: 'Disposable Diapers',
            producttitle: [
                {
                    id: '1',
                    product: 'Diaper pants',
                    details: [
                        { id: '1', title: 'Disposable Diapers' },
                        { id: '2', title: 'Training Pants' },
                        { id: '3', title: 'Night ' },
                    ]
                },
                { id: '2', product: 'Taped Diapers', details: [] },
                { id: '3', product: 'Herbal Total Care', details: [] }
            ],
            img: require('../../assets/images/product1.jpg')
        },
        {
            id: '2', product: 'Wet Wipes',
            img: require('../../assets/images/product2.jpg'),
            producttitle: [
                { details: [] }
            ]
        },
        {
            id: '3', product: 'Cloth Diapers',
            img: require('../../assets/images/product3.jpg'),
            producttitle: [
                {
                    details: []
                }
            ]
        },
        {
            id: '4', product: 'Best Seller',
            img: require('../../assets/images/product4.jpg'),
            producttitle: [
                { details: [] }
            ]
        },
        {
            id: '5', product: 'Brands',
            img: require('../../assets/images/product5.jpg'),
            producttitle: [
                { details: [] }
            ]
        },
        {
            id: '6', product: 'New Products',
            img: require('../../assets/images/product6.jpg'),
            producttitle: [
                { details: [] }
            ]
        },
    ];
    React.useEffect(() => {
        axios.get('http:54.255.246.233:5000/Maincategory/child/list')
            .then(res => {
                let dataa = res.data.map((e) => {
                    let producttitle1 = e.SubCategory.map((x) => {
                        return ({ ...x, isOpen2: false })
                    })
                    return ({ ...e, SubCategory: producttitle1, isOpen1: false })
                })
                setValues(dataa)
            })
            .catch(err => console.log(err))
    }, []);
    const _renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <Image style={{ height: '100%', width: '100%', resizeMode: 'stretch' }}
                    source={require('../../assets/images/img.png')}
                />
            </View>
        );
    };
    const _renderItem2 = ({ item, index }) => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ height: '100%', width: ITEM_WIDTH2, borderRadius: 10 }}
                    source={require('../../assets/images/girdimg.png')}
                />
            </View>
        );
    };
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
                    backgroundColor: '#EB5F5F'
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
    };
    const handleClick = (item) => {
        let data = values.map((a) => {
            let data2 = a.SubCategory.map((b) => {
                return ({ ...b, isOpen2: false })
            })
            return ({ ...a, SubCategory: data2 })
        })
        setValues(data)
        setValues(
            values.map(e => e._id == item._id ? ({ ...e, isOpen1: !e.isOpen1 }) : ({ ...e, isOpen1: false }))
        )
    };
    const click2 = (e) => {
        setValues(
            values.map(e => ({ ...e, isOpen1: false }))
        )
        let data = values.map((a) => {
            let data2 = a.SubCategory.map((b) => {
                return b._id === e._id ? ({ ...b, isOpen2: !b.isOpen2 }) : ({ ...b, isOpen2: false })
            })
            return ({ ...a, SubCategory: data2 })
        })
        setValues(data)
    }; 
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView>
                <Shoppingparentingbutton props={navigation} />
                <View style={styles.container2}>
                    <View style={styles.cont2v1}>
                        <Text style={styles.cont2text}>Nappy Care</Text>
                    </View>
                    <View style={styles.cont2v2}>
                        <TouchableOpacity onPress={() => navigation.navigate('Childstack', { screen: 'Filterscreen' })} activeOpacity={0.5}>
                            <Image style={{ height: height / 18, width: height / 18, resizeMode: 'contain' }}
                                source={require('../../assets/images/filtericon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={{ flex: 0.9 }}>
                        <Carousel
                            autoplay={false}
                            loop={true}
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
                    <Text style={styles.cont2text}>Nappy Care</Text>
                </View>
                <View style={{ marginHorizontal: 15, borderRadius: 10 }}>
                    {values.length ?
                        <>
                            {values.map((item, i) => {
                                return (
                                    <View key={i} style={{
                                        backgroundColor: '#FFFFFF', borderBottomWidth: 1,
                                        borderColor: '#F9F9FF', shadowColor: '#000',
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.3,
                                        shadowRadius: 2,
                                        elevation: 2,
                                    }}>
                                        <TouchableOpacity style={styles.listBtn}
                                            onPress={() => handleClick(item)}>
                                            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center', }}>
                                                <View style={{ height: height / 13, width: height / 13 }}>
                                                    <Image style={{ height: '100%', width: '100%', resizeMode: 'contain', borderRadius: height / 10 }}
                                                        source={{ uri: `http://54.255.246.233:5000/Maincategory_view/${item.CategoryImages}` }}
                                                    />
                                                </View>
                                            </View>
                                            <View style={{ flex: 0.55 }}>
                                                <Text style={styles.listText}>{item.CategoryName}</Text>
                                            </View>
                                            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                                {item.isOpen1 ? <Icon style={styles.rightIcon} name='chevron-down' /> :
                                                    <Icon style={styles.rightIcon} name='chevron-right' />}
                                            </View>
                                        </TouchableOpacity>
                                        {item.isOpen1 ?
                                            <>
                                                {item.SubCategory.map((e, index) => {
                                                    return (
                                                        <View key={index}>
                                                            <TouchableOpacity onPress={() => click2(e)}
                                                                style={styles.sublistBtn}>
                                                                <View style={{ flex: 0.8, flexDirection: 'row', }}>
                                                                    <View style={{ marginLeft: width / 5 }}>
                                                                        <View style={{ flex: 0.7, flexDirection: 'row', alignItems: 'center' }}>
                                                                            <Icon2 style={{ fontSize: height / 20, color: '#f8c3c3' }} name='dot-single' />
                                                                            <Text style={{ color: '#777A8D', fontSize: height / 51, fontFamily: 'Poppins-Regular' }}>{e.SubCategoryName}</Text>
                                                                        </View>
                                                                    </View>
                                                                </View>
                                                                <View style={{ flex: 0.2, alignItems: 'flex-start', justifyContent: 'center' }}>
                                                                    <View style={{ flex: 0.7, justifyContent: 'center' }}>
                                                                        {e.isOpen2 ? <Icon style={styles.rightIcon} name='chevron-down' /> :
                                                                            <Icon style={styles.rightIcon} name='chevron-right' />}
                                                                    </View>
                                                                </View>
                                                            </TouchableOpacity>
                                                            {e.isOpen2 ?
                                                                <>
                                                                    {e.ChildCategory.map((a, ind) => {
                                                                        return (
                                                                            <View key={ind}>
                                                                                <TouchableWithoutFeedback onPress={() => navigation.navigate('Childstack', { screen: 'Nappyscreen' })}
                                                                                    style={{}}>
                                                                                    <View style={{ flex: 1, justifyContent: 'space-evenly' }}>
                                                                                        <View style={{ flex: 0.9, marginTop: 5, marginBottom: 5, marginLeft: width / 3.8, }}>
                                                                                            <Text style={{ color: '#8A8D9F', fontSize: height / 62, fontFamily: 'Poppins-Regular' }}> <Icon2 style={{ fontSize: height / 50, color: '#f8c3c3' }} name='minus' />{a.ChildCategoryName}</Text>
                                                                                        </View>
                                                                                        
                                                                                    </View>
                                                                                </TouchableWithoutFeedback>
                                                                            </View>
                                                                        )
                                                                    })}
                                                                </> : null}
                                                        </View>
                                                    )
                                                })}
                                            </> : null}
                                    </View>
                                )
                            })}
                        </> :
                        <ActivityIndicator size={'large'} color={Color.commoncolor} />
                    }
                </View>
                <View style={styles.container6}>
                    <Image style={{ height: '95%', width: '98%' }} source={require('../../assets/images/v1.png')} />
                </View>
                <View style={styles.container7}>
                    <Text style={styles.cont7text}>Best Sellers</Text>
                </View>
                <View style={styles.container8}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                        <Carousel
                            autoplay={false}
                            loop={true}
                            layout={"default"}
                            data={carouselItems}
                            sliderWidth={SLIDER_WIDTH2}
                            itemWidth={ITEM_WIDTH2}
                            renderItem={_renderItem2}
                        />
                    </View>
                </View>
                <View style={styles.container9}>
                    <View style={styles.cont9view1}>
                        <Text style={{ fontSize: height / 31.1, fontFamily: 'Poppins-Medium', color: '#555555' }}>TRENDING PICKS</Text>
                    </View>
                    <View style={{ flex: 0.1, alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 74.8, fontFamily: 'Poppins-Regular', color: '#555555' }}>--Simplifying Your Style Decisions--</Text>
                    </View>
                    <View style={styles.cont9view2}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableOpacity style={{ width: height / 4, height: height / 3, justifyContent: 'center', marginLeft: 10 }}>
                                <ImageBackground style={{ justifyContent: 'flex-end', height: '95%', width: '100%', }}
                                    imageStyle={{ borderRadius: 10 }} source={{ uri: 'https://www.babyamore.in/wp-content/uploads/2021/09/Diaper-280x280.jpg' }}>
                                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 47.7, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', marginBottom: 5 }}>
                                            Diapers & Pants
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: height / 4, height: height / 3, justifyContent: 'center', marginLeft: 10 }}>
                                <ImageBackground style={{ justifyContent: 'flex-end', height: '95%', width: '100%', }} imageStyle={{ borderRadius: 10 }}
                                    source={require('../../assets/images/sample6.jpg')}>
                                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 47.7, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', marginBottom: 5 }}>
                                            Shampoos
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: height / 4, height: height / 3, justifyContent: 'center', marginLeft: 10 }}>
                                <ImageBackground style={{ justifyContent: 'flex-end', height: '95%', width: '95%', }} imageStyle={{ borderRadius: 10 }}
                                    source={require('../../assets/images/sample7.jpg')}>
                                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 47.7, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', marginBottom: 5 }}>
                                            Tableware
                                        </Text>
                                    </View>
                                </ImageBackground>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.container10} >
                    <View style={{ flex: 0.95, marginTop: 5 }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ width: height / 100 * 5, justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                <Image style={{ height: height / 110 * 25, width: height / 100 * 2, tintColor: '#555555' }}
                                    source={require('../../assets/images/text.png')}
                                />
                            </View>
                            <View style={{
                                width: height / 4.2, height: height / 3.5, backgroundColor: '#FFFFFF', borderRadius: 10, marginHorizontal: 5,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.3,
                                shadowRadius: 2,
                                elevation: 2,
                            }}>
                                <View style={{ flex: 0.65, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: '100%', width: '100%' }}
                                        source={require('../../assets/images/search.png')}
                                    />
                                </View>
                                <View style={{ flex: 0.2, justifyContent: 'flex-end' }}>
                                    <Text style={{ fontSize: height / 81, fontFamily: 'Poppins-Regular', color: '#555555', textAlign: 'center' }}>
                                        Eguchi Wooden Mobile Baby
                                        Bird Pelican for Baby & Kids
                                    </Text>
                                </View>
                                <View style={{ flex: 0.15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#FC8181', }}>₹10,999.00</Text>
                                    <Text style={{ fontSize: height / 101, fontFamily: 'Poppins-Medium', color: '#8A8D9F', textDecorationLine: 'line-through', marginLeft: 5, marginRight: 5 }}>₹13,748</Text>
                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#FC8181', }}>25% OFF</Text>

                                </View>
                            </View>
                            <View style={{
                                width: height / 4.2, height: height / 3.5, backgroundColor: '#FFFFFF', borderRadius: 10, marginHorizontal: 5,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.3,
                                shadowRadius: 2,
                                elevation: 2,
                            }}>
                                <View style={{ flex: 0.65, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: '100%', width: '100%', }}
                                        source={require('../../assets/images/baby.png')}
                                    />
                                </View>
                                <View style={{ flex: 0.2, justifyContent: 'flex-end' }}>
                                    <Text style={{ fontSize: height / 81, fontFamily: 'Poppins-Regular', color: '#555555', textAlign: 'center' }}>
                                        Eguchi Wooden Mobile Baby
                                        Bird Pelican for Baby & Kids
                                    </Text>
                                </View>
                                <View style={{ flex: 0.15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#FC8181', }}>₹10,999.00</Text>
                                    <Text style={{ fontSize: height / 101, fontFamily: 'Poppins-Medium', color: '#8A8D9F', textDecorationLine: 'line-through', marginLeft: 5, marginRight: 5 }}>₹13,748</Text>
                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#FC8181' }}>25% OFF</Text>

                                </View>
                            </View>
                            <View style={{
                                width: height / 4.2, height: height / 3.5, backgroundColor: '#FFFFFF', borderRadius: 10, marginHorizontal: 5,
                                shadowColor: '#000',
                                shadowOffset: { width: 0, height: 2 },
                                shadowOpacity: 0.3,
                                shadowRadius: 2,
                                elevation: 2,
                            }}>
                                <View style={{ flex: 0.65, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: '100%', width: '100%', }}
                                        source={require('../../assets/images/toy.png')}
                                    />
                                </View>
                                <View style={{ flex: 0.2, justifyContent: 'flex-end' }}>
                                    <Text style={{ fontSize: height / 81, fontFamily: 'Poppins-Regular', color: '#555555', textAlign: 'center' }}>
                                        Eguchi Wooden Mobile Baby
                                        Bird Pelican for Baby & Kids
                                    </Text>
                                </View>
                                <View style={{ flex: 0.15, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#FC8181', }}>₹10,999.00</Text>
                                    <Text style={{ fontSize: height / 101, fontFamily: 'Poppins-Medium', color: '#8A8D9F', textDecorationLine: 'line-through', marginLeft: 5, marginRight: 5 }}>₹13,748</Text>
                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#FC8181', }}>25% OFF</Text>

                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.container11}>
                    <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 45, fontFamily: 'Poppins-SemiBold', color: '#555555' }}>NEWBIES OF '22</Text>
                    </View>
                    <View style={styles.cont11view2}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <TouchableWithoutFeedback>
                                <View style={styles.cont5view2subview}>
                                    <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ height: '100%', width: '100%', borderRadius: 5 }}
                                            source={require('../../assets/images/sample3.jpg')}
                                        />
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555' }}>Diapers & pants</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={styles.cont5view2subview}>
                                    <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ height: '100%', width: '100%', borderRadius: 5 }}
                                            source={require('../../assets/images/sample6.jpg')}
                                        />
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555' }}>Shampoos</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={styles.cont5view2subview}>
                                    <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ height: '100%', width: '100%', borderRadius: 5 }}
                                            source={require('../../assets/images/sample7.jpg')}
                                        />
                                    </View>
                                    <View style={{ flex: 0.2, alignItems: 'center', justifyContent: 'center' }}>
                                        <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555' }}>Tableware</Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                            <TouchableWithoutFeedback>
                                <View style={styles.cont5view2subview}>
                                    <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
                                        <Image style={{ height: '100%', width: '100%', borderRadius: 5 }}
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
                <View style={styles.container12}>
                    <View style={styles.cont12view1}>
                        <Text style={{ fontSize: height / 31.1, fontFamily: 'Poppins-Medium', color: '#555555' }}>
                            MOST LOVED BRANDS
                        </Text>
                    </View>
                    <View style={{ flex: 0.8, justifyContent: 'center' }}>
                        <View style={styles.cont6view2}>
                            <Image style={{ height: height / 18, width: height / 7.7 }}
                                source={require('../../assets/images/brand9.png')}
                            />
                            <Image style={{ height: height / 18, width: height / 7.7 }}
                                source={require('../../assets/images/brand8.png')}
                            />
                            <Image style={{ height: height / 18, width: height / 7.7 }}
                                source={require('../../assets/images/brand7.png')}
                            />
                        </View>
                        <View style={styles.cont6view3}>
                            <Image style={{ height: height / 18, width: height / 7.7 }}
                                source={require('../../assets/images/brand2.png')}
                            />
                            <Image style={{ height: height / 18, width: height / 7.7 }}
                                source={require('../../assets/images/brand6.png')}
                            />
                            <Image style={{ height: height / 18, width: height / 7.7 }}
                                source={require('../../assets/images/bombonature.jpg')}
                            />
                        </View>
                        <View style={styles.cont6view4}>
                            <Image style={{ height: height / 18, width: height / 7.7 }}
                                source={require('../../assets/images/Bamboo-Fibre.png')}
                            />
                            <Image style={{ height: height / 18, width: height / 7.7 }}
                                source={require('../../assets/images/brand3.png')}
                            />
                            <Image style={{ height: height / 18, width: height / 7.7 }}
                                source={require('../../assets/images/Bibado-Logo.png')}
                            />
                        </View>
                        <View style={styles.cont6view5}>
                            <Image style={{ height: height / 18, width: height / 7.7 }}
                                source={require('../../assets/images/BeeLittle.png')}
                            />
                            <Image style={{ height: height / 18, width: height / 7.7 }}
                                source={require('../../assets/images/bhoomi.png')}
                            />
                            <Image style={{ height: height / 18, width: height / 7.7 }}
                                source={require('../../assets/images/brand5.png')}
                            />
                        </View>
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
        height: height / 100 * 6, justifyContent: 'center', marginHorizontal: 15, marginTop: 10,
    },
    buttonLeft: {
        width: height / 100 * 5
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height / 40,
    },
    container2: {
        height: height / 100 * 8,
        flexDirection: 'row'
    },
    cont2v1: {
        flex: 0.75, justifyContent: 'center', alignItems: 'flex-end'
    },
    cont2v2: {
        flex: 0.25, justifyContent: 'center', alignItems: 'center'
    },
    cont2text: {
        fontSize: height / 37.4, fontFamily: 'Poppins-SemiBold', color: '#1C2340', marginRight: 50
    },
    filter: {
        color: '#ffffff',
        fontSize: height / 40,
        textAlign: 'center',
        margin: 'auto'
    },
    container3: {
        height: height / 3, marginTop: 10,
    },
    container4: {
        height: height / 100 * 6, justifyContent: 'center', marginHorizontal: 15
    },
    cont4v1: {
        flex: 0.17
    },

    listBtn: {
        flex: 1,
        padding: height / 110,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    listText: {
        color: '#8A8D9F',
        fontSize: height / 45,
        fontFamily: 'Poppins-Regular'
    },
    rightIcon: {
        color: '#E0E0E0',
        fontSize: height / 51
    },
    sublistBtn: {
        flex: 1,
        flexDirection: 'row',
    },
    sublistText: {
        color: '#777A8D',
        margin: 5,
        fontSize: height / 45,
        fontFamily: 'Poppins-Regular'
    },
    container6: {
        height: height / 4.5, justifyContent: 'center', alignItems: 'center', marginTop: 5,
    },
    container7: {
        height: height / 100 * 6, alignItems: 'center', justifyContent: 'flex-end'
    },
    cont7text: {
        fontSize: height / 34, fontFamily: 'Poppins-Medium', color: '#555555'
    },
    container8: {
        height: height / 4, justifyContent: 'center', alignItems: 'center', marginTop: 5
    },
    container9: {
        height: height / 2.5, marginTop: 10
    },
    cont9view1: {
        flex: 0.1, alignItems: 'center', justifyContent: 'center'
    },
    cont9view2: {
        flex: 0.8, marginHorizontal: 5
    },
    container10: {
        height: height / 3.1, justifyContent: 'center', marginTop: 5, backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    cont11view2subview: {
        width: height / 6.68, height: height / 5.14, backgroundColor: 'white', marginHorizontal: 5, borderRadius: 10
    },
    cont11view2: {
        flex: 0.8,
    },
    cont5view2subview: {
        width: height / 6.4, height: height / 4.4, backgroundColor: '#FFFFFF', borderRadius: 10, marginLeft: 10
    },
    container11: {
        height: height / 3.3, justifyContent: 'center', marginTop: 10, backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        elevation: 2,
    },
    container12: {
        height: height / 2.3, marginTop: 10
    },
    cont12view1: {
        flex: 0.15, justifyContent: 'center', alignItems: 'center',
    },

    centeredView: {
        flex: 1,
        alignItems: "center",
    },
    cont6view2: {
        flex: 0.25, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
    },
    cont6view3: {
        flex: 0.25, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
    },
    cont6view4: {
        flex: 0.25, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
    },
    cont6view5: {
        flex: 0.25, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center'
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
export default Girdscreen;


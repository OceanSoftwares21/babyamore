import React from 'react';
import {
    Text, View, StyleSheet, SafeAreaView, Dimensions, TouchableOpacity,
    ScrollView, Image, FlatList, LogBox,
} from 'react-native';
import colors from '../../color/commoncolor';
import Icon from 'react-native-vector-icons/FontAwesome';
const { height, width } = Dimensions.get('window');
import axios from 'axios';
import { Icons } from '../../color/icon';
import Base_url from '../../baseurl/baseurl';
import { Pagination } from 'react-native-snap-carousel';
import Shoppingparentingbutton from '../../components/shoppingparentingbutton';

const Detailscreen = ({ navigation }) => {
    const [Productdata, setproduct] = React.useState([])
    const [counter, setCounter] = React.useState(0);
    const [paginationvalue, setValue] = React.useState();
    const [list, setList] = React.useState([]);
    const [shortdes, setDes] = React.useState('')
    const flatListRef = React.useRef();
    React.useEffect(() => {
        setList(Data1.map(s => ({ ...s, isopen: false })))
        setValue(0)
        LogBox.ignoreLogs(["VirtualizedLists should never be nested"])
    }, [])
    React.useEffect(() => {
        axios.get(Base_url + '/Products_Admin/62b9906543ed52c257c436ad')
            .then(res => {
                let val = [res.data]
                setproduct(
                    val.map(e => ({ ...e, isopen: false }))
                )
            })
            .catch(err => console.log(err))
    }, [])
    const incrementCounter = () => setCounter(counter + 1);
    let decrementCounter = () => setCounter(counter - 1);
    if (counter <= 0) {
        decrementCounter = () => setCounter(0);
    }
    const Datas = [
        {
            title: 'Welcome to Baby Amore',
            description: `You've unlocked your 1st ever offer on Baby Amore! Order today & avail Flat 30% OFF on Fashion, Diapers, Baby Gear,Nursery, Baby Care, Health & Safety, Toys & More>`,
            time: '2 hours ago'
        },
        {
            title: 'Booking Cancel',
            description: `You've unlocked your 1st ever offer on Baby Amore! Order today & avail Flat 30% OFF on Fashion, Diapers, Baby Gear,Nursery, Baby Care, Health & Safety, Toys & More>`,
            time: '2 hours ago'
        },

    ]
    const Data1 = [
        {
            id: '1', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/gird.jpg')
        },
        {
            id: '2', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/feeding-Bottle.png')
        },
        {
            id: '3', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/Oralcare.png')
        },
        {
            id: '4', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/Lotion.png')
        },

    ]
    const data = [
        { id: 1, img: require('../../assets/images/gird.jpg') },
        { id: 2, img: require('../../assets/images/feeding-Bottle.png') },
    ]
    const click1 = (item) => {
        setList(
            list.map(e => e.id === item.id ? ({ ...e, isopen: !e.isopen }) : (e))
        )
    }
    const favoritefunction = () => {
        setproduct(
            Productdata.map(e => ({ ...e, isopen: !e.isopen }))
        )
    }
    const pagination = (length) => {
        return (
            <Pagination
                dotsLength={length}
                activeDotIndex={paginationvalue}
                containerStyle={{ height: 5, width: 10, }}
                dotStyle={{
                    width: height / 80,
                    height: height / 80,
                    borderRadius: 10,
                    marginHorizontal: 2,
                    backgroundColor: colors.commoncolor
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
    const renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1, width: width - 15, justifyContent: 'center',  position: 'relative' }}>
                <Image style={{ width: '95%', height: '98%', resizeMode: 'contain' }}
                    source={{ uri: `http://54.255.246.233:5000/Products_Admin_view/${item}` }}
                />
            </View>
        )
    }
    const onViewRef = React.useRef((viewableItems) => {
        let activeind = viewableItems.changed.map((e) => { return e.index })
        setValue(parseInt(activeind))
    })
    const viewConfigRef = React.useRef({ viewAreaCoveragePercentThreshold: 50 })
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={{ flex: 0.9 }}>
                <ScrollView style={{ flexGrow: 1 }}
                    nestedScrollEnabled={true}>
                    {/*shopping/parenting button view*/}
                    <Shoppingparentingbutton props={navigation}/>
                    {/* product view */}
                    {Productdata.map((item, i) => {
                        return (
                            <View key={i} style={styles.container2}>
                                <View style={{ flex: 0.7 }}>
                                    <View style={{ flex: 0.85 }}>
                                        <FlatList
                                            onViewableItemsChanged={onViewRef.current}
                                            viewabilityConfig={viewConfigRef.current}
                                            ref={flatListRef}
                                            horizontal={true}
                                            data={item.Galleryimages}
                                            renderItem={renderItem}
                                            keyExtractor={(item) => {
                                                return item
                                            }}
                                            showsHorizontalScrollIndicator={false}
                                            pagingEnabled={true}
                                        />
                                    </View>
                                    <View style={{ flex: 0.15, justifyContent: 'center', alignItems: 'center' }}>
                                        {pagination(item.Galleryimages.length)}
                                    </View>
                                </View>
                                <View style={{ flex: 0.3, marginHorizontal: 5 }}>
                                    <View style={{ flex: 0.35, justifyContent: 'flex-end', marginHorizontal: 10 }}>
                                        <Text style={{ fontSize: height / 52, fontFamily: 'Poppins-SemiBold', color: '#0C0B52' }}>{item.ProductName}</Text>
                                    </View>
                                    <View style={{ flex: 0.35, flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 10, alignItems: 'center' }}>
                                        <Text style={{ fontSize: height / 40, fontWeight: 'bold', color: '#FC8181' }}>₹{item.SalePrice}</Text>
                                        <TouchableOpacity onPress={() => { favoritefunction() }}>
                                            {item.isopen ? <Icon style={{ color: colors.commoncolor, fontSize: height / 40 }} name="heart" /> :
                                                <Icon style={{ fontSize: height / 40, color: '#58668c' }} name="heart-o" />}
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 0.3, marginHorizontal: 10 }}>
                                        <Text style={{ fontSize: height / 54, fontFamily: 'POppins-Regular', color: '#8A8D9F' }}>MRP: <Text style={{ fontSize: 16, textDecorationLine: 'line-through', fontFamily: 'POppins-Regular' }}>₹{item.RegularPrice}</Text><Text style={{ fontSize: 16, color: '#FC8181', fontFamily: 'POppins-Regular' }}> {item.OfferDiscount}% OFF</Text></Text>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                    <View style={styles.container3}>
                        <View style={styles.cont3view1}>
                            <View style={styles.cont3view1subview1}>
                                <Text style={{ fontSize: height / 58, textAlign: 'left', fontFamily: 'Poppins-Regular', color: '#1C2340' }}>Bambo Nature Biodegradable wet wipes are a must-have for every baby changing table,
                                    <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: colors.commoncolor, }}>Seemore</Text>
                                </Text>
                            </View>
                            <View style={styles.cont3view1subview2}>
                                <View style={{ flex: 0.4, justifyContent: 'center', marginHorizontal: 10 }}>
                                    <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-Medium', color: '#8A8D9F' }}>Viewall products under:<Text style={{ fontSize: height / 54, fontFamily: 'Poppins-SemiBold', color: colors.commoncolor }}>Bombo Nature</Text></Text>
                                </View>
                                <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'flex-end' }}>
                                    <Image style={{ height: height / 100 * 5, width: height / 100 * 10, marginRight: 60 }}
                                        source={require('../../assets/images/bombonature.jpg')}
                                    />
                                </View>
                            </View>
                        </View>
                    </View>
                    {/* product details view */}
                    <View style={{ backgroundColor: '#FFFFFF', marginTop: 10, elevation: 3, marginHorizontal: 10, borderRadius: 10 }}>
                        <View style={{ flex: 0.2, marginHorizontal: 10, justifyContent: 'center', marginTop: 10 }}>
                            <Text style={{ fontSize: height / 48, fontFamily: 'Poppins-SemiBold', color: '#0C0B52' }}>Product Details</Text>
                        </View>
                        <View style={{ flex: 0.6, marginTop: 10, marginHorizontal: 10, justifyContent: 'center' }}>
                            {(() => {
                                let des = Productdata.map((e) => { return e.ShortDescription })
                                // console.log(des.toString());
                                const regex2 = /(<([^>]+)>)/ig;
                                const result2 = des.toString().replace(regex2, '');
                                return <Text style={{ fontSize: height / 58, textAlign: 'left', fontFamily: 'Poppins-Regular', color: '#1C2340' }}>{result2}</Text>
                            })()}
                        </View>
                        <TouchableOpacity onPress={() => navigation.navigate('Childstack',{screen:'Tabscreen'})}
                            style={{ flex: 0.2, justifyContent: 'center', marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, marginBottom: 10 }}>
                            <Text style={{ fontSize: height / 48, fontFamily: 'Poppins-SemiBold', color: '#0C0B52' }}>All Details</Text>
                            <Icons.Entypo size={height / 40} name='chevron-right' />
                        </TouchableOpacity>
                    </View>
                    {/* related product view */}
                    <View style={styles.container6}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', marginHorizontal: 15, marginTop: 10 }}>
                            <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-SemiBold', color: '#555555' }}>RELATED PRODUCTS</Text>
                            <TouchableOpacity>
                                <Text style={{ textDecorationLine: 'underline', fontSize: height / 62, color: '#FC8181', fontFamily: 'Poppins-Regular' }}>See All</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginBottom: 10 }}>
                            <ScrollView horizontal={true}>
                                {list.map((item, i) => {
                                    return (
                                        <TouchableOpacity key={i} style={{ backgroundColor: 'white', marginLeft: 10, height: height / 3.3, width: height / 4.6, marginTop: 10, borderWidth: 1, borderColor: '#e4e6e7', borderRadius: 5 }} >
                                            <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                                                <Image style={{ width: '98%', height: '98%', borderRadius: 3, resizeMode: 'stretch' }}
                                                    source={item.img}
                                                />
                                                <TouchableOpacity
                                                    style={{
                                                        height: height / 29, width: height / 29, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 50,
                                                        position: 'absolute', right: width / 80, bottom: height / -66, borderWidth: 0.8, borderColor: '#BFC9CA',
                                                    }}
                                                    onPress={() => { click1(item) }}>
                                                    {item.isopen ? <Icon style={[styles.cardTitleIcon, { color: colors.commoncolor }]} name="heart" /> :
                                                        <Icon style={[styles.cardTitleIcon, { color: '#58668c' }]} name="heart-o" />}
                                                </TouchableOpacity>
                                            </View>
                                            <View style={{ flex: 0.4, }}>
                                                <View style={{ flex: 0.5, justifyContent: 'flex-end', alignItems: 'center', marginHorizontal: 5, }}>
                                                    <Text style={{ fontSize: height / 74.8, fontFamily: 'Poppins-Medium', color: '#555555', textAlign: 'center' }}>{item.title}</Text>
                                                </View>
                                                <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#FF1950', }}>{item.rate}</Text>
                                                </View>
                                                <View style={{ position: 'absolute', bottom: 5, right: -6 }}>
                                                    <TouchableOpacity style={{
                                                        height: height / 30, width: height / 30, backgroundColor: colors.commoncolor, borderRadius: 50, marginHorizontal: 10,
                                                        justifyContent: 'center', alignItems: 'center'
                                                    }}>
                                                        <Icons.Feather style={{ fontSize: height / 58, color: 'white' }} name="shopping-cart" />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </TouchableOpacity>
                                    )
                                })}
                            </ScrollView>
                        </View>
                    </View>
                    <View style={{ height: height / 100 * 2 }}></View>
                </ScrollView>
            </View>
            {/* add to cart button view */}
            <View style={{ flex: 0.1, backgroundColor: 'white', borderWidth: 0.5, borderColor: '#BFC9CA', }}>
                <View style={styles.container4}>
                    <View style={styles.cont4v1}>
                        <View style={{ flex: 0.32, justifyContent: 'center', alignItems: 'center', opacity: 0.6 }}>
                            <TouchableOpacity onPress={() => decrementCounter()}
                                style={{
                                    height: height / 18.7, width: height / 18.7, backgroundColor: '#fedcdc', borderRadius: height / 50,
                                    justifyContent: 'center', alignItems: 'center'
                                }}>
                                <Icons.AntDesign style={{ fontSize: height / 40, color: '#FE2121' }} name="minus" />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.32, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{
                                height: height / 18.7, width: height / 13.7, backgroundColor: '#e4e4e7', borderRadius: 10,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Text style={{ fontSize: height / 40, fontWeight: 'bold' }}>{counter}</Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.32, justifyContent: 'center', alignItems: 'center' }}>
                            <TouchableOpacity onPress={() => incrementCounter()}
                                style={{
                                    height: height / 18.7, width: height / 18.7, backgroundColor: '#fedcdc', borderRadius: height / 50,
                                    justifyContent: 'center', alignItems: 'center', opacity: 5
                                }}>
                                <Icons.AntDesign style={{ fontSize: height / 40, color: '#FC8181' }} name="plus" />
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cont4v2}>
                        <TouchableOpacity style={{
                            height: height / 16, width: height / 6, backgroundColor: colors.commoncolor, marginHorizontal: 15,
                            borderRadius: 5, justifyContent: 'center', alignItems: 'center'
                        }} onPress={() => navigation.navigate('Bottomtab',{screen:'Cartscreen'})}>
                            <Text style={{ fontSize: height / 52, fontFamily: 'Poppins-Medium', color: 'white' }}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: colors.background
    },
    container1: {
        height: height / 100 * 6, justifyContent: 'center', marginHorizontal: 15, marginTop: 10,
    },
    container2: {
        height: height / 100 * 55, marginHorizontal: 10, backgroundColor: 'white', borderRadius: 15,
        marginTop: 10, elevation: 3
    },
    cardTitleIcon: {
        fontFamily: 'Poppins-Bold', fontSize: height / 51,
    },
    activeTabTextColor: {
        backgroundColor: colors.commoncolor
    },
    tabTextColor: {
        backgroundColor: 'red'
    },
    tabtext: {
        fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F'
    },
    focusedtext: {
        color: colors.commoncolor, fontSize: height / 58, fontFamily: 'Poppins-SemiBold'
    },
    container3: {
        height: height / 100 * 25, justifyContent: 'center'
    },
    cont3view1: {
        flex: 0.9, backgroundColor: 'white', marginHorizontal: 10, borderRadius: 10, elevation: 3
    },
    cont3view1subview1: {
        flex: 0.5, borderBottomWidth: 0.2, justifyContent: 'center',
        marginHorizontal: 10,
    },
    cont3view1subview2: {
        flex: 0.5,
    },
    container4: {
        flexDirection: 'row', flex: 1
    },
    cont4v1: {
        flex: 0.55, flexDirection: 'row', justifyContent: 'space-evenly',
    },
    cont4v2: {
        flex: 0.45, justifyContent: 'center', alignItems: 'center'
    },
    container5view1: {
        height: height / 0.5,
        justifyContent: 'center'
    },
    container5view2: {
        height: height / 100 * 30,
        justifyContent: 'center'
    },
    container5view3: {
        height: height / 2.2,
        justifyContent: 'center'
    },
    container6: {
        backgroundColor: '#F4F6F7', borderRadius: 5, marginHorizontal: 10,
        marginTop: 10
    },
    cont6view1: {
        flex: 0.5, backgroundColor: 'white', borderRadius: 10
    },
    cont6view2: {
        flex: 0.5
    },
    container5view4: {
        height: height / 100 * 50, justifyContent: 'center'
    },
    buttonLeft: {
        width: height / 100 * 5
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height / 40,
        margin: 'auto',
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

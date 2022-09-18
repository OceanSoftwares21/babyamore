import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image } from 'react-native';
import Colors from '../../color/commoncolor';
import Carousel from 'react-native-snap-carousel';
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window')
const Offerscreen = ({ navigation }) => {
    const [activeIndex, setactive] = React.useState(0);
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
    const SLIDER_WIDTH2 = Dimensions.get('window').width + 85;
    const ITEM_WIDTH2 = Math.round(SLIDER_WIDTH2 * 0.6);
    const [val, setval] = React.useState(false)
    const _renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 0.99, backgroundColor: 'white', borderRadius: 10, elevation: 2 }}>
                <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: '90%', height: '95%' }}
                        source={require('../../assets/images/waterwipes.png')}
                    />
                </View>
                <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: height / 40.7, fontFamily: 'Poppins-Medium', color: '#555555' }}>Water Wipes</Text>
                    <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Medium', color: '#FF1950' }}>₹399 ₹2999</Text>
                </View>
                <TouchableOpacity
                    style={{
                        height: height / 29, width: height / 29, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 50,
                        position: 'absolute', right: 10, top: 0, elevation: 3
                    }}
                    onPress={() => setval(!val)}>
                    {val ? <Icons.FontAwesome style={[styles.cardTitleIcon, { color: Colors.commoncolor }]} name="heart" /> :
                        <Icons.FontAwesome style={[styles.cardTitleIcon, { color: '#58668c' }]} name="heart-o" />}
                </TouchableOpacity>
            </View>
        );
    }
    const Data = [
        {
            id: '1', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            description: `*Made with 100% organics bamboo pulp core
*Extremely light weight and velvety soft`,
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/grid2_1.png')
        },
        {
            id: '2', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            description: `*Made with 100% organics bamboo pulp core
*Extremely light weight and velvety soft`,
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/grid2_2.png')
        },
        {
            id: '3', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            description: `*Made with 100% organics bamboo pulp core
*Extremely light weight and velvety soft`,
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/grid2_1.png')
        },
        {
            id: '4', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            description: `*Made with 100% organics bamboo pulp core
 *Extremely light weight and velvety soft`,
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/grid2_2.png')
        },
        {
            id: '5', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            description: `*Made with 100% organics bamboo pulp core
  *Extremely light weight and velvety soft`,
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/grid2_1.png')
        },
        {
            id: '6', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            description: `*Made with 100% organics bamboo pulp core
*Extremely light weight and velvety soft`,
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/grid2_2.png')
        },
    ]
    var length = Data.length;
    const [list, setList] = React.useState([])
    React.useEffect(() => {
        setList(Data.map(s => ({ ...s, isopen: false })))
    }, [])
    const click1 = (item) => {
        setList(
            list.map(e => e.id === item.id ? ({ ...e, isopen: !e.isopen }) : (e))
        )
    }
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView style={{ flex: 1 }}>
                <View style={styles.container1}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Toptab', { screen: 'Home1' }),
                            console.log('pressss');
                    }}
                        style={{
                            height: height / 17, width: width / 2, backgroundColor: '#EEEEEE', borderTopRightRadius: height / 10, borderBottomRightRadius: height / 10,
                            position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center'
                        }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F', }}>
                            PARENTING
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}
                        style={{
                            height: height / 17, width: width / 2, backgroundColor: Colors.commoncolor, borderTopLeftRadius: height / 10, borderBottomLeftRadius: height / 10,
                            justifyContent: 'center', alignItems: 'center', borderTopRightRadius: height / 10, borderBottomRightRadius: height / 10,
                        }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', }}>
                            SHOPPING
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={{ height: height / 100 * 8, flexDirection: 'row', marginTop: 5 }}>
                    <View style={{ flex: 0.35, justifyContent: 'center', alignItems: 'center', }}>
                        <Text style={{ width: '100%', height: 2, borderStyle: 'solid', borderWidth: 1, borderColor: '#B2BABB' }}></Text>
                    </View>
                    <View style={{ flex: 0.3, alignItems: 'center', justifyContent: 'center', }}>
                        <View style={{
                            height: height / 17, width: height / 6.1, backgroundColor: 'white', borderWidth: 1, borderColor: '#8A8D9F'
                            , borderRadius: 8, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Text style={{ fontSize: height / 52, fontFamily: 'Poppins-SemiBold', color: '#555555' }}>Offers</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.35, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ width: '100%', height: 2, borderStyle: 'solid', borderWidth: 1, borderColor: '#B2BABB' }}></Text>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={styles.cont3mainview}>
                        <Carousel
                            loop={true}
                            layout={"default"}
                            data={carouselItems}
                            sliderWidth={SLIDER_WIDTH2}
                            itemWidth={ITEM_WIDTH2}
                            renderItem={_renderItem}
                            onSnapToItem={index => setactive({ index })} />
                    </View>
                </View>
                <View style={{ height: height / 100 * 8, flexDirection: 'row', marginTop: 15 }}>
                    <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ width: '100%', height: 2, borderStyle: 'solid', borderWidth: 1, borderColor: '#B2BABB' }}></Text>
                    </View>
                    <View style={{ flex: 0.4, alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{
                            height: height / 16, width: height / 4.4, backgroundColor: 'white', borderWidth: 1, borderColor: '#8A8D9F', borderRadius: 8, justifyContent: 'center', alignItems: 'center'
                        }}>
                            <Text style={{ fontSize: height / 52, fontFamily: 'Poppins-SemiBold', color: '#555555' }}>Products on Sale</Text>
                        </View>
                    </View>
                    <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ width: '100%', height: 2, borderStyle: 'solid', borderWidth: 1, borderColor: '#B2BABB' }}></Text>
                    </View>
                </View>
                <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly' }}>
                    {list.slice(0, 4).map((item, i) => {
                        return (
                            <View key={i} style={{}}>
                                <View style={{ width: width / 2.2, height: height / 3, backgroundColor: 'rgb(240, 240, 243)', borderRadius: 5, marginTop: 10, elevation: 3 }}>
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
                                            {item.isopen ? <Icons.FontAwesome style={[styles.cardTitleIcon, { color: Colors.commoncolor }]} name="heart" /> :
                                                <Icons.FontAwesome style={[styles.cardTitleIcon, { color: '#58668c' }]} name="heart-o" />}
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 0.4, }}>
                                        <View style={{ flex: 0.5, justifyContent: 'flex-end', alignItems: 'center', marginHorizontal: 5, }}>
                                            <Text style={{ fontSize: height / 74.8, fontFamily: 'Poppins-Medium', color: '#555555', textAlign: 'center' }}>{item.title}</Text>
                                        </View>
                                        <View style={{ flex: 0.5, justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#FF1950', }}>{item.rate}</Text>
                                        </View>
                                        <View style={{ position: 'absolute', bottom: 10, right: 5 }}>
                                            <TouchableOpacity style={{
                                                height: height / 30, width: height / 30, backgroundColor: Colors.commoncolor, borderRadius: 50, marginHorizontal: 10,
                                                justifyContent: 'center', alignItems: 'center'
                                            }}>
                                                <Icons.Feather style={{ fontSize: height / 58, color: 'white' }} name="shopping-cart" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
                <View style={styles.container5}>
                    <View style={styles.cont5view1}>
                        <Text style={{ fontSize: height / 45, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Filter By</Text>
                        <Text style={{ fontSize: height / 45, fontFamily: 'Poppins-Medium', color: '#555555' }}>SubCategory</Text>
                    </View>
                    <View style={styles.cont5view2}>
                        <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center' }}>
                            <TouchableOpacity style={{ width: height / 100 * 10, height: height / 100 * 5, borderColor: '#8A8D9F', borderWidth: 1, backgroundColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => console.log('Pressed')}>
                                <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Category</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: height / 100 * 15, height: height / 100 * 5, borderColor: '#8A8D9F', borderWidth: 1, backgroundColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => console.log('Pressed')}>
                                <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Category</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={{ flex: 0.5, flexDirection: 'row', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity style={{ width: height / 100 * 15, height: height / 100 * 5, borderColor: '#8A8D9F', borderWidth: 1, backgroundColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => console.log('Pressed')}>
                                <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Category</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ width: height / 100 * 10, height: height / 100 * 5, borderColor: '#8A8D9F', borderWidth: 1, backgroundColor: 'white', borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}
                                onPress={() => console.log('Pressed')}>
                                <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Category</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly', }}>
                    {list.slice(4, length).map((item, i) => {
                        return (
                            <View key={i} style={{}}>
                                <View style={{ width: width / 2.2, height: height / 3, backgroundColor: 'rgb(240, 240, 243)', borderRadius: 5, marginTop: 10, elevation: 3 }}>
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
                                            {item.isopen ? <Icons.FontAwesome style={[styles.cardTitleIcon, { color: Colors.commoncolor }]} name="heart" /> :
                                                <Icons.FontAwesome style={[styles.cardTitleIcon, { color: '#58668c' }]} name="heart-o" />}
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 0.4, }}>
                                        <View style={{ flex: 0.5, justifyContent: 'flex-end', alignItems: 'center', marginHorizontal: 5, }}>
                                            <Text style={{ fontSize: height / 74.8, fontFamily: 'Poppins-Medium', color: '#555555', textAlign: 'center' }}>{item.title}</Text>
                                        </View>
                                        <View style={{ flex: 0.5, justifyContent: 'flex-start', alignItems: 'center' }}>
                                            <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#FF1950', }}>{item.rate}</Text>
                                        </View>
                                        <View style={{ position: 'absolute', bottom: 10, right: 5 }}>
                                            <TouchableOpacity style={{
                                                height: height / 30, width: height / 30, backgroundColor: Colors.commoncolor, borderRadius: 50, marginHorizontal: 10,
                                                justifyContent: 'center', alignItems: 'center'
                                            }}>
                                                <Icons.Feather style={{ fontSize: height / 58, color: 'white' }} name="shopping-cart" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        )
                    })}
                </View>
                <View style={{ height: height / 100 * 2 }}></View>
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
    container1: {
        height: height / 100 * 6, justifyContent: 'center', marginHorizontal: 15, marginTop: 10,
    },
    container2: {
        height: height / 100 * 8,
        alignItems: 'center',
    },
    container3: {
        height: height / 100 * 28, justifyContent: 'center',
    },
    cont3mainview: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    containerr3: {
        height: height / 100 * 35, justifyContent: 'center'
    },
    cont3view1: {
        height: '95%', backgroundColor: 'white', marginHorizontal: 15, flexDirection: 'row',
        borderRadius: 10
    },
    cardTitleIcon: {
        fontWeight: 'bold',
        fontSize: height / 50,
    },
    container4: {
        height: height / 100 * 35, justifyContent: 'center'
    },
    container5: {
        height: height / 100 * 15, flexDirection: 'row', marginTop: 10
    },
    cont5view1: {
        flex: 0.4, justifyContent: 'center', alignItems: 'center'
    },
    cont5view2: {
        flex: 0.6
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
export default Offerscreen;

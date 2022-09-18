import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import Colors from '../../color/commoncolor';
import Carousel from 'react-native-snap-carousel';
import { ScrollView } from 'react-native-gesture-handler';
import PagerView from 'react-native-pager-view';
const { height, width } = Dimensions.get('window');

const Paymentscreen = (props) => {
    const ref = React.useRef(PagerView);
    const [activeIndex, setactive] = React.useState(0);
    const [checkposition, setPosition] = React.useState(0)
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
    const _renderItem = ({ item, index }) => {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', }}>
                <TouchableWithoutFeedback onPress={() => props.navigation.navigate('Blogdetailscreen')}>
                    {/* <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}> */}
                    <Image style={{ height: '100%', width: '100%', borderRadius: 10, resizeMode: 'contain' }}
                        source={require('../../assets/images/new.png')}
                    />
                    {/* </View> */}
                </TouchableWithoutFeedback>
            </View>
        );
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
    const Data = [
        {
            id: 0, title: 'Why You Should Make the Switch to OpenCup Drinking for Your Baby',
            date: '1 Feb', description: 'At six months, several changes occur in a baby. They start teething and are gradually..',
            img: require('../../assets/images/blog1.png')
        },
        {
            id: 1, title: 'How To Choose A Feeding Bottle For Your Baby',
            date: '2 Feb', description: 'At six months, several changes occur in a baby. They start teething and are gradually..',
            img: require('../../assets/images/blog2.png')
        },
        {
            id: 2, title: 'Why You Should Make the Switch to OpenCup Drinking for Your Baby',
            date: '3 Feb', description: 'At six months, several changes occur in a baby. They start teething and are gradually..',
            img: require('../../assets/images/blog1.png')
        },
        {
            id: 3, title: 'How to boost immunity in children during winter?',
            date: '4 Feb', description: 'At six months, several changes occur in a baby. They start teething and are gradually..',
            img: require('../../assets/images/blog3.png')
        },
        {
            id: 4, title: 'Five Tips For Feeding Children  Between Two and Five Years',
            date: '5 Feb', description: 'At six months, several changes occur in a baby. They start teething and are gradually..',
            img: require('../../assets/images/blog1.png')
        },
        {
            id: 5, title: 'Why You Should Make the Switch to OpenCup Drinking for Your Baby',
            date: '6 Feb', description: 'At six months, several changes occur in a baby. They start teething and are gradually..',
            img: require('../../assets/images/blog2.png')
        },
        {
            id: 6, title: 'How To Choose A Feeding Bottle For Your Baby',
            date: '7 Feb', description: 'At six months, several changes occur in a baby. They start teething and are gradually..',
            img: require('../../assets/images/blog1.png')
        },
        {
            id: 7, title: 'Why You Should Make the Switch to OpenCup Drinking for Your Baby',
            date: '8 Feb', description: 'At six months, several changes occur in a baby. They start teething and are gradually..',
            img: require('../../assets/images/blog3.png')
        },
        {
            id: 8, title: 'Why You Should Make the Switch to OpenCup Drinking for Your Baby',
            date: '9 Feb', description: 'At six months, several changes occur in a baby. They start teething and are gradually..',
            img: require('../../assets/images/blog1.png')
        },
        {
            id: 9, title: 'Why You Should Make the Switch to OpenCup Drinking for Your Baby',
            date: '10 Feb', description: 'At six months, several changes occur in a baby. They start teething and are gradually..',
            img: require('../../assets/images/blog2.png')
        },

        {
            id: 10, title: 'Why You Should Make the Switch to OpenCup Drinking for Your Baby',
            date: '11 Feb', description: 'At six months, several changes occur in a baby. They start teething and are gradually..',
            img: require('../../assets/images/blog1.png')
        },
        {
            id: 11, title: 'Why You Should Make the Switch to OpenCup Drinking for Your Baby',
            date: '12 Feb', description: 'At six months, several changes occur in a baby. They start teething and are gradually..',
            img: require('../../assets/images/blog3.png')
        },
    ]
    var value = -(Math.floor(-(Data.length / 5)));
    const [index, setIndex] = React.useState(0);
    const SLIDER_WIDTH = width;
    const ITEM_WIDTH = width - 10;
    const onPageScroll = ({ nativeEvent }) => {
        setPosition(nativeEvent.position)
    }
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={{
                height: height / 100 * 5,
                justifyContent: 'center', alignItems: 'center', backgroundColor: 'white'
            }}>
                <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>Blog</Text>
            </View>
            <View style={{ height: height / 3.5, justifyContent: 'center', alignItems: 'center', marginTop: 5 }}>
                <Carousel
                    layout={"default"}
                    data={carouselItems}
                    sliderWidth={SLIDER_WIDTH}
                    itemWidth={ITEM_WIDTH}
                    renderItem={_renderItem}
                    onSnapToItem={index => setactive({ index })} />
            </View>
            <PagerView style={{ flex: 1 }}
                initialPage={0}
                showPageIndicator={true}
                ref={ref}
                onPageSelected={(eventDate) =>
                    setIndex((eventDate.nativeEvent.position))}
                onPageScroll={onPageScroll}>
                {Data.slice(0, value).map((val, index) => {
                    let keyIndex = (index + 1).toString();
                    return (
                        <View key={keyIndex} style={{}}>
                            <ScrollView style={{ flex: 1 }}>
                                {Data.slice((index * 5), ((index + 1) * 5)).map((val, i) => {
                                    return (
                                        <View key={i} style={{ height: height / 6.5, backgroundColor: 'white', marginTop: 10, flexDirection: 'row', marginHorizontal: 10, borderRadius: 15 }}>
                                            <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center', }}>
                                                <Image style={{ height: '95%', width: '95%', borderRadius: 5 }}
                                                    source={val.img}
                                                />
                                            </View>
                                            <View style={{ flex: 0.6 }}>
                                                <View style={{ flex: 0.2, justifyContent: 'center', marginHorizontal: 5 }}>
                                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#FC8181' }}>{val.date}</Text>
                                                </View>
                                                <View style={{ flex: 0.4, justifyContent: 'center', marginHorizontal: 5 }}>
                                                    <Text style={{ fontSize: height / 74, fontFamily: 'Poppins-Medium', color: '#555555' }}>{val.title}</Text>
                                                </View>
                                                <View style={{ flex: 0.4, marginHorizontal: 5 }}>
                                                    <Text style={{ fontSize: height / 81, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>{val.description}</Text>
                                                </View>
                                            </View>
                                        </View>
                                    )
                                })}
                                <View style={{ height: height / 100 * 2 }}></View>
                            </ScrollView>
                        </View>
                    )
                })}
            </PagerView>
            <View style={{ height: height / 100 * 5, flexDirection: 'row', alignItems: "center", justifyContent: 'center', marginHorizontal: width / 4, }}>
                {Data.slice(0, value).map((e, i) => {
                    return (
                        <View key={i} style={{ width: height / 35, height: height / 35, marginLeft: 5, marginRight: 5 }}>
                            <TouchableOpacity onPress={() => { ref.current.setPage(i) }}
                                style={[checkposition == i ? { flex: 1, backgroundColor: Colors.commoncolor, borderRadius: 50, justifyContent: 'center', alignItems: 'center', }
                                    : { flex: 1, borderRadius: 50, justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderColor: '#8A8D9F' }]}>
                                <Text style={{ fontSize: height / 78, fontFamily: 'Poppins-Bold', color: checkposition == i ? '#FFFFFF' : '#8A8D9F' }}>{i + 1}</Text>
                            </TouchableOpacity>
                        </View>
                    )
                })}
            </View>
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
})
export default Paymentscreen;


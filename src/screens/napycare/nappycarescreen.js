import React from 'react';
import {
    Text, View, SafeAreaView, StyleSheet, ScrollView,
    Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback
} from 'react-native';
import Colors from '../../color/commoncolor';
import Modalview from '../../components/snackbar/snackbar';
import { Icons } from '../../color/icon';
import Shoppingparentingbutton from '../../components/shoppingparentingbutton';

const { height, width } = Dimensions.get('window');
const Nappycarescreen = ({ navigation }) => {
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
    const [checkview, setview] = React.useState(true)
    const Data = [
        {
            id: '1', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            description: `*Made with 100% organics bamboo pulp core
*Extremely light weight and velvety soft`,
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/prd2.jpg')
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
    const Data2 = [
        {
            id: '1', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            description: `*Made with 100% organics bamboo pulp core
*Extremely light weight and velvety soft`,
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/grid_1.png')
        },
        {
            id: '2', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            description: `*Made with 100% organics bamboo pulp core
*Extremely light weight and velvety soft`,
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/gird_2.png')
        },
        {
            id: '3', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            description: `*Made with 100% organics bamboo pulp core
*Extremely light weight and velvety soft`,
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/grid_1.png')
        },
        {
            id: '4', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            description: `*Made with 100% organics bamboo pulp core
 *Extremely light weight and velvety soft`,
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/gird_2.png')
        },
        {
            id: '5', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            description: `*Made with 100% organics bamboo pulp core
*Extremely light weight and velvety soft`,
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/grid_1.png')
        },
        {
            id: '6', title: 'Allter Baby Diaper, Made from OrganicBamboo',
            description: `*Made with 100% organics bamboo pulp core
*Extremely light weight and velvety soft`,
            rate: '₹999.00 – ₹1,099',
            img: require('../../assets/images/gird_2.png')
        },
    ]
    var length = Data.length;
    const handleclick = () => {
        setview(true)
    }
    const handleclick1 = () => {
        setview(false)
    }
    const [list, setList] = React.useState([])
    const [list2, setList2] = React.useState([])
    React.useEffect(() => {
        setList(Data.map(s => ({ ...s, isopen: false })))
        setList2(Data2.map(s => ({ ...s, isopen: false })))
    }, [])
    const click1 = (item) => {
        setList(
            list.map(e => e.id === item.id ? ({ ...e, isopen: !e.isopen }) : (e))
        )
    }
    const click2 = (item) => {
        setList2(
            list2.map(e => e.id === item.id ? ({ ...e, isopen: !e.isopen }) : (e))
        )
    }
    const [data, setData] = React.useState(false)
    const handlepress = () => {
        setData(true)
        var timeoutVariable
        timeoutVariable = setTimeout(() => {
            setData(false)
        }, 2000)
    }
    const handlegetvalue = (event) => {
        setData(event)
    }
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView style={{ flex: 1 }}>
                <Shoppingparentingbutton props={navigation} />
                <View style={styles.container2}>
                    <View style={styles.cont2view1}>
                        <View style={{ flex: 0.7, justifyContent: 'center', alignItems: 'flex-end' }}>
                            <Text style={styles.cont2text}>Nappy Care</Text>
                        </View>
                        <View style={{ flex: 0.3, alignItems: 'center', flexDirection: 'row', justifyContent: 'space-evenly', }}>
                            <Icons.FontAwesome onPress={() => handleclick()}
                                name='th' style={[checkview == true ? styles.icon1 : { fontSize: height / 35, color: '#E0E0E0' }]} />
                            <Icons.FontAwesome onPress={() => handleclick1()}
                                name='th-list' style={[checkview == false ? styles.icon1 : { fontSize: height / 35, color: '#E0E0E0' }]} />
                        </View>
                    </View>
                    <View style={styles.cont2view2}>
                        <TouchableOpacity>
                            <View style={styles.cont2view2subview}>
                                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                    <View style={{ flexDirection: 'row', }}>
                                        <Image style={{ height: height / 65, width: height / 45 }}
                                            source={require('../../assets/images/arrow.png')}
                                        />
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: height / 45, fontFamily: 'Poppins-Medium', color: '#555555' }}>Sort</Text>
                                    </View>
                                </View>
                                <View style={{ flex: 0.5, alignItems: 'flex-start', opacity: 0.7 }}>
                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#8A8D9F' }}>Best Seller</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Childstack', { screen: 'Filterscreen' })}>
                            <View style={styles.cont2view2subview}>
                                <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'flex-end', justifyContent: 'space-evenly' }}>
                                    <Icons.FontAwesome name="filter" size={height / 37} color={Colors.commoncolor} style={{ marginBottom: 5 }} />
                                    <Text style={{ fontSize: height / 45, fontFamily: 'Poppins-Medium', color: '#555555' }}>Filter</Text>
                                </View>
                                <View style={{ flex: 0.5, alignItems: 'flex-start', opacity: 0.7 }}>
                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#8A8D9F' }}>Select</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                {checkview == false ?
                    <>
                        {list2.slice(0, 3).map((item, i) => {
                            return (
                                <TouchableWithoutFeedback key={i} onPress={() => navigation.navigate('Childstack', { screen: 'Detailscreen' })}>
                                    <View style={styles.cont3view1}>
                                        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image style={{ width: '95%', height: '95%', borderRadius: 3, resizeMode: 'contain' }}
                                                source={item.img}
                                            />
                                            <TouchableOpacity onPress={() => click2(item)}
                                                style={{
                                                    position: 'absolute', right: 1, top: 1, height: height / 30, width: height / 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 50,
                                                    borderWidth: 0.8, borderColor: '#BFC9CA',
                                                }}>
                                                {item.isopen ? <Icons.FontAwesome style={[styles.cardTitleIcon, { color: Colors.commoncolor }]} name="heart" /> :
                                                    <Icons.FontAwesome style={[styles.cardTitleIcon, {}]} name="heart-o" />}
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 0.6 }}>
                                            <View style={{ flex: 0.9, marginHorizontal: 10 }}>
                                                <View style={{ flex: 0.5, justifyContent: 'flex-end', }}>
                                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555' }}>{item.title}</Text>
                                                </View>
                                                <View style={{ flex: 0.5, justifyContent: 'center' }}>
                                                    <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Medium', color: '#FF1950' }}>{item.rate}</Text>
                                                </View>
                                                <View style={{ position: 'absolute', bottom: height / -32, right: 5 }}>
                                                    <TouchableOpacity onPress={() => handlepress()}
                                                        style={{
                                                            height: height / 26, width: height / 26, backgroundColor: Colors.commoncolor, borderRadius: 50,
                                                            justifyContent: 'center', alignItems: 'center'
                                                        }}>
                                                        <Icons.Feather style={{ fontSize: height / 58, color: 'white' }} name="shopping-cart" />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })}
                        {data ?
                            <Modalview val={true} receiveDataFromChild={handlegetvalue} />
                            : null}
                        <View style={styles.container5}>
                            <View style={styles.cont5view1}>
                                <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Filter By</Text>
                                <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-Medium', color: '#555555' }}>SubCategory</Text>
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
                        {list2.slice(3, length).map((item, i) => {
                            return (
                                <TouchableWithoutFeedback key={i} onPress={() => navigation.navigate('Detailscreen')}>
                                    <View style={styles.cont3view1}>
                                        <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                                            <Image style={{ width: '95%', height: '95%', borderRadius: 5 }}
                                                source={item.img}
                                            />
                                            <TouchableOpacity onPress={() => click2(item)}
                                                style={{
                                                    position: 'absolute', right: 1, top: 1, height: height / 30, width: height / 30, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 50,
                                                    borderWidth: 0.8, borderColor: '#BFC9CA',
                                                }}>
                                                {item.isopen ? <Icons.FontAwesome style={[styles.cardTitleIcon, { color: Colors.commoncolor }]} name="heart" /> :
                                                    <Icons.FontAwesome style={[styles.cardTitleIcon, {}]} name="heart-o" />}
                                            </TouchableOpacity>
                                        </View>
                                        <View style={{ flex: 0.6 }}>
                                            <View style={{ flex: 0.9, marginHorizontal: 10 }}>
                                                <View style={{ flex: 0.5, justifyContent: 'flex-end', }}>
                                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555' }}>{item.title}</Text>
                                                </View>
                                                <View style={{ flex: 0.5, justifyContent: 'center' }}>
                                                    <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Medium', color: '#FF1950' }}>{item.rate}</Text>
                                                </View>
                                                <View style={{ position: 'absolute', bottom: height / -32, right: 5 }}>
                                                    <TouchableOpacity onPress={() => handlepress()}
                                                        style={{
                                                            height: height / 26, width: height / 26, backgroundColor: Colors.commoncolor, borderRadius: 50,
                                                            justifyContent: 'center', alignItems: 'center'
                                                        }}>
                                                        <Icons.Feather style={{ fontSize: height / 58, color: 'white' }} name="shopping-cart" />
                                                    </TouchableOpacity>
                                                </View>
                                            </View>
                                        </View>
                                    </View>
                                </TouchableWithoutFeedback>
                            )
                        })}
                        {data ?
                            <Modalview val={true} receiveDataFromChild={handlegetvalue} />
                            : null}
                    </> :
                    <>
                        <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly', }}>
                            {list.slice(0, 4).map((item, i) => {
                                return (
                                    <TouchableWithoutFeedback key={i} onPress={() => navigation.navigate('Detailscreen')}>
                                        <View style={{ width: width / 2.2, height: height / 3, backgroundColor: 'rgb(240, 240, 243)', borderRadius: 5, marginTop: 10, elevation: 3 }}>
                                            <View style={{ flex: 0.6, justifyContent: 'flex-end', alignItems: 'center' }}>
                                                <Image style={{ width: '98%', height: '98%', resizeMode: 'contain', borderRadius: 3 }}
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
                                                <View style={{ flex: 0.5, justifyContent: 'flex-end', alignItems: 'center', marginHorizontal: 10, }}>
                                                    <Text style={{ fontSize: height / 74.8, fontFamily: 'Poppins-Medium', color: '#555555', textAlign: 'center' }}>{item.title}</Text>
                                                </View>
                                                <View style={{ flex: 0.5, justifyContent: 'flex-start', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#FF1950', marginTop: 10 }}>{item.rate}</Text>
                                                </View>
                                            </View>
                                            <View style={{ position: 'absolute', bottom: 10, right: 5 }}>
                                                <TouchableOpacity onPress={() => handlepress()}
                                                    style={{
                                                        height: height / 35, width: height / 35, backgroundColor: Colors.commoncolor, borderRadius: 50, marginHorizontal: 10,
                                                        justifyContent: 'center', alignItems: 'center'
                                                    }}>
                                                    <Icons.Feather style={{ fontSize: height / 62, color: 'white' }} name="shopping-cart" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                )
                            })}
                        </View>
                        {data ?
                            <Modalview val={true} receiveDataFromChild={handlegetvalue} />
                            : null}
                        <View style={styles.container5}>
                            <View style={styles.cont5view1}>
                                <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Filter By</Text>
                                <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-Medium', color: '#555555' }}>SubCategory</Text>
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
                        <View style={{ flex: 1, flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-evenly', marginTop: 10 }}>
                            {list.slice(4, length).map((item, i) => {
                                return (
                                    <TouchableWithoutFeedback key={i} onPress={() => navigation.navigate('Detailscreen')}>
                                        <View style={{ width: width / 2.2, height: height / 3, backgroundColor: 'rgb(240, 240, 243)', borderRadius: 5, elevation: 3, }}>
                                            <View style={{ flex: 0.6, justifyContent: 'flex-end', alignItems: 'center' }}>
                                                <Image style={{ width: '98%', height: '98%', borderRadius: 3, resizeMode: 'contain' }}
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
                                                <View style={{ flex: 0.5, justifyContent: 'flex-end', alignItems: 'center', marginHorizontal: 10, }}>
                                                    <Text style={{ fontSize: height / 74.8, fontFamily: 'Poppins-Medium', color: '#555555', textAlign: 'center' }}>{item.title}</Text>
                                                </View>
                                                <View style={{ flex: 0.5, justifyContent: 'flex-start', alignItems: 'center' }}>
                                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#FF1950', marginTop: 10 }}>{item.rate}</Text>
                                                </View>
                                            </View>
                                            <View style={{ position: 'absolute', bottom: 10, right: 5 }}>
                                                <TouchableOpacity onPress={() => handlepress()}
                                                    style={{
                                                        height: height / 35, width: height / 35, backgroundColor: Colors.commoncolor, borderRadius: 50, marginHorizontal: 10,
                                                        justifyContent: 'center', alignItems: 'center'
                                                    }}>
                                                    <Icons.Feather style={{ fontSize: height / 62, color: 'white' }} name="shopping-cart" />
                                                </TouchableOpacity>
                                            </View>
                                        </View>
                                    </TouchableWithoutFeedback>
                                )
                            })}
                        </View>
                        {data ?
                            <Modalview val={true} receiveDataFromChild={handlegetvalue} />
                            : null}
                    </>}
                <View style={{ height: height / 100 * 2 }}></View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Colors.background
    },
    container1: {
        height: height / 100 * 6, justifyContent: 'center', marginHorizontal: 15, marginTop: 10,
    },
    container2: {
        height: height / 5.8, marginTop: 5
    },
    cont2view1: {
        flex: 0.3, flexDirection: 'row',
    },
    cont2view2: {
        flex: 0.65, flexDirection: 'row', justifyContent: 'space-evenly',
        alignItems: 'center'
    },
    cont2text: {
        fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340', marginRight: 25
    },
    cont2view2subview: {
        height: height / 11, width: width / 2.01, backgroundColor: 'white',
        borderRadius: 10, alignItems: 'center', flexDirection: 'row', borderWidth: 1, borderColor: '#e4e6e7',
    },
    container3: {
        height: height / 100 * 35, justifyContent: 'center',
    },
    cont3view1: {
        height: height / 6.6, backgroundColor: 'white', marginHorizontal: 8, flexDirection: 'row',
        borderRadius: 10, marginTop: height / 25, elevation: 3
    },
    cardTitleIcon: {
        fontWeight: 'bold',
        fontSize: height / 58,
    },
    container4: {
        height: height / 100 * 35, justifyContent: 'center'
    },
    container5: {
        height: height / 100 * 13, flexDirection: 'row', marginTop: height / 30
    },
    cont5view1: {
        flex: 0.4, justifyContent: 'center', alignItems: 'center'
    },
    cont5view2: {
        flex: 0.6
    },
    container6: {
        height: height / 100 * 35, justifyContent: 'center',
    },
    icon1: {
        fontSize: height / 35, color: '#8A8D9F'
    },
    buttonLeft: {
        width: height / 100 * 5
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height / 40,
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
export default Nappycarescreen;

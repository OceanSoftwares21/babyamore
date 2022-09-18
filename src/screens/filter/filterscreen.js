import React from 'react';
import {
    Text, View, StyleSheet, SafeAreaView, Dimensions, ScrollView,
    TouchableOpacity, Image,TextInput
} from 'react-native';
import Color from '../../color/commoncolor';
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window');

const Filterscreen = ({ navigation }) => {
    const [subchecked, setsubChecked] = React.useState(false);
    const [customval, setCustval] = React.useState([]);
    const [customval2, setCustval2] = React.useState([]);
    const Data = [
        {
            id: '1',
            title: 'Baby Clothes',
            subtitle: [
                { values: "Accessories" },
                { values: "Baby Boy" },
                { values: "Baby Girl" }]
        },
        {
            id: '2',
            title: 'Feeding',
            subtitle: [

            ]
        },
        {
            id: '3',
            title: 'Gears & Toys',
            subtitle: [

            ]
        }];
    const Data2 = [
        {
            id: '1',
            title: 'A Toddler Thing',
            subtitle: []
        },
        {
            id: '2',
            title: 'A+D',
            subtitle: []
        },
        {
            id: '3',
            title: 'Abena',
            subtitle: []
        },
        {
            id: '4',
            title: 'Aleva Naturals',
            subtitle: []
        },
        {
            id: '5',
            title: 'Allter',
            subtitle: []
        },
        {
            id: '6',
            title: 'Aquaphor',
            subtitle: []
        }
    ]
    React.useEffect(() => {
        setCustval(
            Data.map(v => ({ ...v, isOpen: false, favBtn: false }))
        );
        setCustval2(
            Data2.map(d => ({ ...d, isOpen2: false, favBtn2: false }))
        );
    }, [])
    const Click = (item) => {
        setCustval(
            customval.map(e => e.id === item.id ? ({ ...e, isOpen: !e.isOpen }) : (e))
        )
    }
    const checkbox = (item) => {
        setCustval(
            customval.map(e => e.id === item.id ? ({ ...e, favBtn: !e.favBtn }) : (e))
        )
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
    const values = [
        {
            id: '1', title: 'Clothes & Shoes',
            subcategory: [
                { id: '1', title: 'Sportswear' },
                { id: '2', title: 'Frocks' },
                { id: '3', title: 'Bath Time' },
                { id: '4', title: 'Caps, Gloves & Mittens' },
                { id: '5', title: 'Caps, Gloves & Mittens' },
            ]
        }
    ]
    const [userclick, setclick] = React.useState('')
    const [lists, setList] = React.useState([])
    React.useEffect(() => {
        setList(
            values.map(e => ({ ...e, isOpen: false }))
        )
    }, [])
    const open = (va) => {
        setList(
            lists.map(v => v.id === va.id ? ({ ...v, isOpen: !v.isOpen }) : (v))
        )
    }
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={styles.container2}>
                <View style={styles.cont2view1}>
                    <TouchableOpacity onPress={() => {
                        navigation.navigate('Parenting'),
                            console.log('pressss');
                    }}
                        style={{
                            height: height / 17, width: width / 2, backgroundColor: '#EEEEEE', borderTopRightRadius: height/10, borderBottomRightRadius: height/10,
                            position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center'
                        }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F', }}>
                            PARENTING
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={{
                            height: height / 17, width: width / 2, backgroundColor: Color.commoncolor, borderTopLeftRadius: height/10, borderBottomLeftRadius: height/10,
                            justifyContent: 'center', alignItems: 'center', borderTopRightRadius: height/10, borderBottomRightRadius: height/10,
                        }}>
                        <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', }}>
                            SHOPPING
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.cont2view2}>
                <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'flex-end' }}>
                        <View style={{ height: height / 14.9, width: width / 1.3, backgroundColor: '#FFFFFF', borderRadius: 15, elevation: 3, flexDirection: 'row' }}>
                            <View style={{ width: '80%', justifyContent: 'center' }}>
                                <TextInput
                                    style={{ fontSize: height / 57.7, fontFamily: 'Poppins-Regular', marginLeft: 15, color: '#595959' }}
                                    placeholder="Search"
                                    keyboardType='default'
                                />
                            </View>
                            <View style={{ width: '20%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icons.FontAwesome name='search' style={{ fontSize: height / 40, color: '#FC8181', opacity: 0.6 }} />
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity >
                            <Image style={{ height: height / 17, width: height / 17 }}
                                source={require('../../assets/images/filtericon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ flex: 0.7, marginHorizontal: 8, flexDirection: 'row',justifyContent:'space-around' }}>
                <View style={{ flex: 0.35, justifyContent: 'space-evenly' }}>
                    <TouchableOpacity style={{ flex: 0.07, borderRadius: 5, backgroundColor: '#E5E7E9', justifyContent: 'center' }}>
                        <Text style={{ fontSize: height / 63, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 15 }}>Age</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.07, borderRadius: 5, backgroundColor: '#E5E7E9', justifyContent: 'center' }}>
                        <Text style={{ fontSize: height / 63, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 15 }}>Brand</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.07, borderRadius: 5, backgroundColor: '#E5E7E9', justifyContent: 'center' }}>
                        <Text style={{ fontSize: height / 63, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 15 }}>Color</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.07, borderRadius: 5, backgroundColor: '#E5E7E9', justifyContent: 'center' }}>
                        <Text style={{ fontSize: height / 63, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 15 }}>Gender</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.07, borderRadius: 5, backgroundColor: '#E5E7E9', justifyContent: 'center' }}>
                        <Text style={{ fontSize: height / 63, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 15 }}>Material</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.07, borderRadius: 5, backgroundColor: '#E5E7E9', justifyContent: 'center' }}>
                        <Text style={{ fontSize: height / 63, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 15 }}>Neck</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.07, borderRadius: 5, backgroundColor: '#E5E7E9', justifyContent: 'center' }}>
                        <Text style={{ fontSize: height / 63, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 15 }}>Occasion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.07, borderRadius: 5, backgroundColor: '#E5E7E9', justifyContent: 'center' }}>
                        <Text style={{ fontSize: height / 63, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 15 }}>Popularity</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.07, borderRadius: 5, backgroundColor: '#E5E7E9', justifyContent: 'center' }}>
                        <Text style={{ fontSize: height / 63, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 15 }}>Price</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.07, borderRadius: 5, backgroundColor: '#E5E7E9', justifyContent: 'center' }}>
                        <Text style={{ fontSize: height / 63, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 15 }}>Promotion</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.07, borderRadius: 5, backgroundColor: '#E5E7E9', justifyContent: 'center' }}>
                        <Text style={{ fontSize: height / 63, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 15 }}>size</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => setclick('category')}
                        style={[userclick === 'category' ? { flex: 0.07, borderRadius: 5, backgroundColor: Color.background, justifyContent: 'center' } : { flex: 0.07, borderRadius: 5, backgroundColor: '#E5E7E9', justifyContent: 'center' }]}>
                        <Text style={[userclick === 'category' ? { fontSize: height / 63, fontFamily: 'Poppins-Regular', color: Color.commoncolor, marginLeft: 15 } : { fontSize: height / 63, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 15 }]}>Sub Category</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ flex: 0.07, borderRadius: 5, backgroundColor: '#E5E7E9', justifyContent: 'center' }}>
                        <Text style={{ fontSize: height / 63, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 15 }}>User Rating</Text>
                    </TouchableOpacity>
                </View>
                <View style={{ flex: 0.63, backgroundColor: '#FFFFFF',elevation:3 }}>
                    {userclick === 'category' ?
                        <>
                            {lists.map((va, i) => {
                                return (
                                    <ScrollView showsHorizontalScrollIndicator={true}
                                        scrollEventThrottle={10} indicatorStyle={{ color: 'red' }}>
                                        <View key={i}>
                                            <TouchableOpacity onPress={() => open(va)}
                                                style={{ flex: 1, marginTop: 10, flexDirection: 'row', marginHorizontal: 15, alignItems: 'center', }}>
                                                <Icons.FontAwesome style={{ fontSize: 20, color: Color.commoncolor }} name='heart' />
                                                <Text style={{ fontSize: height / 50, fontFamily: 'Poppins-regular', color: '#8A8D9F', marginLeft: 10 }}>{va.title}</Text>
                                                <Icons.FontAwesome style={{ fontSize: height / 37, marginLeft: 10 }} name='minus-circle' />
                                            </TouchableOpacity>
                                            {va.isOpen ?
                                                <>
                                                    {va.subcategory.map((a, i) => {
                                                        return (
                                                            <TouchableOpacity key={i} style={{
                                                                flex: 1,
                                                                flexDirection: 'row',
                                                                alignItems: 'center',
                                                                justifyContent: 'flex-start',
                                                                marginTop: 15,
                                                                marginHorizontal: 35
                                                            }}>
                                                                <Icons.FontAwesome style={{ fontSize: height / 58, color: Color.commoncolor }} name='heart' />
                                                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-regular', color: '#8A8D9F', marginLeft: 10 }}>{a.title}</Text>

                                                            </TouchableOpacity>
                                                        )
                                                    })}
                                                </> :
                                                null
                                            }
                                        </View>
                                    </ScrollView>
                                )
                            })}
                        </>
                        : null}
                </View>
            </View>
            <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', }}>
                <TouchableOpacity onPress={() => navigation.navigate('Nappyscreen')}
                    style={{ height: height / 16, width: height / 4, backgroundColor: '#fc8181', borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: height / 46.7, fontWeight: '500', color: 'white' }}>APPLY</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Color.background
    },
    container1: {

    },
    container2: {
        flex: 0.2
    },
    container3: {
        flex: 0.12, alignItems: 'center', justifyContent: 'flex-end',
    },
    cont2view1: {
        flex: 0.5, justifyContent: 'center', marginHorizontal: 15, marginTop: 5
    },
    cont2view2: {
        flex: 0.5, flexDirection: 'row',
    },
    search: {
        backgroundColor: '#fff',
        borderRadius: 15,
        width: '95%',
        height: '60%',
    },
    filter: {
        color: '#ffffff',
        fontSize: height / 40,
        textAlign: 'center',
        margin: 'auto'
    },
    container4: {
        flex: 0.3, backgroundColor: 'white', marginHorizontal: 15, borderRadius: 15
    },
    container5: {
        flex: 0.3, justifyContent: 'center'
    },
    buttonLeft: {
        width: height / 100 * 5
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height/40,
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
export default Filterscreen;

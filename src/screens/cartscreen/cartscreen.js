import React from 'react';
import {
    Text, View, StyleSheet, ScrollView, Dimensions,
    Image, SafeAreaView, TouchableOpacity, Modal, RefreshControl
} from 'react-native';
import Colors from '../../color/commoncolor';
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window');
import Shoppingparentingbutton from '../../components/shoppingparentingbutton';

const wait = (timeout) => {
    return new Promise(resolve => setTimeout(resolve, timeout));;
}
const Cartscreen = ({ navigation }) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const [Data, setData] = React.useState([])
    const [ids, setIds] = React.useState('')
    const [undo, setUndo] = React.useState(false)
    const [modalVisible, setModalVisible] = React.useState(false);
    const [values, setValues] = React.useState(0)
    const [productprice, setPrice] = React.useState([])
    const data = [
        {
            title: 'Alter Baby Diaper', amount: '1099.2', Size: "M",
            image: require('../../assets/images/cart_2.png'), id: 0
        },
        {
            title: 'Baby Diaper', amount: '1000.00', Size: "M",
            image: require('../../assets/images/cart_1.png'), id: 1
        },
        {
            title: 'Diaper', amount: '500.6', Size: "M",
            image: require('../../assets/images/cart_2.png'), id: 2
        },
    ]
    React.useEffect(() => {
        setData(data.map(s => ({ ...s, favBtn: false, counter: 1 })))
        let val = data.map((a) => {
            return a.amount
        })
        setPrice(val)
    }, [])
    React.useEffect(() => {
        setData(data.map(s => ({ ...s, favBtn: false, counter: 1 })))
    }, [refreshing])
    React.useEffect(() => {
        totalfunction()
    }, [Data])
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(500).then(() => setRefreshing(false));
    }, []);
    const handleclick = (val) => {
        setData(
            Data.map(e => e.id === val.id ? ({ ...e, favBtn: !e.favBtn }) : (e))
        )
    }
    const handledelete = (i, val) => {
        setIds(i)
        setModalVisible(true)
    }
    const incrementCounter = (val, i) => {
        let values = [...productprice]
        setData(
            Data.map((e) =>
                e.id === val.id ? ({
                    ...e, counter: e.counter + 1,
                    amount: ((e.counter + 1) * values[i]).toFixed(1)
                }) : (e)
            ))
    }
    const decrementCounter = (val, i) => {
        let values = [...productprice]
        setData(
            Data.map((e) =>
                e.id === val.id ? ({ ...e, counter: e.counter - 1, amount: (e.amount - values[i]).toFixed(1) }) : (e)
            ));
    }
    const click2 = () => {
        var timeoutVariable
        setModalVisible(false)
        const values = [...Data];
        values.splice(ids, 1);
        setData(values);
        setUndo(true)
        timeoutVariable = setTimeout(() => {
            setUndo(false)
            setRefresh(false)
        }, 9000)
    }
    const undofunction = () => {
        onRefresh()
        setUndo(false)
    }
    const totalfunction = () => {
        let totalcost = Data.reduce(function (a, b) {
            return parseFloat(a) + parseFloat(b.amount)
        }, 0)
        setValues(totalcost)
    }
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}
                refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />}>
                <Shoppingparentingbutton props={navigation} />
                <View style={styles.container2}>
                    <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>Shopping Cart</Text>
                </View>
                <View style={styles.container3}>
                    <View style={{ flex: 1, backgroundColor: 'white', marginHorizontal: 15, borderRadius: 10, flexDirection: 'row', elevation: 2 }}>
                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{
                                height: height / 18, width: height / 18, backgroundColor: Colors.commoncolor, borderRadius: 50, marginHorizontal: 10,
                                justifyContent: 'center', alignItems: 'center'
                            }}>
                                <Icons.Feather style={{ fontSize: height / 40, color: 'white' }} name="shopping-cart" />
                            </View>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: 'center', alignItems: 'flex-start' }}>
                            <Text style={{ fontSize: height / 48, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>In Your Cart</Text>
                        </View>
                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                            <View style={{
                                height: height / 19, width: height / 19, borderColor: Colors.commoncolor, borderRadius: 10, marginHorizontal: 25,
                                justifyContent: 'center', alignItems: 'center', borderWidth: 1.5
                            }}>
                                <Text style={{ fontSize: height / 46, fontFamily: 'Poppins-Bold', color: '#FE2121' }}>3</Text>
                            </View>
                        </View>
                    </View>
                </View>
                {Data.map((val, i) => {
                    return (
                        <View key={i} style={styles.container4}>
                            <View style={{ flex: 0.95, backgroundColor: '#FFFFFF', marginHorizontal: 15, flexDirection: 'row', borderRadius: 10 }}>
                                <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                                    <Image style={{ height: height / 6, width: height / 6, borderRadius: 5, }}
                                        source={val.image}
                                    />
                                </View>
                                <View style={{ flex: 0.6, }}>
                                    <View style={{ flex: 0.25, flexDirection: 'row', marginHorizontal: 10, alignItems: 'center', justifyContent: 'space-between' }}>
                                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>{val.title}</Text>
                                        <TouchableOpacity onPress={() => handleclick(val)}>
                                            {val.favBtn ? <Icons.FontAwesome style={[styles.cardTitleIcon, { color: Colors.commoncolor, marginRight: 15 }]} name="heart" /> :
                                                <Icons.FontAwesome style={[styles.cardTitleIcon, { color: '#58668c', marginRight: 15 }]} name="heart-o" />}
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flex: 0.15, marginHorizontal: 10 }}>
                                        <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-Medium', color: '#FE2121' }}>₹{val.amount}</Text>
                                    </View>
                                    <View style={{ flex: 0.35, flexDirection: 'row', marginHorizontal: 10 }}>
                                        <View style={{ flex: 0.4, justifyContent: 'center' }}>
                                            <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>Size Blue-{val.Size}</Text>
                                        </View>
                                        <View style={{ flex: 0.6, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                                            {val.counter == '1' ?
                                                <TouchableOpacity
                                                    style={{ height: height / 29, width: height / 29, borderRadius: 50, backgroundColor: '#fedcdc', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Icons.AntDesign style={{ fontSize: height / 62, color: '#FE2121', }} name="minus" />
                                                </TouchableOpacity>
                                                :
                                                <TouchableOpacity onPress={() => decrementCounter(val, i)}
                                                    style={{ height: height / 29, width: height / 29, borderRadius: 50, backgroundColor: '#fedcdc', justifyContent: 'center', alignItems: 'center' }}>
                                                    <Icons.AntDesign style={{ fontSize: height / 62, color: '#FE2121', }} name="minus" />
                                                </TouchableOpacity>
                                            }
                                            <View style={{ height: height / 29, width: height / 29, backgroundColor: '#F4F6F7', borderRadius: 8, justifyContent: 'center', alignItems: 'center' }}>
                                                <Text style={{ fontSize: height / 62, color: '#1C2340', fontFamily: 'Poppins-Bold' }}>{val.counter}</Text>
                                            </View>
                                            <TouchableOpacity onPress={() => incrementCounter(val, i)}
                                                style={{ height: height / 29, width: height / 29, borderRadius: 50, backgroundColor: '#fedcdc', justifyContent: 'center', alignItems: 'center' }}>
                                                <Icons.AntDesign style={{ fontSize: height / 62, color: '#FC8181', }} name="plus" />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ flex: 0.25, flexDirection: 'row', marginHorizontal: 10 }}>
                                        <View style={{ flex: 0.75, justifyContent: 'flex-start', alignItems: 'flex-start', flexDirection: 'row' }}>
                                            <Icons.FontAwesome style={{ color: '#F4D03F', fontSize: height / 45 }} name="star" />
                                            <Icons.FontAwesome style={{ color: '#F4D03F', fontSize: height / 45, marginLeft: 3 }} name="star" />
                                            <Icons.FontAwesome style={{ color: '#F4D03F', fontSize: height / 45, marginLeft: 3 }} name="star" />
                                            <Icons.FontAwesome style={{ color: '#F4D03F', fontSize: height / 45, marginLeft: 3 }} name="star" />
                                            <Icons.FontAwesome style={{ color: '#F4D03F', fontSize: height / 45, marginLeft: 3 }} name="star" />
                                            <Text style={{ fontSize: height / 54, marginLeft: 10 }}>4.9</Text>
                                        </View>
                                        <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'flex-end', marginHorizontal: 10 }}>
                                            <TouchableOpacity
                                                onPress={() => handledelete(i, val)}>
                                                <Icons.FontAwesome style={{ fontSize: height / 45, color: '#FF0000', marginRight: 6 }} name='trash' />
                                            </TouchableOpacity>
                                        </View>
                                        <Modal key={i}
                                            animationType='fade'
                                            transparent={true}
                                            visible={modalVisible}>
                                            <View style={styles.centeredView}>
                                                <View style={styles.modalView}>
                                                    <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center', marginHorizontal: 10 }}>
                                                        <Text style={{ fontSize: height / 52, fontFamily: 'Poppins-Medium', color: '#555555', textAlign: 'center' }}>
                                                            Are you sure you want to remove
                                                            this item from your cart?
                                                        </Text>
                                                    </View>
                                                    <View style={{ flex: 0.25, alignItems: 'center', justifyContent: 'center' }}>
                                                        <TouchableOpacity onPress={() => click2(i)}
                                                            style={{ height: height / 20, width: height / 5.5, backgroundColor: Colors.commoncolor, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                                                            <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF' }}>YES</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={{ flex: 0.25, alignItems: 'center', }}>
                                                        <TouchableOpacity onPress={() => { setModalVisible(false) }}>
                                                            <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-Regular', color: '#8A8D9F', textDecorationLine: 'underline' }}>CANCEL</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                </View>
                                            </View>
                                        </Modal>
                                    </View>
                                </View>
                            </View>
                        </View>
                    )
                })}
                {undo ?
                    <View style={{ height: height / 18, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => { undofunction() }}
                            style={{ height: height / 25, width: height / 7.5, borderRadius: height / 10, backgroundColor: '#E0E0E0', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Medium', color: '#8A8D9F' }}>UNDO</Text>
                        </TouchableOpacity>
                    </View> : null}
                <View style={{ height: height / 6, backgroundColor: 'white', borderTopLeftRadius: 25, borderTopRightRadius: 25, elevation: 3, marginTop: 10 }}>
                    <View style={{ flex: 0.45, justifyContent: 'center', alignItems: 'center', marginHorizontal: 15, flexDirection: 'row', justifyContent: 'space-between', }}>
                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Bold', color: '#1C2340' }}>Total Amount</Text>
                        {(() => {
                            var format = parseFloat(values).toFixed(2).replace(/\d(?=(\d{3})+\.)/, '$&,');
                            return <Text style={{ fontSize: height / 48, fontFamily: 'Poppins-Bold', color: '#FE2121' }} >₹ {format}</Text>
                        })()}
                    </View>
                    <View style={{ flex: 0.65, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Childstack', { screen: 'Addrescreen' })}
                            style={{ width: width / 1.1, height: height / 14.9, backgroundColor: Colors.commoncolor, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 46, fontFamily: 'Poppins-SemiBold', color: 'white' }}>Checkout</Text>
                        </TouchableOpacity>
                    </View>
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
    container1: {
        height: height / 100 * 6, justifyContent: 'center', marginHorizontal: 15, marginTop: 10,
    },
    container2: {
        height: height / 100 * 5,
        justifyContent: 'center', alignItems: 'center', marginTop: 10
    },
    container3: {
        height: height / 100 * 10, marginTop: 10
    },
    container4: {
        height: height / 5.6, justifyContent: 'center', marginTop: 5
    },
    cardTitleIcon: {
        fontWeight: 'bold',
        fontSize: height / 40,
    },
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(28,35,64,0.4)',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modalView: {
        height: height / 2.8,
        width: height / 2.8,
        backgroundColor: 'white',
        borderRadius: 10,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
})
export default Cartscreen;

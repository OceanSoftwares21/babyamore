import React from 'react';
import {
    Text, View, StyleSheet, SafeAreaView, ScrollView,
    TouchableOpacity, Image, Dimensions, ImageBackground, TouchableWithoutFeedback, TextInput,
} from 'react-native';
import Shoppingparentingbutton from '../../components/shoppingparentingbutton';
import Color from '../../color/commoncolor'
import { Icons } from '../../color/icon';

const { height, width } = Dimensions.get('window')
const Searchscreen = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView>
                <Shoppingparentingbutton props={navigation} />
                <View style={styles.cont2v1}>
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
                                <TouchableOpacity>
                                    <Icons.Feather name='search' style={{ fontSize: height / 40, color: '#FC8181', opacity: 0.6 }} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                    <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Filterscreen')}>
                            <Image style={{ height: height / 17, width: height / 17 }}
                                source={require('../../assets/images/filtericon.png')}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: height / 22, marginHorizontal: 14, justifyContent: 'flex-end' }}>
                    <Text style={{ fontSize: height / 55, fontFamily: 'Poppins-Medium', color: '#8A8D9F' }}>
                        Top Search
                    </Text>
                </View>
                <View style={styles.container2}>
                    <View style={{ flex: 0.33, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity style={{ height: height / 21.3, width: height / 7.7, borderRadius: 30, borderWidth: 0.8, borderColor: '#FC8181', justifyContent: 'center', alignItems: 'center', }}>
                            <Text style={{ fontSize: height / 74, fontFamily: 'Poppins-Medium', color: '#555555' }}>Brands</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Childstack', { screen: 'Gird' })}
                            style={{ height: height / 21.3, width: height / 6, borderRadius: 30, borderWidth: 0.8, borderColor: '#FC8181', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 74, fontFamily: 'Poppins-Medium', color: '#555555' }}>Nappycare</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: height / 21.3, width: height / 7.7, borderRadius: 30, borderWidth: 0.8, borderColor: '#FC8181', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 74, fontFamily: 'Poppins-Medium', color: '#555555' }}>Skin&Hair</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.33, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity style={{ height: height / 21.3, width: height / 6, borderRadius: 30, borderWidth: 0.8, borderColor: '#FC8181', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 74, fontFamily: 'Poppins-Medium', color: '#555555' }}>BabyCloths</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: height / 21.3, width: height / 7.7, borderRadius: 30, borderWidth: 0.8, borderColor: '#FC8181', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 74, fontFamily: 'Poppins-Medium', color: '#555555' }}>Oral Care</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: height / 21.3, width: height / 7.7, borderRadius: 30, borderWidth: 0.8, borderColor: '#FC8181', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 74, fontFamily: 'Poppins-Medium', color: '#555555' }}>Feeding</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ flex: 0.33, flexDirection: 'row', justifyContent: 'space-around', alignItems: 'center', marginHorizontal: 10 }}>
                        <TouchableOpacity style={{ height: height / 21.3, width: height / 7.7, borderRadius: 30, borderWidth: 0.8, borderColor: '#FC8181', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 74, fontFamily: 'Poppins-Medium', color: '#555555' }}>Offers</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: height / 21.3, width: height / 7.7, borderRadius: 30, borderWidth: 0.8, borderColor: '#FC8181', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 74, fontFamily: 'Poppins-Medium', color: '#555555' }}>Motherhood</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={{ height: height / 21.3, width: height / 6, borderRadius: 30, borderWidth: 0.8, borderColor: '#FC8181', justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 74, fontFamily: 'Poppins-Medium', color: '#555555' }}>Gears&Toys</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.container3}>
                    <View style={styles.cont3view1}>
                        <Text style={{ fontSize: height / 31.1, fontFamily: 'Poppins-Medium', color: '#555555' }}>TRENDING PICKS</Text>
                    </View>
                    <View style={{ flex: 0.1, alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 74.8, fontFamily: 'Poppins-Regular', color: '#555555' }}>--Simplifying Your Style Decisions--</Text>
                    </View>
                    <View style={styles.cont3view2}>
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
                <View style={styles.container4} >
                    <View style={{ flex: 0.95, marginTop: 5, }}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ width: height / 100 * 5, justifyContent: 'center', alignItems: 'center', marginLeft: 5 }}>
                                <Image style={{ height: height / 110 * 25, width: height / 100 * 2, tintColor: '#555555' }}
                                    source={require('../../assets/images/text.png')}
                                />
                            </View>
                            <View style={{ width: height / 4.2, height: height / 3.5, backgroundColor: '#FFFFFF', borderRadius: 10, elevation: 3, marginHorizontal: 5 }}>
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
                                    <Text style={{ fontSize: height / 62.3, fontFamily: 'Poppins-Medium', color: '#FC8181', }}>₹10,999.00</Text>
                                    <Text style={{ fontSize: height / 75, fontFamily: 'Poppins-Medium', color: '#8A8D9F', textDecorationLine: 'line-through', marginLeft: 5, marginRight: 5 }}>₹13,748</Text>
                                    <Text style={{ fontSize: height / 70, fontFamily: 'Poppins-Medium', color: '#FC8181', }}>25% OFF</Text>
                                </View>
                            </View>
                            <View style={{ width: height / 4.2, height: height / 3.5, backgroundColor: '#FFFFFF', borderRadius: 10, elevation: 3, marginHorizontal: 5 }}>
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
                                    <Text style={{ fontSize: height / 62.3, fontFamily: 'Poppins-Medium', color: '#FC8181', }}>₹10,999.00</Text>
                                    <Text style={{ fontSize: height / 75, fontFamily: 'Poppins-Medium', color: '#8A8D9F', textDecorationLine: 'line-through', marginLeft: 5, marginRight: 5 }}>₹13,748</Text>
                                    <Text style={{ fontSize: height / 70, fontFamily: 'Poppins-Medium', color: '#FC8181' }}>25% OFF</Text>
                                </View>
                            </View>
                            <View style={{ width: height / 4.2, height: height / 3.5, backgroundColor: '#FFFFFF', borderRadius: 10, elevation: 3, marginHorizontal: 5 }}>
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
                                    <Text style={{ fontSize: height / 62.3, fontFamily: 'Poppins-Medium', color: '#FC8181', }}>₹10,999.00</Text>
                                    <Text style={{ fontSize: height / 75, fontFamily: 'Poppins-Medium', color: '#8A8D9F', textDecorationLine: 'line-through', marginLeft: 5, marginRight: 5 }}>₹13,748</Text>
                                    <Text style={{ fontSize: height / 70, fontFamily: 'Poppins-Medium', color: '#FC8181', }}>25% OFF</Text>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                </View>
                <View style={styles.container5}>
                    <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 45, fontFamily: 'Poppins-SemiBold', color: '#555555' }}>NEWBIES OF '22</Text>
                    </View>
                    <View style={styles.cont5view2}>
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
                <View style={styles.container6}>
                    <View style={styles.cont6view1}>
                        <Text style={{ fontSize: height / 31.1, fontFamily: 'Poppins-Medium', color: '#555555' }}>
                            MOST LOVED BRANDS
                        </Text>
                    </View>
                    <View style={{ flex: 0.8, backgroundColor: '#f0f0f0', justifyContent: 'center' }}>
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
    search: {
        backgroundColor: '#fff',
        fontSize: height / 70,
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
    container2: {
        height: height / 5.5, marginTop: 5
    },
    cont2v1: {
        height: height / 13.8, flexDirection: 'row', marginTop: 10
    },
    cont2v2: {
        flex: 1,
    },
    cont2subview: {
        flex: 0.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly',
    },
    commonview: {
        width: width / 100 * 30, height: '100%', backgroundColor: 'white', borderRadius: 10
    },
    commonview1: {
        height: '75%', justifyContent: 'center', alignItems: 'center',
    },
    commonview2: {
        height: '25%', alignItems: 'center'
    },
    commoncircleview: {
        height: '85%', width: '60%', backgroundColor: '#FBEEE6', borderRadius: 60,
        justifyContent: 'center', alignItems: 'center'
    },
    brandimg: {
        height: 50, width: 40, tintColor: '#FC8181'
    },
    cont3subview: {
        flex: 0.3, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly', marginTop: 5
    },
    container3: {
        height: height / 2.5,
    },
    cont3view1: {
        flex: 0.1, alignItems: 'center', justifyContent: 'center'
    },
    cont3view2: {
        flex: 0.8
    },
    container4: {
        height: height / 3.1, justifyContent: 'center', backgroundColor: '#FFFFFF', elevation: 3, marginTop: 3
    },
    cont5view2subview: {
        width: height / 6.4, height: height / 4.4, backgroundColor: '#FFFFFF', borderRadius: 10, marginLeft: 10
    },
    cont5view2: {
        flex: 0.8
    },
    container5: {
        height: height / 3.3, justifyContent: 'center', marginTop: 10, backgroundColor: '#FFFFFF', elevation: 3
    },
    container6: {
        height: height / 2.3, marginTop: 10
    },
    cont6view1: {
        flex: 0.2, justifyContent: 'center', alignItems: 'center',
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
    }
})

export default Searchscreen;

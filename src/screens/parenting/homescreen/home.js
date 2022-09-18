import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import Color from '../../../color/commoncolor'
import { Icons } from '../../../color/icon';
const { height, width } = Dimensions.get('window')
const Homescreen = (props) => {
    const [favBtn, setFavBtn] = React.useState(false);
    const [favBtn1, setFavBtn1] = React.useState(false);
    const [favBtn2, setFavBtn2] = React.useState(false);
    const [favBtn3, setFavBtn3] = React.useState(false);
    const [val, setVal] = React.useState('first')
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView>
                <View style={styles.container2}>
                    <Image style={{ height: '100%', width: '100%', borderRadius: 10, resizeMode: 'stretch' }}
                        source={require('../../../assets/images/homepic.png')}
                    />
                </View>
                <View style={styles.container3}>
                    <View style={styles.cont3view}>
                        <Text
                            style={styles.cont3text}>
                            Tell us more about yourself to get more
                            Personalised Feed
                        </Text>
                    </View>
                </View>
                <View style={styles.container4}>
                    <View style={styles.cont4v1}>
                        <View style={styles.subv1}>
                            <Image style={{ height: '100%', width: '100%' }}
                                source={require('../../../assets/images/fsample3.png')}
                            />
                        </View>
                        <View style={styles.subv2}>
                            <Image style={{ height: '100%', width: '100%' }}
                                source={require('../../../assets/images/fsample4.png')}
                            />
                        </View>
                        <View style={styles.subv3}>
                            <Image style={{ height: '100%', width: '100%' }}
                                source={require('../../../assets/images/fsample2.png')}
                            />
                        </View>
                    </View>
                    <View style={styles.cont4v2}>
                        <TouchableOpacity onPress={() => setVal('first')}
                            style={[val == 'first' ? { width: width / 3.5, height: height / 17, backgroundColor: Color.commoncolor, borderRadius: height / 10, alignItems: 'center', justifyContent: 'center' } :
                                { width: width / 3.5, height: height / 17, borderWidth: 0.8, borderColor: Color.commoncolor, borderRadius: height / 10, alignItems: 'center', justifyContent: 'center' }]}>
                            <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Medium', color: val == 'first' ? '#FFFFFF' : Color.commoncolor }}>Infant</Text>
                            <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Regular', color: val == 'first' ? '#FFFFFF' : Color.commoncolor }}>0 to 6 M</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setVal('second')}
                            style={[val == 'second' ? { width: width / 3.5, height: height / 17, backgroundColor: Color.commoncolor, borderRadius: height / 10, alignItems: 'center', justifyContent: 'center' } :
                                { width: width / 3.5, height: height / 17, borderWidth: 0.8, borderColor: Color.commoncolor, borderRadius: height / 10, alignItems: 'center', justifyContent: 'center' }]}>
                            <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Medium', color: val == 'second' ? '#FFFFFF' : Color.commoncolor }}>Baby</Text>
                            <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Regular', color: val == 'second' ? '#FFFFFF' : Color.commoncolor }}>6 M to 2 Yrs</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setVal('third')}
                            style={[val == 'third' ? { width: width / 3.5, height: height / 17, backgroundColor: Color.commoncolor, borderRadius: height / 10, alignItems: 'center', justifyContent: 'center' } :
                                { width: width / 3.5, height: height / 17, borderWidth: 0.8, borderColor: Color.commoncolor, borderRadius: height / 10, alignItems: 'center', justifyContent: 'center' }]}>
                            <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Medium', color: val == 'third' ? '#FFFFFF' : Color.commoncolor }}>Toddler</Text>
                            <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Regular', color: val == 'third' ? '#FFFFFF' : Color.commoncolor }}>2 to 4 Yrs</Text>
                        </TouchableOpacity>

                    </View>
                </View>
                <View style={styles.container5}>
                    <View style={styles.cont5v1}>
                        <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#1C2340' }}>
                            Dr.Deepinder Kaur Dhawan has added a new story
                        </Text>
                    </View>
                    <View style={styles.cont5v2}>
                        <View style={{ flex: 0.2, justifyContent: 'center', marginHorizontal: 5 }}>
                            <Text style={{ fontSize: height / 48, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>
                                Parenting Q&A
                            </Text>
                        </View>
                        <View style={{ flex: 0.15, justifyContent: 'flex-end', marginHorizontal: 5, flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                                Mom of a 2m old boy
                            </Text>
                            <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                                9 mins ago
                            </Text>
                        </View>
                        <View style={{ flex: 0.45, marginHorizontal: 5, }}>
                            <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555' }}>
                                I'm using lactare powder to boost my milk this is my
                                5th day bur there is no improvement present I'm
                                feeding 50ml per day remaining formula milk for my
                                2 months old baby should I still wait foe improvement
                            </Text>
                        </View>
                        <View style={{ flex: 0.2, flexDirection: 'row' }}>
                            <TouchableOpacity style={{ flex: 0.24, flexDirection: 'row', marginHorizontal: 10 }}>
                                <Image style={{ height: height / 60, width: height / 60 }}
                                    source={require('../../../assets/images/edit.png')}
                                />
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 5 }}>
                                    Answer
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flex: 0.2, flexDirection: 'row', }}>
                                <Image style={{ height: height / 50, width: height / 50 }}
                                    source={require('../../../assets/images/comments.png')}
                                />
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 5 }}>
                                    01
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cont5v3}>
                        <View style={{ flex: 0.4, flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ flex: 0.8, flexDirection: 'row', }}>
                                <View style={{ flex: 0.25, justifyContent: 'center', }}>
                                    <Image style={{ height: height / 100 * 7, width: height / 100 * 7, marginLeft: 5 }}
                                        source={require('../../../assets/images/profile.png')}
                                    />
                                </View>
                                <View style={{ flex: 0.75, justifyContent: 'space-evenly' }}>
                                    <View style={{ flex: 0.5, justifyContent: 'flex-end', }}>
                                        <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>
                                            Dr.Deepinder Kaur Dhawan
                                        </Text>
                                    </View>
                                    <View style={{ flex: 0.5, justifyContent: 'center', }}>
                                        <Text style={{ fontSize: height / 70, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                                            Obstetrician and Gynaecologist
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: 0.2, alignItems: 'center' }}>
                                <Text style={{ fontSize: height / 70, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                                    4 mins ago
                                </Text>
                            </View>
                        </View>
                        <View style={{ flex: 0.4, justifyContent: 'center', marginHorizontal: 5 }}>
                            <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555' }}>
                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                elit, sed do eiusmod tempor incididunt ut labore et
                                dolore magna aliqua. Ut enim ad minim veniam,
                                quis nostrud exercitation ullamco laboris nisi.
                            </Text>
                        </View>
                        <View style={{ flex: 0.2, marginHorizontal: 10, justifyContent: 'center' }}>
                            <TouchableOpacity onPress={() => setFavBtn(!favBtn)}>
                                {favBtn ? <Icons.FontAwesome style={[styles.cardTitleIcon, { color: Color.commoncolor }]} name="heart" /> :
                                    <Icons.FontAwesome style={[styles.cardTitleIcon, { color: '#58668c' }]} name="heart-o" />}
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.cont5v4}>
                        <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Medium', color: '#FC8181' }}>
                            Explore More in Q&A
                        </Text>
                    </View>
                </View>
                <View style={styles.container6}>
                    <View style={styles.cont6v1}>
                        <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#1C2340' }}>
                            Check out this new Memory
                        </Text>
                    </View>
                    <View style={styles.cont6v2}>
                        <View style={{ flex: 0.3, justifyContent: 'center', marginHorizontal: 10, }}>
                            <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>
                                Parenting Milestone
                            </Text>
                        </View>
                        <View style={{ flex: 0.7, flexDirection: 'row' }}>
                            <View style={{ flex: 0.8, flexDirection: 'row' }}>
                                <View style={{ flex: 0.25, justifyContent: 'center' }}>
                                    <Image style={{ height: height / 100 * 7, width: height / 100 * 7, marginLeft: 5 }}
                                        source={require('../../../assets/images/profile2.png')}
                                    />
                                </View>
                                <View style={{ flex: 0.75, justifyContent: 'space-evenly' }}>
                                    <View style={{ flex: 0.5, justifyContent: 'flex-end', }}>
                                        <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>
                                            Dr.Deepinder Kaur Dhawan
                                        </Text>
                                    </View>
                                    <View style={{ flex: 0.5 }}>
                                        <Text style={{ fontSize: height / 70, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginTop: 5 }}>
                                            Obstetrician and Gynaecologist
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: height / 70, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                                    4 mins ago
                                </Text>
                            </View>
                        </View>
                    </View>
                    <View style={styles.cont6v3}>
                        <Image style={{ height: '100%', width: '100%', resizeMode: 'cover', borderRadius: 5 }}
                            source={require('../../../assets/images/screen1.png')}
                        />
                    </View>
                    <View style={styles.cont6v4}>
                        <View style={{ flex: 0.4, justifyContent: 'space-evenly', marginLeft: 15 }}>
                            <TouchableOpacity onPress={() => setFavBtn1(!favBtn1)}>
                                {favBtn1 ? <Icons.FontAwesome style={[styles.cardTitleIcon, { color: Color.commoncolor }]} name="heart" /> :
                                    <Icons.FontAwesome style={[styles.cardTitleIcon, { color: '#58668c' }]} name="heart-o" />}
                            </TouchableOpacity>
                            <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F' }}>50 Likes</Text>
                        </View>
                        <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginRight: 15 }}>
                            <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginRight: 10 }}>50 Views</Text>
                            <TouchableOpacity>
                                <Image style={{ height: height / 50, width: height / 50, tintColor: '#8A8D9F' }}
                                    source={require('../../../assets/images/Share.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.container7}>
                    <View style={styles.cont7v1}>
                        <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#1C2340' }}>
                            Check out this new Memory
                        </Text>
                    </View>
                    <View style={styles.cont7v2}>
                        <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>
                            Parenting Milestone
                        </Text>
                    </View>
                    <View style={styles.cont7v3}>
                        <Image style={{ height: '100%', width: '100%', borderRadius: 10 }}
                            source={require('../../../assets/images/fsample1.png')}
                        />
                    </View>
                    <View style={styles.cont7v4}>
                        <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#555555' }}>
                            I'm using lactare powder to boost my milk this is my
                            5th day bur there is no improvement present I'm
                            feeding 50ml per day remaining formula milk for my
                        </Text>
                        <TouchableOpacity>
                            <Text style={{ fontSize: height / 60, fontFamily: 'Poppins-Medium', color: '#FC8181' }}>
                                Read More...
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.cont7v5}>
                        <View style={{ flex: 0.4, justifyContent: 'space-evenly', marginLeft: 15 }}>
                            <TouchableOpacity onPress={() => setFavBtn2(!favBtn2)}>
                                {favBtn2 ? <Icons.FontAwesome style={[styles.cardTitleIcon, { color: Color.commoncolor }]} name="heart" /> :
                                    <Icons.FontAwesome style={[styles.cardTitleIcon, { color: '#58668c' }]} name="heart-o" />}
                            </TouchableOpacity>
                            <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F' }}>50 Likes</Text>
                        </View>
                        <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginRight: 15 }}>
                            <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginRight: 10 }}>50 Views</Text>
                            <TouchableOpacity>
                                <Image style={{ height: height / 50, width: height / 50, tintColor: '#8A8D9F' }}
                                    source={require('../../../assets/images/Share.png')}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
                <View style={styles.container8}>
                    <View style={styles.cont8v1}>
                        <View style={{ flex: 0.8, flexDirection: 'row' }}>
                            <View style={{ flex: 0.25, justifyContent: 'center' }}>
                                <Image style={{ height: height / 100 * 7, width: height / 100 * 7, marginLeft: 5 }}
                                    source={require('../../../assets/images/profile2.png')}
                                />
                            </View>
                            <View style={{ flex: 0.75, }}>
                                <View style={{ flex: 0.5, justifyContent: 'flex-end', }}>
                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>
                                        Dr.Deepinder Kaur Dhawan
                                    </Text>
                                </View>
                                <View style={{ flex: 0.5, justifyContent: 'flex-start', }}>
                                    <Text style={{ fontSize: height / 70, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginTop: 5 }}>
                                        Obstetrician and Gynaecologist
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 70, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                                4 mins ago
                            </Text>
                        </View>
                    </View>
                    <View style={styles.cont8v2}>
                        <View style={{ flex: 0.65, borderWidth: 0.5, borderColor: '#E0E0E0', borderRadius: 10, marginHorizontal: 5, elevation: 0, flexDirection: 'row' }}>
                            <View style={{ flex: 0.3, justifyContent: 'center', alignItems: 'center' }}>
                                <Image style={{ height: height / 100 * 7, width: height / 100 * 7 }}
                                    source={require('../../../assets/images/profile2.png')}
                                />
                            </View>
                            <View style={{ flex: 0.7, alignItems: 'center', justifyContent: 'space-evenly', flexDirection: 'row' }}>
                                <TouchableOpacity>
                                    <Icons.FontAwesome name='play' style={{ fontSize: 24 }} />
                                </TouchableOpacity>
                                <Image style={{ height: height / 100 * 7, width: width / 100 * 52, resizeMode: 'contain' }}
                                    source={require('../../../assets/images/audio.png')}
                                />
                            </View>
                        </View>
                    </View>
                    <View style={styles.cont8v3}>
                        <View style={{ flex: 0.4, justifyContent: 'space-evenly', marginLeft: 15 }}>
                            <TouchableOpacity onPress={() => setFavBtn3(!favBtn3)}>
                                {favBtn3 ? <Icons.FontAwesome style={[styles.cardTitleIcon, { color: Color.commoncolor }]} name="heart" /> :
                                    <Icons.FontAwesome style={[styles.cardTitleIcon, { color: '#58668c' }]} name="heart-o" />}
                            </TouchableOpacity>
                            <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F' }}>50 Likes</Text>
                        </View>
                        <View style={{ flex: 0.6, flexDirection: 'row', justifyContent: 'flex-end', alignItems: 'center', marginRight: 15 }}>
                            <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginRight: 10 }}>50 Views</Text>
                            <TouchableOpacity>
                                <Image style={{ height: height / 50, width: height / 50, tintColor: '#8A8D9F' }}
                                    source={require('../../../assets/images/Share.png')}
                                />
                            </TouchableOpacity>
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
        height: height / 100 * 10, justifyContent: 'center', marginHorizontal: 15,
    },
    container2: {
        height: height / 100 * 25, marginHorizontal: 5,
        justifyContent: 'center', alignItems: 'center', marginTop: 10
    },
    container3: {
        height: height / 14, justifyContent: 'center', marginTop: 10
    },
    cont3view: {
        flex: 0.9, backgroundColor: '#fff2f2', marginHorizontal: 15, borderRadius: 15, justifyContent: 'center', alignItems: 'center'
    },
    cont3text: {
        fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#1C2340', textAlign: 'center'
    },
    container4: {
        height: height / 100 * 30, backgroundColor: '#FFFFFF', marginHorizontal: 10, marginTop: 10, borderRadius: 15
    },
    cont4v1: {
        flex: 0.7, flexDirection: 'row', justifyContent: 'space-evenly', alignItems: 'center'
    },
    subv1: {
        width: height / 6.9, height: height / 6.9, justifyContent: 'center', alignItems: 'center'
    },
    subv2: {
        width: height / 6.9, height: height / 6.9, justifyContent: 'center', alignItems: 'center',

    },
    subv3: {
        width: height / 6.9, height: height / 6.9, justifyContent: 'center', alignItems: 'center'
    },
    cont4v2: {
        flex: 0.3, flexDirection: 'row', justifyContent: 'space-evenly',
    },
    container5: {
        height: height / 1.4, backgroundColor: 'white', marginTop: 10, marginHorizontal: 10, borderRadius: 10
    },
    cont5v1: {
        flex: 0.1, borderBottomWidth: 1, marginHorizontal: 5, borderBottomColor: '#CCD1D1',
        justifyContent: 'center', marginHorizontal: 10
    },
    cont5v2: {
        flex: 0.4, borderBottomWidth: 1, marginHorizontal: 5, borderBottomColor: '#CCD1D1',
    },
    cont5v3: {
        flex: 0.4, borderBottomWidth: 1, marginHorizontal: 5, borderBottomColor: '#CCD1D1'
    },
    cont5v4: {
        flex: 0.1, justifyContent: 'center', alignItems: 'center'
    },
    cardTitleIcon: {
        fontWeight: 'bold',
        fontSize: height / 40,
    },
    container6: {
        height: height / 1.2, backgroundColor: 'white', marginTop: 5, marginHorizontal: 10
    },
    cont6v1: {
        flex: 0.1, borderBottomWidth: 1, marginHorizontal: 10, borderBottomColor: '#CCD1D1',
        justifyContent: 'center'
    },
    cont6v2: {
        flex: 0.2
    },
    cont6v3: {
        flex: 0.6, justifyContent: 'center', alignItems: 'center'
    },
    cont6v4: {
        flex: 0.1, flexDirection: 'row'
    },
    container7: {
        height: height / 1.3, backgroundColor: 'white', marginTop: 5, marginHorizontal: 10
    },
    cont7v1: {
        flex: 0.1, borderBottomWidth: 1, marginHorizontal: 10, borderBottomColor: '#CCD1D1',
        justifyContent: 'center'
    },
    cont7v2: {
        flex: 0.1, justifyContent: 'center', marginHorizontal: 10,
    },
    cont7v3: {
        flex: 0.5, alignItems: 'center'
    },
    cont7v4: {
        flex: 0.2, marginHorizontal: 10, justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#CCD1D1',
    },
    cont7v5: {
        flex: 0.1, flexDirection: 'row'
    },
    container8: {
        height: height / 100 * 40, backgroundColor: 'white', marginHorizontal: 10, borderRadius: 15, marginTop: 10
    },
    cont8v1: {
        flex: 0.3, marginHorizontal: 10, flexDirection: 'row'
    },
    cont8v2: {
        flex: 0.5, borderBottomWidth: 1, marginHorizontal: 10, borderBottomColor: '#CCD1D1', justifyContent: 'center'
    },
    cont8v3: {
        flex: 0.2, flexDirection: 'row'
    }
})
export default Homescreen;
import React from 'react';
import { Text, View, StyleSheet, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, Image } from 'react-native';
import Color from '../../../color/commoncolor'
import { Icons } from '../../../color/icon';
const { height, width } = Dimensions.get('window')
const Quesandanswer = ({ navigation }) => {
    const Data = [
        { id: '1', img: require('../../../assets/images/doctor.png'), },
        { id: '2', img: require('../../../assets/images/doctor.png'), }
    ]
    return (
        <SafeAreaView style={styles.maincontainer}>
            <View style={{ flex: 0.9 }}>
                <ScrollView>
                    <View style={styles.container2}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            {Data.map((item, i) => {
                                return (
                                    <TouchableOpacity key={i} style={{
                                        height: height / 3.5, width: height / 2.5, marginLeft: 10,
                                        backgroundColor: 'white',
                                    }}>
                                        <Image style={{ height: '80%', width: '100%', borderRadius: 5 }}
                                            source={item.img}>
                                        </Image>
                                        <View style={{ height: '20%', justifyContent: 'center', marginHorizontal: 5 }}>
                                            <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Medium', color: '#0C0B52', textAlign: 'center' }}>
                                                Post your Questions Here and get
                                                Solutions from Doctor
                                            </Text>
                                        </View>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                    <View style={styles.container3}>
                        <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Medium', color: '#0C0B52', marginLeft: 20 }}>
                            Here is a question for you
                        </Text>
                    </View>
                    <View style={styles.container4}>
                        <View style={styles.cont4v1}>
                            <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                                Mom of a 3 Yr 2 M Old Boy
                            </Text>
                            <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Medium', color: '#555555' }}>
                                Q. Hello Mam plz tell me this result is positive or negative just i'm confused
                            </Text>
                        </View>
                        <View style={styles.cont4v2}>
                            <Image style={{ height: '100%', width: '100%', borderRadius: 10 }}
                                source={require('../../../assets/images/test.png')}>
                            </Image>
                        </View>
                        <View style={styles.cont4v3}>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: height / 50, width: height / 50, tintColor: Color.commoncolor, marginBottom: 5 }}
                                    source={require('../../../assets/images/edit.png')}
                                />
                                <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 5 }}>
                                    Answer
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginRight: 10 }}>
                                <Icons.AntDesign name='plussquareo' style={{ fontSize: height / 40, color: '#FC8181' }} />
                                <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 5 }}>
                                    Follow
                                </Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={{ alignItems: 'center', justifyContent: 'center' }}>
                                <Image style={{ height: height / 40, width: height / 40, tintColor: Color.commoncolor }}
                                    source={require('../../../assets/images/Share.png')}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={styles.cont4v4}>
                            <View style={{ flex: 0.8, flexDirection: 'row' }}>
                                <View style={{ flex: 0.25, justifyContent: 'center', }}>
                                    <Image style={{ height: height / 100 * 7, width: height / 100 * 7, marginLeft: 5 }}
                                        source={require('../../../assets/images/profile.png')}
                                    />
                                </View>
                                <View style={{ flex: 0.75, }}>
                                    <View style={{ flex: 0.5, justifyContent: 'flex-end', }}>
                                        <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>
                                            Dr. Hemendra Gupta
                                        </Text>
                                    </View>
                                    <View style={{ flex: 0.5, justifyContent: 'flex-start', }}>
                                        <Text style={{ fontSize: height / 70, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginTop: 5 }}>
                                            Paediatrician
                                        </Text>
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: height / 70, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                                    1 Yr ago
                                </Text>
                            </View>
                        </View>
                        <View style={styles.cont4v5}>
                            <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                                A. I would suggest you to consult with your treating
                                gynecologist about this query of yours to have a precise
                                answer about this so take csre and all the best for you
                            </Text>
                            <Text style={{ fontSize: height / 60, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>
                                2 More Answers
                            </Text>
                        </View>
                    </View>
                    <View style={{ height: height / 100 * 1 }}></View>
                </ScrollView>
            </View>
            <View style={{ flex: 0.1, }}>
                <TouchableOpacity onPress={() => navigation.navigate('Details1')}
                    style={{
                        height: height / 12.6, width: width, backgroundColor: Color.commoncolor, borderTopLeftRadius: 10,
                        borderTopRightRadius: 10, justifyContent: 'center', alignItems: 'center', flexDirection: 'row', alignItems: 'center'
                    }}>
                    <Image style={{ height: height / 50, width: height / 50, tintColor: '#FFFFFF', marginBottom: 5 }}
                        source={require('../../../assets/images/edit.png')}
                    />
                    <Text style={{ fontSize: height / 41, fontFamily: 'Poppins-Medium', color: '#FFFFFF', marginLeft: 10 }}>
                        ASK A QUESTION
                    </Text>
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
        height: height / 100 * 10, justifyContent: 'center', marginHorizontal: 15,
    },
    container2: {
        height: height / 3.5, marginTop: 5, flexDirection: 'row'
    },
    container3: {
        height: height / 16, backgroundColor: '#fae8ed', marginTop: 10, marginHorizontal: 10, borderRadius: 10,
        justifyContent: 'center'
    },
    container4: {
        height: height / 1.3, marginHorizontal: 10, backgroundColor: 'white', borderRadius: 10, marginTop: 10
    },
    cont4v1: {
        flex: 0.16, marginHorizontal: 10, justifyContent: 'center'
    },
    cont4v2: {
        flex: 0.34, justifyContent: 'center', alignItems: 'center'
    },
    cont4v3: {
        flex: 0.1, borderBottomColor: '#CCD1D1', borderBottomWidth: 1, flexDirection: 'row', justifyContent: 'space-between',
        marginHorizontal: 15
    },
    cont4v4: {
        flex: 0.15, flexDirection: 'row',
    },
    cont4v5: {
        flex: 0.25, marginHorizontal: 10, justifyContent: 'space-evenly'
    },
    container5: {
        height: height / 100 * 10, justifyContent: 'center', alignItems: 'center'
    }
})
export default Quesandanswer;

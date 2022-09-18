import React from 'react';
import {Text, View, StyleSheet, ScrollView, Dimensions, Image, TouchableOpacity, TouchableWithoutFeedback} from 'react-native';
import Color from '../../../color/commoncolor';
const { height, width } = Dimensions.get('window');
const ReadDetails = ({ navigation }) => {
    const Data = [
        {
            id: '1', title: 'Importance of Tummy Time For Babies',
            description: 'While there is a lot of focus on the right nap time, feeding time and bath time, tummy time importance...',
            date: 'March 21, 2022', detail: 'BABY',
            imagre: require('../../../assets/images/read1.png')
        },
        {
            id: '1', title: `7 Ways to Aid Your Baby's Ability to Reason`,
            description: `In Collaboration with Nestle Star Healthy Stay Healthy. A Baby's world is fascinating....`,
            date: 'March 21, 2022', detail: 'BABY',
            imagre: require('../../../assets/images/read2.png')
        }
    ]
    return (
        <View style={styles.maincontainer}>
            <ScrollView>
                <View style={styles.container1}>
                <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}
                    style={{
                       height: height / 17, width: width / 2, backgroundColor: '#EEEEEE', borderTopLeftRadius: height/10, borderBottomLeftRadius: height/10,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                    <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F', }}>
                        SHOPPING
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                   height: height / 17, width: width / 2, backgroundColor: Color.commoncolor, borderTopLeftRadius: height/10, borderBottomLeftRadius: height/10,
                    borderTopRightRadius: height/10, borderBottomRightRadius: height/10, position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', }}>
                        PARENTING
                    </Text>
                </TouchableOpacity>
                </View>
                {Data.map((val, i) => {
                    return (
                        <TouchableWithoutFeedback key={i} onPress={() => navigation.navigate('Detail')}>
                            <View style={styles.container2}>
                                <View style={styles.view1}>
                                    <Image style={{ height: '100%', width: '100%',borderRadius:8 }}
                                        source={require('../../../assets/images/read1.png')}
                                    />
                                </View>
                                <View style={styles.view2}>
                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginBottom: 2 }}>
                                        {val.detail}
                                    </Text>
                                    <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: '#1C2340', }}>
                                        {val.title}
                                    </Text>
                                </View>
                                <View style={styles.view3}>
                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                                        {val.description}
                                    </Text>
                                </View>
                                <View style={styles.view4}>
                                    <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
                                        {val.date}
                                    </Text>
                                </View>
                            </View>
                        </TouchableWithoutFeedback>
                    )
                })}
                <View style={{ height: height / 100 * 2 }}></View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Color.background
    },
    buttonLeft: {
        width: height / 100 * 5
    },
    leftIcon: {
        color: '#1C2340',
        fontSize: height / 40,
    },
    container1: {
        height: height / 100 * 6, justifyContent: 'center', marginHorizontal: 15,marginTop:10
    },
    container2: {
        height: height / 2, backgroundColor: 'white', marginTop: 10, marginHorizontal: 10,
        borderRadius: 10,elevation:3
    },
    view1: {
        flex: 0.6,
    },
    view2: {
        flex: 0.15, marginHorizontal: 15, justifyContent: 'flex-end'
    },
    view3: {
        flex: 0.15, marginHorizontal: 15, justifyContent: 'flex-end'
    },
    view4: {
        flex: 0.1, marginHorizontal: 15, justifyContent: 'center', alignItems: 'flex-end'
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
export default ReadDetails;
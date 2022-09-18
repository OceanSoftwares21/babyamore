import React from 'react';
import { Text, View, StyleSheet, Dimensions, TouchableOpacity, TextInput } from 'react-native';
import Color from '../../../color/commoncolor';
import { Icons } from '../../../color/icon';
const { height, width } = Dimensions.get('window');
const QandAnswer = ({ navigation }) => {
    const [inputvalue, setValues] = React.useState('')
    return (
        <View style={styles.maincontainer}>
            <View style={styles.container1}>
                <TouchableOpacity onPress={() => navigation.navigate('MainScreen')}
                    style={{
                        height: height / 17, width: width / 2, backgroundColor: '#EEEEEE', borderTopLeftRadius: height / 10, borderBottomLeftRadius: height / 10,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                    <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F', }}>
                        SHOPPING
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                    height: height / 17, width: width / 2, backgroundColor: Color.commoncolor, borderTopLeftRadius: height / 10, borderBottomLeftRadius: height / 10,
                    borderTopRightRadius: height / 10, borderBottomRightRadius: height / 10, position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', }}>
                        PARENTING
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container2}>
                <View style={{ flex: 0.85 }}>
                    <TextInput placeholder='Write Your Question'
                        multiline={true}
                        value={inputvalue}
                        style={{
                            fontSize: height / 51, fontFamily: 'Poppins-Regular', color: '#8A8D9F',
                            marginLeft: 15, marginTop: 10
                        }}
                        onChangeText={(text) => {
                            setValues(text)
                        }}
                    />
                </View>
                <View style={{ flex: 0.15, flexDirection: 'row' }}>
                    <TouchableOpacity style={{ flex: 0.4, alignItems: 'center', flexDirection: 'row', justifyContent: 'center' }}>
                        <Icons.Entypo name='attachment' style={{ fontSize: height / 40, color: Color.commoncolor }} />
                        <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Regular', color: Color.commoncolor, marginLeft: 5 }}>
                            Attachments
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.container3}>
                <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: height / 62.7, fontFamily: 'Poppins-Regular', color: '#8A8D9F', }}>
                        Your Identity will not received
                    </Text>
                </View>
                <TouchableOpacity onPress={() => navigation.navigate('Ques&ans')}
                    style={{
                        height: height / 15, width: height / 4.5, backgroundColor: Color.commoncolor, borderRadius: 40,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                    <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', }}>
                        POST
                    </Text>
                </TouchableOpacity>
            </View>
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
        height: height / 100 * 6, justifyContent: 'center', marginHorizontal: 15, marginTop: 10,
    },
    container2: {
        height: height / 100 * 58, backgroundColor: 'white', marginHorizontal: 10, marginTop: 10,
        borderRadius: 10,
    },
    container3: {
        height: height / 100 * 20, alignItems: 'center', justifyContent: 'space-evenly'
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
export default QandAnswer;
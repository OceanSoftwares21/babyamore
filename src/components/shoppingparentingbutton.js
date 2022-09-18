import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Dimensions } from 'react-native';
import Color from '../color/commoncolor'
const { height, width } = Dimensions.get('window')

const Shoppingparentingbutton = (props) => {
    // console.log(props);
    return (
        <View style={styles.buttonview}>
            <TouchableOpacity onPress={() => props.props.navigate('Parenting', { screen: 'Home1' })}
                style={styles.parentingbuttonview}>
                <Text style={styles.parentingbuttontext}> PARENTING</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>props.props.navigate('MainScreen')}
                style={styles.shoppingbuttonview}>
                <Text style={styles.shoppingbuttontext}>SHOPPING</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    buttonview: {
        height: height / 100 * 6, justifyContent: 'center', marginHorizontal: 15, marginTop: 10,
    },
    parentingbuttonview: {
        height: height / 17, width: width / 2, backgroundColor: '#EEEEEE', borderTopRightRadius: height / 10, borderBottomRightRadius: height / 10,
        position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center'
    },
    shoppingbuttonview: {
        height: height / 17, width: width / 2, backgroundColor: Color.commoncolor, borderTopLeftRadius: height / 10, borderBottomLeftRadius: height / 10,
        justifyContent: 'center', alignItems: 'center', borderTopRightRadius: height / 10, borderBottomRightRadius: height / 10,
    },
    parentingbuttontext: {
        fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F',
    },
    shoppingbuttontext: {
        fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF',
    },
})
export default Shoppingparentingbutton;
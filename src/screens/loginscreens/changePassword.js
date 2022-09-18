import React from 'react';
import {
    Text, View, StyleSheet, ScrollView,
    Dimensions, TextInput, TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Entypo';
import colors from '../../color/commoncolor';
const { height, width } = Dimensions.get('window')
const ChangePassword = ({navigation}) => {
    return (
        <View style={styles.maincontainer}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ height: height /5 }}></View>
                <View style={styles.container1}>
                    <View style={styles.cont1view1}>
                        <Text style={styles.cont1text1}>Set your new Password</Text>
                    </View>
                    <View style={styles.cont1view3}>
                        <Text style={styles.cont1view3text}>Password</Text>
                        <View style={styles.cont1view3subview}>
                            <View style={{ width: "85%", justifyContent: 'center' }}>
                                <TextInput
                                    style={{ fontSize: 18, fontWeight: '800', marginLeft: 15 }}
                                    placeholder="Password"
                                />
                            </View>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="eye" size={30} color="#A4AEB4" />
                            </View>
                        </View>

                    </View>
                    <View style={styles.cont1view4}>
                    <Text style={styles.cont1view3text}>Confirm Password</Text>
                        <View style={styles.cont1view4subview}>
                            <View style={{ width: "85%", justifyContent: 'center' }}>
                                <TextInput
                                    style={{ fontSize: 18, fontWeight: '800', marginLeft: 15 }}
                                    placeholder="Confirm Password"
                                />
                            </View>
                            <View style={{ width: '15%', justifyContent: 'center', alignItems: 'center' }}>
                                <Icon name="eye" size={30} color="#A4AEB4" />
                            </View>
                        </View>

                    </View>
                    <View style={styles.cont1view5}>
                        <TouchableOpacity onPress={()=>navigation.navigate('Accountscreen')}
                        style={{height:'60%', width:'60%',backgroundColor: '#fc8181', marginHorizontal: 30, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: 22, fontWeight: '500', color: 'white' }}>Save Password!</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor:colors.background
    },
    container1: {
        height: height /2, backgroundColor: 'white', marginHorizontal: 20, borderRadius: 15
    },
    cont1view1: {
        flex: 0.2, justifyContent: 'center', alignItems: 'center'
    },
    cont1text1: {
        fontSize:22,fontWeight:'bold',color:colors.commoncolor
    },
    cont1view2: {
        flex: 0.2, justifyContent: 'center'
    },
    cont1view2subview: {
        flex: 0.6, backgroundColor: '#D8E5ED',
        marginHorizontal: 25, borderRadius: 30, flexDirection: 'row'
    },
    cont1view3: {
        flex: 0.3, justifyContent: 'center',
    },
    cont1view3subview: {
        flex: 0.7, backgroundColor: '#D8E5ED',
        marginHorizontal: 25, borderRadius: 30, flexDirection: 'row'
    },
    cont1view4: {
        flex: 0.3,justifyContent:'center'
    },
    cont1view4subview: {
        flex: 0.7, backgroundColor: '#D8E5ED',
        marginHorizontal: 25, borderRadius: 30, flexDirection: 'row'
    },
    cont1view5:{
        flex: 0.2, justifyContent: 'center',alignItems:'center'
    },
    cont1view3text:{
        fontSize:20,marginLeft:40,fontWeight:'500',
    }
})
export default ChangePassword;
import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Dimensions, View } from "react-native";
import Colors from '../../color/commoncolor'
const { height, width } = Dimensions.get('window')
const Snackbarscreen = (props) => {
    console.log('aaaa', props);
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View style={{ flex: 1 }}>
            <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <View style={{ flex: 0.5, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#15294B' }}>Are You Sure </Text>
                            <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#15294B' }}>you want to sign out ?</Text>
                        </View>
                        <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' }}>
                            <TouchableOpacity onPress={() => setModalVisible(false)}
                                style={{ height: height / 18.7, width: height / 5.7, backgroundColor: '#fff2f2', borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Medium', color: '#FC8181' }}>Cancel</Text>
                            </TouchableOpacity>
                            <TouchableOpacity onPress={() => navigation.navigate('Loginscreen')}
                                style={{ height: height / 18.7, width: height / 5.7, backgroundColor: colors.commoncolor, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF' }}>Sure</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    );
};

const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        backgroundColor: 'rgba(28,35,64,0.8)',
        justifyContent: 'center',
        alignItems: 'center',
        // marginTop: 22,
    },
    modalView: {
        height: height / 100 * 25,
        width: height / 100 * 40,
        backgroundColor: 'white',
        borderRadius: 10,

        // shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

});

export default Snackbarscreen;
import React from 'react';
import {
    Text, View, StyleSheet, SafeAreaView, ScrollView,
    Dimensions, TextInput, TouchableOpacity, Modal, Pressable
} from 'react-native';
import colors from '../../color/commoncolor';

const { height, width } = Dimensions.get('window')

const Forgetpassword = ({ navigation }) => {
    const [modalVisible, setModalVisible] = React.useState(false);
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView style={{ flex: 1 }}>
                <View style={{ height: height / 25 }}></View>
                <View style={styles.container1}>
                    <View style={styles.cont1view1}>
                        <Text style={styles.cont1text1}>We will send a mail to the email address yoy register to regain your password</Text>
                    </View>
                    <View style={styles.cont1view2}>
                        <View style={styles.cont1view2subview}>
                            <TextInput
                                style={{ fontSize: 18, fontWeight: '800', marginLeft: 10 }}
                                placeholder="Email Address"
                            />
                        </View>
                    </View>
                    <View style={styles.cont1view3}>
                        <Text style={styles.cont1view3text}>email send to ex******@gmail.com</Text>
                    </View>

                    <View style={{ flex: 0.15 }}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible}
                            onRequestClose={() => {
                                Alert.alert("Modal has been closed.");
                                setModalVisible(!modalVisible);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <View style={{ height: '25%', width: '100%', backgroundColor: '#fc8181', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 18, color: 'white', fontWeight: '500' }}>Password Reset Email Send</Text>
                                    </View>
                                    <View style={{ height: '55%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 18, color: 'black', textAlign: 'center', letterSpacing: 2 }}>An email has been sent to you Follow direction in the email to reset password</Text>
                                    </View>
                                    <View style={{ height: '20%', width: '40%', justifyContent: 'center' }}>
                                        <Pressable
                                            style={[styles.button, styles.buttonClose]}
                                            onPress={() => { setModalVisible(!modalVisible), navigation.navigate('Changepassword') }}
                                        >
                                            <Text style={styles.textStyle}>Ok</Text>
                                        </Pressable>
                                    </View>

                                </View>
                            </View>
                        </Modal>
                        <TouchableOpacity style={{ flex: 0.4, backgroundColor: '#fc8181', marginHorizontal: 30, borderRadius: 30, justifyContent: 'center', alignItems: 'center' }}
                            onPress={() => setModalVisible(true)}>
                            <Text style={{ fontSize: 22, fontWeight: '500', color: 'white' }}>Send</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: colors.background
    },
    container1: {
        height: height / 1.3, backgroundColor: 'white', marginHorizontal: 20, borderRadius: 15
    },
    cont1view1: {
        flex: 0.4, justifyContent: 'center', alignItems: 'center', marginHorizontal: 20
    },
    cont1text1: {
        fontSize: 18, letterSpacing: 4, textAlign: 'center', fontWeight: '400',
    },
    cont1view2: {
        flex: 0.3, justifyContent: 'center'
    },
    cont1view2subview: {
        flex: 0.4, backgroundColor: '#D8E5ED', marginHorizontal: 25,
        borderRadius: 30, justifyContent: 'center'
    },
    cont1view3: {
        flex: 0.15, alignItems: 'center'
    },
    cont1view3text: {
        fontSize: 18, fontWeight: '800'
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    modalView: {
        backgroundColor: "white",
        borderRadius: 15,
        height: '40%',
        width: '80%',
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        height: '60%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonClose: {
        backgroundColor: "#fc8181",
    },
})
const styless = StyleSheet.create({


    buttonOpen: {
        backgroundColor: "#F194FF",
    },

    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    }
});
export default Forgetpassword;
import React from 'react';
import {
    Text, View, SafeAreaView, StyleSheet, ScrollView,
    Dimensions, TouchableOpacity, Image, TouchableWithoutFeedback, Modal
} from 'react-native';
import Icon2 from 'react-native-vector-icons/AntDesign';

const { height, width } = Dimensions.get('window')
var Windowheight = height;

const Modalview = ({ val, ...props }) => {
    const [modalVisible, setModalVisible] = React.useState(true);
    React.useEffect(() => {
        setModalVisible(val)
    }, [])
    React.useEffect(() => {
        var timeoutVariable
        timeoutVariable = setTimeout(() => {
            setModalVisible(false)
            sendDataToParent(false)
        }, 2000)

    }, [])
    const sendDataToParent = (index) => {
        props.receiveDataFromChild(index);
    }

    return (
        <Modal
            animationType='fade'
            transparent={true}
            visible={modalVisible}>
            <View style={styles.centeredView}>
                <View style={styles.modalView}>
                    <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'center' }}>
                        <Icon2 name='checkcircle' style={{ fontSize: height / 30, color: 'white' }} />
                    </View>
                    <View style={{ flex: 0.75, justifyContent: 'center' }}>
                        <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#FFFFFF' }}>
                            {/* Bambo Nature Biodegradable Wet Wipes */}
                            Item added to your cart
                        </Text>
                        {/* <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#FFFFFF', textAlign: 'center' }}>
                            has been added to your cart
                        </Text> */}
                    </View>
                </View>
            </View>
        </Modal>
    );
}
const styles = StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
    },
    modalView: {
        height: height / 12.4,
        width: width - 15,
        marginBottom: 10,
        backgroundColor: '#FC8181',
        borderRadius: 5,
        elevation: 5,
        flexDirection: 'row'
    },

})
export default Modalview;
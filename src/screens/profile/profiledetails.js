import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ScrollView, TextInput, Image, KeyboardAvoidingView } from 'react-native';
import Colors from '../../color/commoncolor';
import * as ImagePicker from 'react-native-image-picker';
import { Icons } from '../../color/icon';
import { useSelector, useDispatch } from 'react-redux';
const { height, width } = Dimensions.get('window');
const Profiledetails = (props) => {
    const [input1, setinput1] = React.useState([]);
    const [filePath, setFilePath] = React.useState();
    const [val, setvalue] = React.useState(false);
    const value = useSelector(state => console.log('val!!!!', state.value))
    const chooseFile = () => {
        let options = {
            title: 'Select Image',
            customButtons: [
                {
                    name: 'customOptionKey',
                    title: 'Choose Photo from Custom Option'
                },
            ],
            storageOptions: {
                skipBackup: true,
                path: 'images',
            },
        };
        ImagePicker.launchImageLibrary(options, (response) => {
            console.log('Response = ', response);

            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('ImagePicker Error: ', response.error);
            } else if (response.customButton) {
                console.log(
                    'User tapped custom button: ',
                    response.customButton
                );
                alert(response.customButton);
            } else {
                setFilePath(response.assets[0].uri)
                setvalue(true)
            }
        });
    };
    const handletext = (text) => {
        setinput1(text)
    }
    const handleclick = () => {
        props.navigation.navigate('Profilescreen')
    }
    return (
        <SafeAreaView style={styles.maincontainer}>
            <ScrollView>
                <KeyboardAvoidingView enabled>
                    <View style={{ height: height / 100 * 8, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>Profile Detail</Text>
                    </View>
                    <View style={styles.container1}>
                        <View style={styles.cont1view}>
                            <View style={styles.view1}>
                                <TouchableOpacity onPress={() => chooseFile()}>
                                    {val ?
                                        <Image style={{ height: height / 6.2, width: height / 6.2, borderRadius: 100, }}
                                            source={{ uri: filePath }}
                                        /> :
                                        <Image style={{ height: height / 6.2, width: height / 6.2, borderRadius: 100 }}
                                            source={require('../../assets/images/profileicon.png')} />
                                    }
                                </TouchableOpacity>
                            </View>
                            <View style={{ alignItems: 'center' }}>
                                <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Bold', color: '#1C2340' }}>Jhon Smith</Text>
                            </View>
                            <View style={styles.view2}>
                                <View style={styles.input}>
                                    <TextInput
                                        style={{
                                            fontSize: height / 58, fontFamily: 'Poppins-Regular', textAlign: 'left',
                                            marginLeft: 15, color: '#888C9B', width: '70%'
                                        }}
                                        placeholder="Enter Your Name"
                                        onChangeText={(text) => { handletext(text) }}
                                    />
                                    <View style={{ width: '10%', justifyContent: 'center' }}>
                                        <Icons.EvilIcons style={{ fontSize: height / 32, color: '#8A8D9F' }} name="pencil" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.view2}>
                                <View style={styles.input}>
                                    <TextInput style={{
                                        fontSize: height / 58, fontFamily: 'Poppins-Regular', textAlign: 'left',
                                        marginLeft: 15, color: '#888C9B', width: '70%'
                                    }}
                                        placeholder="Enter Your Number" />
                                    <View style={{ width: '10%', justifyContent: 'center' }}>
                                        <Icons.EvilIcons style={{ fontSize: height / 32, color: '#8A8D9F' }} name="pencil" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.view2}>
                                <View style={styles.input}>
                                    <TextInput
                                        style={{
                                            fontSize: height / 58, fontFamily: 'Poppins-Regular', textAlign: 'left',
                                            marginLeft: 15, color: '#888C9B', width: '70%'
                                        }}
                                        placeholder="youremail@website.com"
                                    />
                                    <View style={{ width: '10%', justifyContent: 'center' }}>
                                        <Icons.EvilIcons style={{ fontSize: height / 32, color: '#8A8D9F' }} name="pencil" />
                                    </View>
                                </View>
                            </View>
                            <View style={styles.view2}>
                                <View style={styles.input}>
                                    <TextInput
                                        style={{
                                            fontSize: height / 58, fontFamily: 'Poppins-Regular', textAlign: 'left',
                                            marginLeft: 15, color: '#555555', width: '70%'
                                        }}
                                        placeholder="Enter Your Address"
                                    />
                                    <View style={{ width: '10%', justifyContent: 'center' }}>
                                        <Icons.EvilIcons style={{ fontSize: height / 32, color: '#8A8D9F' }} name="pencil" />
                                    </View>
                                </View>
                            </View>
                            <View style={{ flex: 0.1, alignItems: 'center' }}>
                                <TouchableOpacity onPress={() => { handleclick() }}
                                    style={{ height: height / 16, width: height / 3.7, backgroundColor: '#fc8181', marginHorizontal: width / 5, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                                    <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-Medium', color: 'white' }}>Save Now</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </ScrollView>
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    maincontainer: {
        flex: 1, backgroundColor: Colors.background
    },
    buttonStyle: {
        backgroundColor: '#b8baba',
        borderRadius: height / 81,
        margin: 5
    },
    subText2: {
        color: '#ffffff',
        padding: height / 81,
        fontSize: 20,
        margin: 'auto',
    },
    buttonLeft: {
        width: height / 100 * 5
    },
    leftIcon: {
        color: '#1C2340', fontSize: height / 40,
    },
    container1: {
        height: height / 1.13, justifyContent: 'center'
    },
    cont1view: {
        flex: 0.99, backgroundColor: 'white', marginHorizontal: 15, borderRadius: 15
    },
    view1: {
        flex: 0.3, justifyContent: 'center', alignItems: 'center'
    },
    view2: {
        flex: 0.15, justifyContent: 'center'
    },
    input: {
        width: '95%', height: '60%', justifyContent: 'space-between',
        backgroundColor: '#F4F5F7', borderRadius: 15, flexDirection: 'row', marginHorizontal: 10
    },
})
export default Profiledetails;
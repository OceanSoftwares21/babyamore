import React from 'react';
import {
  View, Text, SafeAreaView, TouchableOpacity, Dimensions,
  Image, StyleSheet, Modal, ImageBackground
} from 'react-native';
import colors from '../../color/commoncolor';
import * as ImagePicker from 'react-native-image-picker';
import { AuthContext } from './context';
import { useSelector } from 'react-redux';
const { height, width } = Dimensions.get('window')

const DrawerContent = ({ navigation }) => {
  var { signOut } = React.useContext(AuthContext)
  const [modalVisible, setModalVisible] = React.useState(false);
  const [filePath, setFilePath] = React.useState(''); 
  const [val, setvalue] = React.useState(false);

  var uservalue = useSelector((res) => res.value)
  const userprofile = useSelector((res) => { return res.profilepic })
  console.log(uservalue, 'drawerrrrrrr')
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
      // console.log('Response = ', response);
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
        let source = { uri: 'data:image/jpeg;base64,' + response.data };
        setFilePath(response.assets[0].uri)
        setvalue(true)
      }
    });
  };
 // console.log(userprofile.length);
  return (
    <SafeAreaView style={{ flex: 1, borderTopRightRadius: 10, justifyContent: 'center' }}>
      <View style={{ flex: 1, borderTopRightRadius: 10 }}>
        <View style={{ flex: 0.2, borderTopRightRadius: 10 }}>
          <ImageBackground source={require('../../assets/images/profilebackgroung.jpg')} imageStyle={{ borderBottomLeftRadius: 10, borderBottomRightRadius: 10, borderTopRightRadius: 10 }}
            style={{ height: '100%', width: '100%' }}>
            <View style={{ flex: 0.7, justifyContent: 'center', marginHorizontal: 10 }}>
              <TouchableOpacity onPress={() => chooseFile()} style={{
                flex: 1, justifyContent: 'center', marginHorizontal: 10
              }}>
                {userprofile.length > 0 ?
                  <Image style={{ height: height / 12.4, width: height / 12.4, borderRadius: 50, }}
                    source={{ uri: userprofile }}
                  />
                  :
                  <Image style={{ height: height / 12.4, width: height / 12.4, borderRadius: 50, }}
                    source={require('../../assets/images/profileicon.png')} />
                }
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.3, marginHorizontal: 10 }}>
              <Text style={{ fontSize: height / 37, fontFamily: 'Poppins-SemiBold', color: 'white' }}>@{uservalue?.Name}</Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ flex: 0.08, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => navigation.navigate('Home')}
            style={{ flex: 0.9, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'flex-end' }}>
              <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Image style={{ height: height / 20, width: height / 20 }}
                  source={require('../../assets/images/home.png')}
                />
              </View>
            </View>
            <View style={{ flex: 0.6, justifyContent: 'center' }}>
              <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Medium', color: '#555555', marginLeft: 15 }}>Home</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.08, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => { navigation.closeDrawer(), navigation.navigate('Childstack', { screen: 'Notification' }) }}
            style={{ flex: 0.9, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'flex-end' }}>
              <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Image style={{ height: height / 20, width: height / 20 }}
                  source={require('../../assets/images/notification.png')}
                />
              </View>
            </View>
            <View style={{ flex: 0.7, justifyContent: 'center' }}>
              <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Medium', marginLeft: 15, color: '#555555' }}>Notifications</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.08, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => { navigation.closeDrawer(), navigation.navigate('Childstack', { screen: 'Myorderscreen' }) }}
            style={{ flex: 0.9, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'flex-end' }}>
              <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Image style={{ height: height / 20, width: height / 20 }}
                  source={require('../../assets/images/orders.png')}
                />
              </View>
            </View>
            <View style={{ flex: 0.6, justifyContent: 'center' }}>
              <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Medium', marginLeft: 15, color: '#555555' }}>My orders</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.08, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => { navigation.closeDrawer(), navigation.navigate('Childstack', { screen: 'Ordertrackscreen' }) }}
            style={{ flex: 0.9, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'flex-end' }}>
              <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Image style={{ height: height / 20, width: height / 20 }}
                  source={require('../../assets/images/trackorder.png')}
                />
              </View>
            </View>
            <View style={{ flex: 0.6, justifyContent: 'center' }}>
              <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Medium', marginLeft: 15, color: '#555555' }}>Track order</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.08, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => { navigation.closeDrawer(), navigation.navigate('Childstack', { screen: 'Paymentscreen' }) }}
            style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'flex-end' }}>
              <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Image style={{ height: height / 20, width: height / 20 }}
                  source={require('../../assets/images/payment.png')}
                />
              </View>
            </View>
            <View style={{ flex: 0.6, justifyContent: 'center', }}>
              <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Medium', color: '#555555', marginLeft: 15 }}>Payment</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.08, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => { navigation.closeDrawer(), navigation.navigate('Wistlistscreen') }}
            style={{ flex: 0.9, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'flex-end' }}>
              <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Image style={{ height: height / 20, width: height / 20 }}
                  source={require('../../assets/images/wishlist.png')}
                />
              </View>
            </View>
            <View style={{ flex: 0.6, justifyContent: 'center' }}>
              <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Medium', marginLeft: 15, color: '#555555' }}>Wishlist</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.08, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => { navigation.closeDrawer(), navigation.navigate('Childstack', { screen: 'Offerscreen' }) }}
            style={{ flex: 0.9, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'flex-end' }}>
              <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Image style={{ height: height / 20, width: height / 20 }}
                  source={require('../../assets/images/offers.png')}
                />
              </View>
            </View>
            <View style={{ flex: 0.6, justifyContent: 'center' }}>
              <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Medium', marginLeft: 15, color: '#555555' }}>Offers</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.08, justifyContent: 'center' }}>
          <TouchableOpacity onPress={() => { navigation.closeDrawer(), navigation.navigate('Childstack', { screen: 'Blogscreen' }) }}
            style={{ flex: 0.9, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'flex-end' }}>
              <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Image style={{ height: height / 20, width: height / 20 }}
                  source={require('../../assets/images/blogs.png')}
                />
              </View>
            </View>
            <View style={{ flex: 0.6, justifyContent: 'center' }}>
              <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Medium', marginLeft: 15, color: '#555555' }}>Blogs</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.08, justifyContent: 'center' }}>
          <TouchableOpacity
            style={{ flex: 0.9, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'flex-end' }}>
              <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Image style={{ height: height / 20, width: height / 20 }}
                  source={require('../../assets/images/setting.png')}
                />
              </View>
            </View>
            <View style={{ flex: 0.6, justifyContent: 'center' }}>
              <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Medium', marginLeft: 15, color: '#555555' }}>Settings</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={{ flex: 0.08, justifyContent: 'center', }}>
          <TouchableOpacity onPress={() => { navigation.closeDrawer(), setModalVisible(true) }}
            style={{ flex: 0.9, flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ flex: 0.25, justifyContent: 'center', alignItems: 'flex-end' }}>
              <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center', marginRight: 10 }}>
                <Image style={{ height: height / 20, width: height / 20 }}
                  source={require('../../assets/images/logout.png')}
                />
              </View>
            </View>
            <View style={{ flex: 0.6, justifyContent: 'center' }}>
              <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Medium', marginLeft: 15, color: '#555555' }}>Logout</Text>
            </View>
          </TouchableOpacity>
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
                  <TouchableOpacity onPress={() => signOut()
                    //navigation.navigate('Login', { screen: 'Loginscreen' }), setModalVisible(false) }
                  }
                    style={{ height: height / 18.7, width: height / 5.7, backgroundColor: colors.commoncolor, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF' }}>Sure</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </Modal>
        </View>
      </View>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    backgroundColor: 'rgba(28,35,64,0.8)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    height: height / 100 * 25,
    width: height / 100 * 40,
    backgroundColor: 'white',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

})
export default DrawerContent;
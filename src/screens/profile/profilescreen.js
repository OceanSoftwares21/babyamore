import React from 'react';
import { Text, View, SafeAreaView, StyleSheet, Dimensions, TouchableOpacity, ScrollView,
   Image ,ImageBackground,Modal} from 'react-native';
import Colors from '../../color/commoncolor'
import Icon from 'react-native-vector-icons/Entypo';
import Icon1 from 'react-native-vector-icons/MaterialCommunityIcons';
import * as ImagePicker from 'react-native-image-picker';
import {Userprofile}  from '../redux/action/action';
import { AuthContext } from '../stack/context';
import { useSelector,useDispatch } from 'react-redux';
const { height, width } = Dimensions.get('window');
const Profilescreen = ({navigation}) => {
  const dispatch=useDispatch();
   const [modalVisible, setModalVisible] = React.useState(false);
   var { signOut } = React.useContext(AuthContext)
  const [filePath, setFilePath] =React. useState('');
  const [val, setvalue] =React. useState(false);
  React.useEffect(()=>{
    if (filePath.length>0) {
      dispatch(Userprofile(filePath))
    }
  },[filePath])
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
     let v= response.assets[0].uri
      setFilePath(response.assets[0].uri)
       setvalue(true)
      }
    });
  };
  var uservalue = useSelector((res) => res.value)
  const userprofile=useSelector((res)=>{return res.profilepic})
  return (
    <SafeAreaView style={styles.maincontainer}>
      <ScrollView>
      <View style={{height: height / 100 * 8,justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>My Profile</Text>
      </View>
        <View style={styles.container1}>
          <View style={styles.cont1view}>
          <ImageBackground source={require('../../assets/images/profilebackgroung.jpg')} imageStyle={{borderRadius:10}}
            style={{height:'100%',width:'100%', borderRadius: 15, flexDirection: 'row',}}>
            <View style={{ flex: 0.45, justifyContent: 'center', alignItems: 'center', }}>
             {userprofile.length>0 ?
               <Image style={{ height: height /6.2, width: height /6.2, borderRadius: 100,}}
                   source={{uri:userprofile}} 
               />:
                <Image style={{ height: height / 6.2, width: height / 6.2, borderRadius: 100 }}
                    source={require('../../assets/images/profileicon.png')} 
                 /> }
              <TouchableOpacity onPress={()=>chooseFile()}
                 style={{
                position: 'absolute',bottom:height/30, right:width/10, borderRadius: 50,
                height: height /30, width: height /30, backgroundColor: '#A9ABB5', justifyContent: 'center', alignItems: 'center'
                 }}>
                   <Icon1 style={{ fontSize: height/50 }} color='white' name="pencil" />
              </TouchableOpacity>
            </View>
            <View style={{ flex: 0.55, }}>
              <View style={{ flex: 0.2,  alignItems: 'flex-end', marginHorizontal: 15,justifyContent:'flex-end'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('Childstack',{screen:'Profiledetailscreen'})}>
                  <Icon style={{ fontSize: height/40, }} color='white' name="dots-three-vertical" />
                </TouchableOpacity>
              </View>
              <View style={{ flex: 0.2,justifyContent:'flex-end'}}>
                <Text style={{ fontSize:height/37.4, fontFamily: 'Poppins-Bold', color: '#FFFFFF' }}>{uservalue?.Name}</Text>
              </View>
              <View style={{ flex: 0.6, }}>
                <View style={{flex:0.5,justifyContent:'center'}}>
                   <Text style={{ fontSize:height/51, fontFamily: 'Poppins-Medium', color: '#FFFFFF',marginBottom:5 }}>{uservalue?.PhoneNumber}</Text>
                 </View>
                 <View style={{flex:0.5,justifyContent:'flex-start'}}>
                    <Text style={{ fontSize:height/62, fontFamily: 'Poppins-Medium', color: '#FFFFFF' }}>{uservalue?.Email}</Text>
                 </View>
               </View>
            </View>  
          </ImageBackground>
          </View>
        </View>
        <View style={{ height: height / 100 *60, backgroundColor:'white',borderTopLeftRadius:15,borderTopRightRadius:15,marginHorizontal:5,marginTop:5,elevation:3}}>
          <TouchableOpacity onPress={()=>navigation.navigate('Childstack',{screen:'Notification'})}
              style={{flex: 0.125,flexDirection:'row',alignItems:'center'}}>
          <View style={{ flex: 0.22,justifyContent:'center',alignItems:'center' }}>
            <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ height: height / 20, width: height / 20}}
              source={require('../../assets/images/notification.png')}
              />
            </View>
          </View>
           <View style={{flex:0.7}}>
           <Text style={{fontSize:height/51,fontFamily:'Poppins-Medium',color:'#555555'}}>Notifications</Text>
           </View>
             </TouchableOpacity>
             <TouchableOpacity onPress={()=>navigation.navigate('Childstack',{screen:'Myorderscreen'})}
            style={{flex: 0.125,flexDirection:'row',alignItems:'center'}}>
          <View style={{ flex: 0.22,justifyContent:'center',alignItems:'center' }}>
            <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ height: height / 20, width: height / 20}}
              source={require('../../assets/images/orders.png')}
              />
            </View>
          </View>
           <View style={{flex:0.7}}>
           <Text style={{fontSize:height/51,fontFamily:'Poppins-Medium',color:'#555555'}}>My orders</Text>
           </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Childstack',{screen:'Ordertrackscreen'})}
            style={{flex: 0.125,flexDirection:'row',alignItems:'center'}}>
            <View style={{ flex: 0.22,justifyContent:'center',alignItems:'center' }}>
            <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ height: height / 20, width: height / 20}}
              source={require('../../assets/images/trackorder.png')}
              />
            </View>
          </View>
           <View style={{flex:0.7,}}>
           <Text style={{fontSize:height/51,fontFamily:'Poppins-Medium',color:'#555555'}}>Track order</Text>
           </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Cartscreen')}
            style={{flex: 0.125,flexDirection:'row',alignItems:'center'}}>
            <View style={{ flex: 0.22,justifyContent:'center',alignItems:'center' }}>
            <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ height: height / 20, width: height / 20}}
              source={require('../../assets/images/payment.png')}
              />
            </View>
          </View>
           <View style={{flex:0.7}}>
           <Text style={{fontSize:height/51,fontFamily:'Poppins-Medium',color:'#555555'}}>Payment</Text>
           </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Wistlistscreen')}
            style={{flex: 0.125,flexDirection:'row',alignItems:'center'}}>
          <View style={{ flex: 0.22,justifyContent:'center',alignItems:'center' }}>
            <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ height: height / 20, width: height / 20}}
              source={require('../../assets/images/wishlist.png')}
              />
            </View>
          </View>
           <View style={{flex:0.7,}}>
           <Text style={{fontSize:height/51,fontFamily:'Poppins-Medium',color:'#555555'}}>Wishlist</Text>
           </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Childstack',{screen:'Offerscreen'})}
            style={{flex: 0.125,flexDirection:'row',alignItems:'center'}}>
           <View style={{ flex: 0.22,justifyContent:'center',alignItems:'center' }}>
            <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ height: height / 20, width: height / 20}}
              source={require('../../assets/images/offers.png')}
              />
            </View>
          </View>
           <View style={{flex:0.7}}>
           <Text style={{fontSize:height/51,fontFamily:'Poppins-Medium',color:'#555555'}}>Offers</Text>
           </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={()=>navigation.navigate('Childstack',{screen:'Blogscreen'})}
            style={{flex: 0.125,flexDirection:'row',alignItems:'center'}}>
          <View style={{ flex: 0.22,justifyContent:'center',alignItems:'center' }}>
            <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ height: height / 20, width: height / 20}}
              source={require('../../assets/images/blogs.png')}
              />
            </View>
          </View>
           <View style={{flex:0.7}}>
           <Text style={{fontSize:height/51,fontFamily:'Poppins-Medium',color:'#555555'}}>Blogs</Text>
           </View>
            </TouchableOpacity>
            <TouchableOpacity style={{flex: 0.125,flexDirection:'row',alignItems:'center'}}>
          <View style={{ flex: 0.22,justifyContent:'center',alignItems:'center' }}>
            <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center' }}>
              <Image style={{ height: height / 20, width: height / 20}}
              source={require('../../assets/images/setting.png')}
              />
            </View>
          </View>
           <View style={{flex:0.7}}>
           <Text style={{fontSize:height/51,fontFamily:'Poppins-Medium',color:'#555555'}}>Settings</Text>
           </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {setModalVisible(true)}}
               style={{flex: 0.125,flexDirection:'row',alignItems:'center'}}>
                <View style={{ flex: 0.22,justifyContent:'center',alignItems:'center' }}>
            <View style={{ height: height / 20, width: height / 20, justifyContent: 'center', alignItems: 'center' }}>
            <Image style={{ height: height / 20, width: height / 20}}
              source={require('../../assets/images/logout.png')}
              />
            </View>
               </View>
               <View style={{flex:0.7}}>
           <Text style={{fontSize:height/51,fontFamily:'Poppins-Medium',color:'#555555'}}>Logout</Text>
               </View>
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
                <TouchableOpacity onPress={() =>signOut() }
                  style={{ height: height / 18.7, width: height / 5.7, backgroundColor: Colors.commoncolor, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF' }}>Sure</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
                </Modal>
            </TouchableOpacity>
        </View>
        <View style={{height:height/100*1}}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1, backgroundColor: Colors.background
  },
  container1: {
    height: height / 100*25, justifyContent: 'center',alignItems:'center'
  },
  cont1view: {
    height:height/4.2,marginHorizontal:15
  },
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
export default Profilescreen;


import React from 'react';
import {
  Text, View, StyleSheet, Dimensions, SafeAreaView, Image, TouchableOpacity,
  ScrollView
} from 'react-native';
import Colors from '../../color/commoncolor'
import { Icons } from '../../color/icon';
const { height, width } = Dimensions.get('window')
const Wishlistscreen = ({ navigation }) => {
  const Data = [
    {
      id: '1', title: 'Allter Baby Diaper, Made from OrganicBamboo',
      description: `*Made with 100% organics bamboo pulp core
    *Extremely light weight and velvety soft`,
      rate: '₹999.00 – ₹1,099',
      img: require('../../assets/images/offer_1.png')
    },
    {
      id: '2', title: 'Allter Baby Diaper, Made from OrganicBamboo',
      description: `*Made with 100% organics bamboo pulp core
    *Extremely light weight and velvety soft`,
      rate: '₹999.00 – ₹1,099',
      img: require('../../assets/images/offer_2.png')
    },
    {
      id: '3', title: 'Allter Baby Diaper, Made from OrganicBamboo',
      description: `*Made with 100% organics bamboo pulp core
    *Extremely light weight and velvety soft`,
      rate: '₹999.00 – ₹1,099',
      img: require('../../assets/images/offer_3.png')
    },
    {
      id: '4', title: 'Allter Baby Diaper, Made from OrganicBamboo',
      description: `*Made with 100% organics bamboo pulp core
    *Extremely light weight and velvety soft`,
      rate: '₹999.00 – ₹1,099',
      img: require('../../assets/images/offer_4.png')
    },
    {
      id: '5', title: 'Allter Baby Diaper, Made from OrganicBamboo',
      description: `*Made with 100% organics bamboo pulp core
    *Extremely light weight and velvety soft`,
      rate: '₹999.00 – ₹1,099',
      img: require('../../assets/images/offer_1.png')
    },
    {
      id: '6', title: 'Allter Baby Diaper, Made from OrganicBamboo',
      description: `*Made with 100% organics bamboo pulp core
    *Extremely light weight and velvety soft`,
      rate: '₹999.00 – ₹1,099',
      img: require('../../assets/images/offer_2.png')
    },
  ]
  const [list, setList] = React.useState([])
  React.useEffect(() => {
    setList(Data.map(s => ({ ...s, isopen: false })))
  }, [])
  const click1 = (item) => {
    setList(
      list.map(e => e.id === item.id ? ({ ...e, isopen: !e.isopen }) : (e))
    )
  }
  return (
    <SafeAreaView style={styles.maincontainer}>
      <ScrollView >
        <View style={styles.container2}>
          <Text style={{ fontSize: height / 37.4, fontFamily: 'Poppins-Medium', color: '#1C2340' }}>My Wishlist</Text>
        </View>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row', justifyContent: 'space-around' }}>
          {list.length ?
            <>
              {list.map((item, i) => {
                return (
                  <View key={i} style={{}}>
                    <View style={{ width: width / 2.2, height: height / 3, backgroundColor: '#FFFFFF', borderRadius: 5, marginTop: 10, elevation: 3 }}>
                      <View style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}>
                        <Image style={{ width: '98%', height: '98%', borderRadius: 3, resizeMode: 'stretch' }}
                          source={item.img}
                        />
                        <TouchableOpacity
                          style={{
                            height: height / 29, width: height / 29, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center', borderRadius: 50,
                            position: 'absolute', right: width / 80, bottom: height / -66, borderWidth: 0.8, borderColor: '#BFC9CA',
                          }}
                          onPress={() => { click1(item) }}>
                          {item.isopen ? <Icons.FontAwesome style={[styles.cardTitleIcon, { color: Colors.commoncolor }]} name="heart" /> :
                            <Icons.FontAwesome style={[styles.cardTitleIcon, { color: '#58668c' }]} name="heart-o" />}
                        </TouchableOpacity>
                      </View>
                      <View style={{ flex: 0.4, }}>
                        <View style={{ flex: 0.5, justifyContent: 'flex-end', alignItems: 'center', marginHorizontal: 5, }}>
                          <Text style={{ fontSize: height / 74.8, fontFamily: 'Poppins-Medium', color: '#555555', textAlign: 'center' }}>{item.title}</Text>
                        </View>
                        <View style={{ flex: 0.5, justifyContent: 'flex-start', alignItems: 'center' }}>
                          <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Medium', color: '#FF1950', marginTop: 10 }}>{item.rate}</Text>
                        </View>

                      </View>
                      <View style={{ position: 'absolute', bottom: 10, right: 5 }}>
                        <TouchableOpacity style={{
                          height: height / 35, width: height / 35, backgroundColor: Colors.commoncolor, borderRadius: 50, marginHorizontal: 10,
                          justifyContent: 'center', alignItems: 'center'
                        }}>
                          <Icons.Feather style={{ fontSize: height / 62, color: 'white' }} name="shopping-cart" />
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )
              })}
            </> :
            <>
              <View style={{ height: height, justifyContent: 'center', alignItems: 'center' }}>
                <Text style={{ flexShrink: 1, fontSize: height / 42, fontFamily: 'Poppins-Medium', color: '#616363', marginBottom: 10 }}>Your Wishlist is empty</Text>
                <TouchableOpacity style={{ height: height / 18, width: height / 6, borderWidth: 2, borderColor: Colors.commoncolor, marginBottom: height / 8, borderRadius: 5, justifyContent: 'center', alignItems: 'center' }}>
                  <Text style={{ fontSize: height / 46, fontFamily: 'Poppins-SemiBold', color: Colors.commoncolor }}>Shop Now</Text>
                </TouchableOpacity>
              </View>
            </>
          }
        </View>
        <View style={{ height: height / 100 * 2 }}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  maincontainer: {
    flex: 1, backgroundColor: Colors.background
  },
  container2: {
    height: height / 100 * 5,
    justifyContent: 'center', alignItems: 'center', marginTop: 10
  },
  container4: {
    height: height / 100 * 30, justifyContent: 'center'
  },
  cardTitleIcon: {
    fontWeight: 'bold',
    fontSize: height / 51,
  }
})
export default Wishlistscreen;

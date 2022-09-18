import React from 'react';
import { Text, View, Dimensions } from 'react-native';
const { height, width } = Dimensions.get('window')
import axios from 'axios';

const Addinformationscreen = () => {
  const [weight, setWeight] = React.useState('');
  const [length, setLength] = React.useState('');
  const [breadth, setBreadth] = React.useState('');
  const [prdheight, setHeight] = React.useState('');
  // console.log(weight, length, breadth, prdheight, 'res');
  React.useEffect(() => {
    axios.get(Base_url + '/Products_Admin/62b9349043ed52c257c4337f')
      .then(res => {
        // console.log(res.data,'res');
        let val = [res.data]
        val.map(e => {
          setWeight(e.ProductWeight), setLength(e.ProductLength), setBreadth(e.ProductBreadth), setHeight(e.ProductHeight)
        })
      })
      .catch(err => console.log(err))
  }, [])
  return (
    <View style={{ backgroundColor: 'white', marginTop: 5, borderRadius: 10, marginHorizontal: 5, marginTop: 15, height: height / 6 }}>
      <View style={{ flex: 0.5, borderBottomWidth: 1, flexDirection: 'row', borderBottomColor: '#E5E7E9', }}>
        <View style={{ flex: 0.45, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>WEIGHT</Text>
        </View>
        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: height / 51, fontWeight: 'bold', color: '#000000' }}>:</Text>
        </View>
        <View style={{ flex: 0.45, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>{weight}kg</Text>
        </View>
        {/* <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#1C2340', marginRight: height / 10 }}>WEIGHT</Text>
          <Text style={{ fontSize: height / 51, fontWeight: 'bold', color: 'black' }}>:</Text>
          <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: height / 10 }}>{weight}kg</Text> */}
      </View>
      <View style={{ flex: 0.5, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
        <View style={{ flex: 0.45, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>DIMENSIONS</Text>
        </View>
        <View style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: height / 51, fontWeight: 'bold', color: '#000000' }}>:</Text>
        </View>
        <View style={{ flex: 0.45, justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>{length}x{breadth}x{prdheight}cm</Text>
        </View>
        {/* <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#1C2340', marginRight: height / 10 }}>DIMENSIONS</Text>
          <Text style={{ fontSize: height / 51, fontWeight: 'bold', color: 'black', marginRight: 15 }}>:</Text>
          <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: height / 10 }}>{length}x{breadth}x{prdheight}cm</Text> */}
      </View>
    </View>
  );
}

export default Addinformationscreen;
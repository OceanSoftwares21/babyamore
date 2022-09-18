import React from 'react';
import { Text, View, ScrollView, Dimensions, TextInput, TouchableOpacity } from 'react-native';
import colors from '../../color/commoncolor';

const { height, width } = Dimensions.get('window')
const Askquesscreen = () => {
  return (
    <View style={{ marginTop: 10 }}>
      <View style={{ backgroundColor: '#FFFFFF' }}>
        <View style={{ justifyContent: 'space-evenly', marginHorizontal: 25, marginTop: 15 }}>
          <Text style={{ fontSize: height / 58, fontFamily: 'Poppins-SemiBold', color: '#0C0B52' }}>Ask a question</Text>
          <Text style={{ fontSize: height / 68, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
            Write your question here to get answer about the product
          </Text>
        </View>
        <View style={{ justifyContent: 'flex-end', alignItems: 'center', marginHorizontal: 5, marginTop: 15 }}>
          <View style={{ height: height / 7, width: width / 1.1, borderColor: colors.commoncolor, borderWidth: 1.2, borderRadius: 10, }}>
            <TextInput
              multiline={true}
              style={{
                fontSize: height / 70, fontFamily: 'Poppins-Regular', color: '#8A8D9F',
                marginLeft: 5,
              }}
              placeholder='|Ask here....'
            />
          </View>
        </View>
        <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 15, marginBottom: 15 }}>
          <TouchableOpacity
            style={{ width: height / 7.2, height: height / 18, backgroundColor: '#fc8181', borderRadius: 10, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: 'white' }}>SUBMIT</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default Askquesscreen;
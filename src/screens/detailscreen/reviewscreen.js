import React from 'react';
import { Text, View, TextInput, Dimensions } from 'react-native';
import colors from '../../color/commoncolor';
const { height, width } = Dimensions.get('window')

const Reviewscreen = () => {
    return (
        <View style={{ justifyContent: 'center', marginTop: 10 }}>
            <View style={{ backgroundColor: 'white', marginHorizontal: 5, borderRadius: 10, marginTop: 15 }}>
                <View style={{ justifyContent: 'center', marginHorizontal: 15, marginTop: 10 }}>
                    <Text style={{ fontSize: height / 58, color: '#0C0B52', fontFamily: 'Poppins-SemiBold' }}>Reviews</Text>
                    <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#555555', marginTop: 10 }}>There are no reviews yet.</Text>
                </View>
                <View style={{ marginHorizontal: 10, justifyContent: 'flex-start', marginTop: 20, marginBottom: 15 }}>
                    <View style={{ height: height / 6.4, borderColor: colors.commoncolor, borderWidth: 1.2, borderRadius: 10, }}>
                        <TextInput
                            multiline={true}
                            style={{
                                fontSize: height / 70, fontFamily: 'Poppins-Regular', color: '#8A8D9F',
                                marginLeft: 5,
                            }}
                            placeholder='Only logged in customers who have purchased this product 
                        may leave a review.'
                        />
                    </View>

                </View>
            </View>
        </View>
    );
}

export default Reviewscreen;

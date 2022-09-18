import React from 'react';
import {
    Text, View, StyleSheet, SafeAreaView, ScrollView,
    Dimensions, TouchableOpacity, TextInput,useWindowDimensions
} from 'react-native';
import colors from '../../color/commoncolor';
const { height, width } = Dimensions.get('window')
import axios from 'axios';
import RenderHtml from 'react-native-render-html';

const Descriptionscreen = (value) => {
    const [Desc, setdes] = React.useState('')
    // console.log(Desc,'res');
    React.useEffect(() => {
        axios.get(Base_url + '/Products_Admin/62b9906543ed52c257c436ad')
            .then(res => {
                // console.log(res.data,'res');
                let val = [res.data]
               
                let d= val.map(e => e.FullDescription)
                // console.log(d.toString(),'res');
                setdes(d.toString())
            })
            .catch(err => console.log(err))
    }, [])
    const { width } = useWindowDimensions();
    return (
        <View style={styles.maincontainer}>
            <ScrollView style={{}}>
                <View style={{ backgroundColor: 'white', marginTop: 10, borderRadius: 10, elevation: 3,marginTop:10 }}>
                    <RenderHtml
                        source={{ html: Desc }}
                        contentWidth={width}
                        enableExperimentalMarginCollapsing={true}
                        baseStyle={{
                            // color: '#15181E',
                            // textAlign: 'justify',
                            // fontSize: height / 58,
                            // lineHeight: 24
                        }}
                    />
                </View>
                <View style={{ backgroundColor: 'white', marginTop: 10, borderRadius: 10, elevation: 3 }}>
                    <View style={{ justifyContent: 'center', alignItems: 'center', marginTop: 10 }}>
                        <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-SemiBold', color: '#1C2340' }}>CUSTOMER QUESTIONS</Text>
                    </View>
                    <View style={{ justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#E5E7E9', marginHorizontal: 15, marginTop: 10, }}>
                        <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-SemiBold', color: '#0C0B52', }}>Q:<Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}> It is for 16 years boy or not</Text></Text>
                        <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-SemiBold', color: '#0C0B52', }}>A:<Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}> No</Text></Text>
                    </View>
                    <View style={{ justifyContent: 'center', borderBottomWidth: 1, borderBottomColor: '#E5E7E9', marginHorizontal: 15, marginTop: 10 }}>
                        <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-SemiBold', color: '#0C0B52', }}>Q:<Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}> How much wipes it have</Text></Text>
                        <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-SemiBold', color: '#0C0B52', }}>A:<Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}> 50</Text></Text>
                    </View>
                    <View style={{ marginHorizontal: 15, marginTop: 15 }}>
                        <Text style={{ fontSize: height / 54, fontFamily: 'Poppins-SemiBold', color: '#0C0B52' }}>Have a Question?</Text>
                    </View>
                    <View style={{ height: height / 5.2, borderWidth: 1.5, borderColor: '#E5E7E9', borderRadius: 15, marginTop: 10, marginHorizontal: 15 }}>
                        <TextInput
                            style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginHorizontal: 10 }}
                            placeholder='Ask your question here '
                            multiline={true}
                        />
                    </View>
                    <View style={{ height: height / 100 * 10, justifyContent: 'center', alignItems: 'center' }}>
                        <TouchableOpacity
                            style={{ width: height / 5.2, height: height / 17, backgroundColor: '#fc8181', borderRadius: height / 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Text style={{ fontSize: height / 46.7, fontFamily: 'Poppins-SemiBold', color: '#FFFAED' }}>SEND</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </View>
    );
}
const styles = StyleSheet.create({
    maincontainer: {

    }
})

export default Descriptionscreen;



// <View style={{ marginTop: 5 }}>
// <View style={{ flex: 0.2, justifyContent: 'center', marginHorizontal: 15 }}>
//     <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#0C0B52' }}>DESCRIPTION</Text>
// </View>
// <View style={{ flex: 0.8, justifyContent: 'center', marginHorizontal: 15 }}>
//     <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>
//         Bombo Nature Biodegradable wet wipes are a must-have for every baby changing table,diaper bag,hanging,
//         road trip,picnic,sleepover-everywhere you and your baby go. our skin-friendly,maisturizing cleaning wipes are made
//         from soft,sustainable 100% viscose,which means that they do not contain plastic and are a better alternative foe the environment.
//     </Text>
// </View>
// </View>
// <View style={{ marginTop: 5 }}>
// <View style={{ flex: 0.2, justifyContent: 'center', marginHorizontal: 15 }}>
//     <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#0C0B52' }}>FEATURES</Text>
// </View>
// <View style={{ flex: 0.8, justifyContent: 'center', marginHorizontal: 15 }}>
//     <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Biodegradable(no plastic)</Text>
//     <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Gentle and soft</Text>
//     <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Skin-friendly(no perfume or color)</Text>
//     <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F', }}>New packaging reducing plastic in both lid&foil</Text>
// </View>
// </View>
// <View style={{ justifyContent: 'flex-start', marginHorizontal: 15, marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
// <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#0C0B52', }}>KEY BENEFITS:
//     <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>  Eco-friendly,skin friendly,sleep friendly</Text></Text>
// </View>
// <View style={{ justifyContent: 'flex-start', marginHorizontal: 15, marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
// <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#0C0B52', }}>CONTAINS:</Text>
// <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 10 }}>Pack of 50 wet wipes</Text>
// </View>
// <View style={{ justifyContent: 'flex-start', marginHorizontal: 15, marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
// <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#0C0B52', }}>AGE GUIDANCE:</Text>
// <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 10 }}>0+ months</Text>
// </View>
// <View style={{ justifyContent: 'flex-start', marginHorizontal: 15, marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
// <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#0C0B52', }}>MATERIAL USED:</Text>
// <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 10 }}>Viscose</Text>
// </View>
// <View style={{ justifyContent: 'flex-start', marginHorizontal: 15, marginTop: 5, flexDirection: 'row', alignItems: 'center' }}>
// <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#0C0B52', }}>CERTIFICATIONS:
//     <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>  Asthma Allergy Nordic, Dermatologically tested,Nordic Swan Ecolabel</Text>
// </Text>
// </View>
// <View style={{ marginTop: 5, marginHorizontal: 15, flexDirection: 'row' }}>
// <Text style={{
//     fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#0C0B52',
// }}>INGREDIENTS:
//     <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F', letterSpacing: 1, }}>  Aquua,Glycerin,Sodium Laureth-11 Carboxylate,Laureth-10,Sodium Benzoate,Lactic Acid,Glycereth-17 Cocolate,Potassium Sorbate,Allantion</Text>
// </Text>
// </View>
// <View style={{ marginTop: 5 }}>
// <View style={{ flex: 0.2, justifyContent: 'center', marginHorizontal: 15 }}>
//     <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#0C0B52', }}>ABOUT THE BRAND</Text>
// </View>
// <View style={{ flex: 0.8, marginHorizontal: 15, }}>
//     <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F' }}>Bambo Nature, a brand known for its eco-friendly disposable diapers and wipes. it also
//         makes a skincore line that is safe for your baby and the rest of your family as well. Each Bambo Nature
//         product is designed to give you comfort and saftey,by using quality ingerdients and materials.
//         Most importantly,the products have paven to be as strong and effective as they are safe and sustainable.
//     </Text>
// </View>
// </View>
// <View style={{ marginTop: 5, marginHorizontal: 15, marginBottom: 10 }}>
// <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#0C0B52', }}>COUNTRY OF ORIGIN:<Text style={{ fontSize: height / 51, color: colors.commoncolor, fontFamily: 'Poppins-SemiBold' }}>SWEDEN</Text></Text>
// </View>

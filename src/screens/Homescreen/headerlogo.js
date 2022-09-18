import React from "react";
import { View, Image, Dimensions, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const { height,width } = Dimensions.get('window')
var Windowheight=height;
function HeaderLogo(props) {
    return (
        <SafeAreaView style={styles.container}>
            <Image style={styles.logoStyles} source={require('../../assets/images/logo.png')} />
        </SafeAreaView>

    );
};

const styles = StyleSheet.create({
    container: {
       height:height/10,
       width:Windowheight/100*25,
       justifyContent:'center',
       alignItems:'flex-start',
    },
    logoStyles: {
        height:Windowheight/100*4,
        width:height/100*25,
    },
});

export default HeaderLogo
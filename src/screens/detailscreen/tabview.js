import React from "react";
import { View, Text, useWindowDimensions, Dimensions, StyleSheet, Image } from "react-native";
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import Description from '../detailscreen/descriptionscreen';
import Addinformation from '../detailscreen/addinformationscreen';
import Reviews from '../detailscreen/reviewscreen';
import AskQues from '../detailscreen/askques';
const { height, width } = Dimensions.get('window');
import colors from '../../color/commoncolor';

const ViewBoxesWithColorAndText = () => {
    const FirstRoute = () => (<Description value={index} />);
    const SecondRoute = () => (<Addinformation />);
    const ThirdRoute = () => (<Reviews />);
    const FourthRoute = () => (<AskQues />);
    const renderScene = SceneMap({
        first: FirstRoute,
        second: SecondRoute,
        third: ThirdRoute,
        fourth: FourthRoute
    });
    const [index, setIndex] = React.useState(0);
    const [routes] = React.useState([
        { key: 'first', title: 'Description' },
        { key: 'second', title: 'Additional Information' },
        { key: 'third', title: 'Reviews' },
        { key: 'fourth', title: 'Ask a question' },
    ]);
    const layout = useWindowDimensions();
    return (
        <>
            <View style={{ flex: 0.2, backgroundColor: '#FFFFFF', marginTop: 5, elevation: 2, flexDirection: 'row' }}>
                <View style={{ flex: 0.4, justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={{ width: '90%', height: '98%', resizeMode: 'contain' }}
                        source={require('../../assets/images/waterwipes.png')}
                    />
                </View>
                <View style={{ flex: 0.6 }}>
                    <View style={{ flex: 0.5, justifyContent: 'flex-end', marginHorizontal: 10 }}>
                        <Text style={{ fontSize: height / 52, fontFamily: 'Poppins-SemiBold', color: '#0C0B52' }}>Bambo Nature Biodegradable Wet Wipes</Text>
                    </View>
                    <View style={{ flex: 0.5, alignItems: 'center', marginHorizontal: 10, flexDirection: 'row', }}>
                        <Text style={{ fontSize: height / 56, fontFamily: 'Poppins-SemiBold', color: '#000000' }}>₹202</Text>
                        <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F', textDecorationLine: 'line-through', marginLeft: 5 }}>500</Text>
                        <Text style={{ fontSize: height / 62, fontFamily: 'Poppins-Regular', color: '#8A8D9F', marginLeft: 5 }}>77% off</Text>
                    </View>
                </View>
            </View>
            <TabView
                navigationState={{ index, routes }}
                renderScene={renderScene}
                onIndexChange={setIndex}
                initialLayout={{ width: layout.width }}
                renderTabBar={props => <TabBar {...props}
                    scrollEnabled={true}
                    style={{ backgroundColor: '#FADBD8', height: height / 15, width: width, justifyContent: 'center', flexDirection: 'row', marginTop: 5 }}
                    indicatorStyle={{ backgroundColor: colors.commoncolor, }}
                    renderLabel={props => {
                        return (
                            <View style={{ flexDirection: 'row', width: height / 4.8, height: height, justifyContent: 'center', alignItems: 'center' }}>
                                <Text style={[props.focused ? styles.focusedtext : styles.tabtext]}>
                                    {props.route.title}
                                </Text>
                            </View>
                        )
                    }} />}
            />
        </>
    );
};
const styles = StyleSheet.create({
    tabtext: {
        fontSize: height / 58, fontFamily: 'Poppins-Regular', color: '#8A8D9F'
    },
    focusedtext: {
        color: colors.commoncolor, fontSize: height / 58, fontFamily: 'Poppins-SemiBold'
    },
})

export default ViewBoxesWithColorAndText;
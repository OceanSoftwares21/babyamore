import { createDrawerNavigator } from '@react-navigation/drawer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import colors from '../../../color/commoncolor';
import Homescreen from '../../parenting/homescreen/home'
import Readscreen from '../../parenting/readscreens/readscreen'
import Quesans from '../../parenting/Q&A/ques&ansscreen'
import Audio from '../../parenting/AudioVideo/audiovideo'

import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Dimensions, Image, Modal, Pressable } from 'react-native'
import Color from '../../../color/commoncolor'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const { height, width } = Dimensions.get('window')
var Windowheight = height;
const Tab = createMaterialTopTabNavigator();

const Toptab = (props) => {
    const [value, setvalue] = React.useState()
    // console.log('vvv',value);
    return (
        <View style={{ flex: 1, marginTop: 5 }}>
            <View style={{ flex: 0.065, justifyContent: 'center', marginHorizontal: 15,marginTop:10 }}>
                <TouchableOpacity onPress={() => props.navigation.navigate('MainScreen',{screen:'Home'})}
                    style={{
                       height: height / 17, width: width / 2, backgroundColor: '#EEEEEE', borderTopLeftRadius: height/10, borderBottomLeftRadius: height/10,
                        justifyContent: 'center', alignItems: 'center'
                    }}>
                    <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#8A8D9F', }}>
                        SHOPPING
                    </Text>
                </TouchableOpacity>
                <TouchableOpacity style={{
                   height: height / 17, width: width / 2, backgroundColor: Color.commoncolor, borderTopLeftRadius: height/10, borderBottomLeftRadius: height/10,
                    borderTopRightRadius: height/10, borderBottomRightRadius: height/10, position: 'absolute', right: 0, justifyContent: 'center', alignItems: 'center'
                }}>
                    <Text style={{ fontSize: height / 51, fontFamily: 'Poppins-SemiBold', color: '#FFFFFF', }}>
                        PARENTING
                    </Text>
                </TouchableOpacity>
            </View>
            <View style={{ flex: 0.935,marginTop:10 }}>
                <Tab.Navigator screenOptions={{    
                    tabBarStyle: { height: 60, justifyContent: 'center' },
                    tabBarIndicatorStyle: {
                        backgroundColor: colors.commoncolor,
                        height: 4,borderRadius:15
                    },
                    
                }}>
                    <Tab.Screen name="Home1"
                        options={{
                            tabBarLabel: ({ focused, color, size }) => (
                                <Text style={{ color: focused ? '#FC8181' : color, fontFamily: 'Poppins-SemiBold', fontSize: height / 68, }}>HOME</Text>
                            ),

                            indicatorStyle: {
                                backgroundColor: colors.commoncolor,
                                height: 4,
                            },
                        }}
                        component={Homescreen}
                    />
                    <Tab.Screen name="Read" component={Readscreen}
                        options={{
                            tabBarLabel: ({ focused, color, size }) => (
                                <Text style={{ color: focused ? '#FC8181' : color, fontFamily: 'Poppins-SemiBold', fontSize: height / 68 }}>BLOGS</Text>
                            ),
                        }}
                    />
                    <Tab.Screen name="Ques&ans" component={Quesans}
                        options={{
                            tabBarLabel: ({ focused, color, size }) => (
                                <Text style={{ color: focused ? '#FC8181' : color, fontFamily: 'Poppins-SemiBold', fontSize: height / 68 }}>Q&A</Text>
                            ),
                        }}
                    />
                    <Tab.Screen name="Audio" component={Audio}
                        options={{
                            tabBarLabel: ({ focused, color, size }) => (
                                <Text style={{ color: focused ? '#FC8181' : color, fontFamily: 'Poppins-SemiBold', fontSize: height / 68 }}>AUDIO/VIDEO</Text>
                            ),

                        }}
                    />
                </Tab.Navigator>
            </View>
        </View>
    );
}
export default Toptab;
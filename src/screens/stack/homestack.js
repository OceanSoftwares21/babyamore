import * as React from 'react';
import { View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawer from '../stack/drawerstack';
import Pagenotfound from '../loginscreens/pagenotfoundscreen';
import Loginstack from '../stack/loginstack';
import { AuthContext } from './context';
import AsyncStorage from '@react-native-async-storage/async-storage';
import NetInfo from "@react-native-community/netinfo";
import Appintrostack from './appintrostack';
import Childstackscreen from './childstack';
const Stack = createNativeStackNavigator();

const Homestack = ({ navigation }) => {
    const [userlogin, setUserloin] = React.useState(true);
    const [flash, setFlash] = React.useState(true);
    React.useEffect(() => {
        var timeoutVariable
        NetInfo.addEventListener(state => {
            setUserloin(state.isConnected)
        })
        timeoutVariable = setTimeout(() => {
            setFlash(false)
        }, 2000);
        return () => clearTimeout(timeoutVariable)
    }, [])
    const initialLoginState = { isLoading: true, userToken: 'null' };
    const loginReducer = (prevState, action) => {
        switch (action.type) {
            case 'RETRIEVE_TOKEN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGIN':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
            case 'LOGOUT':
                return {
                    ...prevState,
                    userToken: null,
                    isLoading: false,
                };
            case 'REGISTER':
                return {
                    ...prevState,
                    userToken: action.token,
                    isLoading: false,
                };
        }
    };
    const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);
    const authContext = React.useMemo(() => ({
        signIn: async (foundUser, i) => {
            const userToken = JSON.stringify(foundUser);
            try {
                await AsyncStorage.setItem('userToken', foundUser.token);
                await AsyncStorage.setItem('USERDATA', userToken);
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'LOGIN', token: foundUser.token });
        },
        signOut: async () => {
            try {
                await AsyncStorage.removeItem('userToken');
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'LOGOUT' });
        },
    }), [initialLoginState]);
    React.useEffect(() => {
        setTimeout(async () => {
            var userToken;
            userToken = null;
            try {
                userToken = await AsyncStorage.getItem('userToken');
            } catch (e) {
                console.log(e);
            }
            dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
        }, 500);
    }, [loginState.userToken]);
    if (flash) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: '100%', height: '100%', }}
                    source={require('../../assets/images/flash.gif')} />
            </View>
        )
    }
    if (loginState.isLoading) {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                <Image style={{ width: '10%', height: '10%', resizeMode: 'contain' }}
                    source={require('../../assets/images/loading.gif')} />
            </View>
        )
    }
    return (
        <AuthContext.Provider value={authContext}>
            <NavigationContainer independent={true}>
                {userlogin ?
                    <Stack.Navigator>
                        {loginState.userToken !== null ?
                            <>
                                <Stack.Screen name="Bottomtab" component={Drawer} options={{ headerShown: false }} />
                                <Stack.Screen name="Childstack" component={Childstackscreen} options={{ headerShown: false }} />
                            </>
                            :
                            <>
                                <Stack.Screen name="Appintro" component={Appintrostack} options={{ headerShown: false }} />
                                <Stack.Screen name="Login" component={Loginstack} options={{ headerShown: false }} />
                            </>
                        }
                    </Stack.Navigator> :
                    <Stack.Navigator initialRouteName='Pagenotfoundscreen'>
                        <Stack.Screen name="Pagenotfoundscreen" component={Pagenotfound} options={{ headerShown: false }} />
                    </Stack.Navigator>
                }
            </NavigationContainer>
        </AuthContext.Provider>
    );
}

export default Homestack;

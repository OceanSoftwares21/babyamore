import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../loginscreens/login';
import Signin from '../loginscreens/signin';
import Otp from '../loginscreens/phoneotpscreen';
import Emailotp from '../loginscreens/emailotpscreen';
import SigninOtp from '../loginscreens/signinotpscreen';

const Stack = createNativeStackNavigator();
const Loginstack = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Loginscreen" component={Login} options={{ headerShown: false }} />
            <Stack.Screen name="Sign" component={Signin} options={{ headerShown: false }} />
            <Stack.Screen name="Otpscreen" component={Otp} options={{ headerShown: false }} />
            <Stack.Screen name="SininOtpscreen" component={SigninOtp} options={{ headerShown: false }} />
            <Stack.Screen name="EmailOtpscreen" component={Emailotp} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default Loginstack;
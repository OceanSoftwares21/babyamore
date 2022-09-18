import * as React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Walkthrough from '../loginscreens/walkthroughscreen1';
import Walkthrough2 from '../loginscreens/walkthroughscreen2';
import Walkthrough3 from '../loginscreens/walkthroughscreen3';

const Stack = createNativeStackNavigator();
const Appintrostack = () => {
    return (
        <Stack.Navigator initialRouteName='Walkthrough'>
            <Stack.Screen name="Walkthrough" component={Walkthrough} options={{ headerShown: false }} />
            <Stack.Screen name="Walkthrough2" component={Walkthrough2} options={{ headerShown: false }} />
            <Stack.Screen name="Walkthrough3" component={Walkthrough3} options={{ headerShown: false }} />
        </Stack.Navigator>
    )
}
export default Appintrostack;
// import messaging from '@react-native-firebase/messaging';
// import AsyncStorage from '@react-native-async-storage/async-storage';

// export async function requestUserPermission() {
//     const authStatus = await messaging().requestPermission();
//     const enabled =
//         authStatus === messaging.AuthorizationStatus.AUTHORIZED ||
//         authStatus === messaging.AuthorizationStatus.PROVISIONAL;

//     if (enabled) {
//         console.log('Authorization status:', authStatus);
//         getFcmToken()
//     }
// }

// const getFcmToken = async () => {
  
//     let fcmToken = await AsyncStorage.getItem('fcmtoken')
//     console.log('old token', fcmToken);
//     if (!fcmToken) {
//         try {
//             const fcmToken = await messaging().getToken();
//             if (fcmToken) {
//                 console.log('new token', fcmToken);
//                 await AsyncStorage.setItem('fcmtoken', fcmToken)

//             }
//         } catch (error) {
//             console.log('error', error);
//         }
//     }
// }

// export const notifications = async () => {
//     // console.log('1111');
//     messaging().onNotificationOpenedApp(remoteMessage => {
//         console.log('Notification caused app to open from background state:', remoteMessage.notification,);
//     });

//     messaging().onMessage(async remotemessage => {
//         console.log('recived mess in foreground', remotemessage);
//     })
    
// //   messaging().displayNotification
//     messaging()
//         .getInitialNotification()
//         .then(remoteMessage => {
           
//             if (remoteMessage) {
//                 console.log('Notification caused app to open from quit state:', remoteMessage.notification,);
//             }
//         });

// }


import React, { useEffect } from 'react'
import PushNotification from 'react-native-push-notification'

const RemotePushController = () => {
    console.log('!!@#$');
  useEffect(() => {
    PushNotification.configure({
      // (optional) Called when Token is generated (iOS and Android)
      onRegister: function(token) {
        console.log('TOKEN:', token)
      },

      // (required) Called when a remote or local notification is opened or received
      onNotification: function(notification) {
        console.log('REMOTE NOTIFICATION ==>', notification)

        // process the notification here
      },
      // Android only: GCM or FCM Sender ID
      senderID: '972320450548',
      popInitialNotification: true,
      requestPermissions: true
    })
  }, [])

  return null
}

export default RemotePushController
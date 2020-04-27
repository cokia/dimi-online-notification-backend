// import * as firebase from 'firebase-admin';
// import * as serviceAccount from '../../firebase-credential.json';

// const params = {
//   type: serviceAccount.type,
//   projectId: serviceAccount.project_id,
//   privateKeyId: serviceAccount.private_key_id,
//   privateKey: serviceAccount.private_key,
//   clientEmail: serviceAccount.client_email,
//   clientId: serviceAccount.client_id,
//   authUri: serviceAccount.auth_uri,
//   tokenUri: serviceAccount.token_uri,
//   authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
//   clientC509CertUrl: serviceAccount.client_x509_cert_url,
// };


// firebase.initializeApp({
//   credential: firebase.credential.cert(params),
// });


// const registrationToken = '';
// const payload:any = {
//   notification: {
//     title: '푸시 알림 제목',
//     body: '푸시 알림 내용.',
//     click_action: '',
//     icon: '',
//   },
// };
// firebase.messaging().sendToDevice(registrationToken, payload)
//   .then((response:any) => {
//     console.log('Successfully sent message:', response);
//   })
//   .catch((error) => {
//     console.log('Error sending message:', error);
//   });


const webpush = require('web-push');
 
// VAPID keys should only be generated only once.
const vapidKeys = webpush.generateVAPIDKeys();
 
webpush.setGCMAPIKey('<Your GCM API Key Here>');
webpush.setVapidDetails(
  'mailto:example@yourdomain.org',
  vapidKeys.publicKey,
  vapidKeys.privateKey
);

const pushSubscription = {
  endpoint: '< Push Subscription URL >',
  keys: {
    p256dh: '< User Public Encryption Key >',
    auth: '< User Auth Secret >'
  }
};
 
const payload = '< Push Payload String >';
 
const options = {
  gcmAPIKey: '< GCM API Key >',
  vapidDetails: {
    subject: '< \'mailto\' Address or URL >',
    publicKey: '< URL Safe Base64 Encoded Public Key >',
    privateKey: '< URL Safe Base64 Encoded Private Key >'
  },
  TTL: <Number>,
  headers: {
    '< header name >': '< header value >'
  },
  contentEncoding: '< Encoding type, e.g.: aesgcm or aes128gcm >',
  proxy: '< proxy server options >',
  agent: '< https.Agent instance >'
}
 
webpush.sendNotification(
  pushSubscription,
  payload,
  options
);
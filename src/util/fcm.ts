/* eslint-disable no-throw-literal */
import * as admin from 'firebase-admin';
import fetch from 'node-fetch';
import * as serviceAccount from '../../firebase-credential.json';

const params = {
  type: serviceAccount.type,
  projectId: serviceAccount.project_id,
  privateKeyId: serviceAccount.private_key_id,
  privateKey: serviceAccount.private_key,
  clientEmail: serviceAccount.client_email,
  clientId: serviceAccount.client_id,
  authUri: serviceAccount.auth_uri,
  tokenUri: serviceAccount.token_uri,
  authProviderX509CertUrl: serviceAccount.auth_provider_x509_cert_url,
  clientC509CertUrl: serviceAccount.client_x509_cert_url,
};


admin.initializeApp({
  credential: admin.credential.applicationDefault(),
  databaseURL: 'https://dimi-online-notification.firebaseio.com/',
});

export async function subscribeTokenToTopic(token, topic) {
  fetch(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topic}`, {
    method: 'POST',
    headers: new Headers({
      Authorization: `key=${fcm_server_key}`,
    }),
  }).then((response) => {
    if (response.status < 200 || response.status >= 400) {
      throw `Error subscribing to topic: ${response.status} - ${response.text()}`;
    }
    console.log(`Subscribed to "${topic}"`);
  }).catch((error) => {
    console.error(error);
  });
}
export async function fcmsend(title:string, body:string, url:string, topic:string) {
  const payload:any = {
    notification: {
      title,
      body,
      click_action: url,
      icon: 'https://github.com/cokia.png',
    },
    topic,
  };


  admin.messaging().send(payload)
    .then((response) => {
      console.log('Successfully sent message:', response);
    })
    .catch((error) => {
      console.log('Error sending message:', error);
    });
}

export async function test() {
  console.log('test');
}

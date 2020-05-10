/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable camelcase */
/* eslint-disable no-throw-literal */
import * as admin from 'firebase-admin';
import fetch, { Headers } from 'node-fetch';
import dotenv from 'dotenv';
import * as serviceAccount from '../../firebase-credential.json';

dotenv.config();

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
  credential: admin.credential.cert(params),
  databaseURL: 'https://dimi-online-notification.firebaseio.com/',
});

export async function subscribeTokenToTopic(token: string, topic: string) {
  const requestHeaders = new Headers();
  requestHeaders.set('Content-Type', 'application/json');
  requestHeaders.set('Authorization', `key=${process.env.serverkey}`);

  fetch(`https://iid.googleapis.com/iid/v1/${token}/rel/topics/${topic}`, {
    method: 'POST',
    headers: requestHeaders,
  })
    .then((response) => {
      const { status, text } = response;
      if (status < 200 || status >= 400) {
        throw `Error subscribing to topic: ${status} - ${text()}`;
      }
      console.log(`Subscribed to "${topic}"`);
    })
    .catch((error: any) => {
      console.error(error);
    });
}
export async function unSubscribeTokenToTopic(token: string, topic: string) {
  admin.messaging().unsubscribeFromTopic(token, topic)
    .then((response) => {
      if (response.successCount === 1) {
        console.log(`successfully unSubscribed to "${topic}"`);
      } else {
        throw 'Error unsubscribing to topic';
      }
    }).catch((error: any) => {
      console.error(error);
    });
}
export async function fcmsend(title: string, body: string, url: string, topic: string) {
  const payload: any = {
    topic,
    data: {
      title,
      body,
      url,
    },
  };

  admin
    .messaging()
    .send(payload)
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

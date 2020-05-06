import * as admin from 'firebase-admin';
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

const topic = '';
const payload:any = {
  notification: {
    title,
    body,
    click_action,
    icon,
  },
  ,
  topic,
};


admin.messaging().send(payload)
  .then((response) => {
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });

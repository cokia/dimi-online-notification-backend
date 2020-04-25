import * as firebase from 'firebase-admin';
import * as serviceAccount from '/path/to/firestore-service-account.json';

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


firebase.initializeApp({
  credential: firebase.credential.cert(params),
});


const registrationToken = '';
const payload:any = {
  notification: {
    title: '푸시 알림 제목',
    body: '푸시 알림 내용.',
    click_action: '',
    icon: '',
  },
};
firebase.adminmessaging().sendToDevice(registrationToken, payload)
  .then((response:any) => {
    console.log('Successfully sent message:', response);
  })
  .catch((error) => {
    console.log('Error sending message:', error);
  });

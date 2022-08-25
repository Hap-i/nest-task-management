import firebase from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyBSnjvv8PrLHb9zfIfnu1xsmJaZg1yFRP0',
  authDomain: 'test-upload-4e4dc.firebaseapp.com',
  projectId: 'test-upload-4e4dc',
  storageBucket: 'test-upload-4e4dc.appspot.com',
  messagingSenderId: '67539062234',
  appId: '1:67539062234:web:685a237be308ebd598c4e3',
};

const app = firebase.initializeApp(firebaseConfig);
export const storage = getStorage(app);

import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyCIxuVmfdkdTT3V6x-NVFPEhsmPa3XqjA8',
  authDomain: 'catch-of-the-day---reactwesbos.firebaseapp.com',
  databaseURL:
    'https://catch-of-the-day---reactwesbos-default-rtdb.firebaseio.com',
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

export default base;

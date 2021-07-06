import firebase from "firebase/app";
import "firebase/auth";
import {
  API_KEY,
  AUTH_DOMAIN,
  PROJECT_ID,
  STORAGE_BUCKET,
  MESSAGING_SENDER_ID,
  APP_ID,
  MEASUREMENT_ID,
} from "./secret";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUCKET,
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
  measurementId: MEASUREMENT_ID,
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const authService = firebase.auth();
export const firebaseInstance = firebase;
export const dbService = firebase.firestore();

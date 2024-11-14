// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";
// import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBx7LV-t0SYYA2bQ4PSdVxwwyucrozsu9g",
  authDomain: "fcm-notification-web-3d472.firebaseapp.com",
  projectId: "fcm-notification-web-3d472",
  storageBucket: "fcm-notification-web-3d472.firebasestorage.app",
  messagingSenderId: "586084769819",
  appId: "1:586084769819:web:3063a95e76f91d63a598be",
  measurementId: "G-M1KTY4K8CW",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

// const analytics = getAnalytics(app);

export const generateToken = async () => {
  const permission = await Notification.requestPermission();
  console.log("Permission Granted", permission);
  if (permission === "granted") {
    const token = await getToken(messaging, {
      vapidKey:
        "BAU5I1lT3yH9rYoR4q6wqIUku6vADAeFDKgckKTbeiBCJaLbKaXktbz1Mvyr4BL38cYBe7oG81LydIhxl68SI5U",
    });
    console.log("token", token);
  }
};

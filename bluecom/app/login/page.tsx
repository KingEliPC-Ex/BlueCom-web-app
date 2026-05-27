"use client";

import { useState } from "react";
import { getAuth, signInWithPopup, GithubAuthProvider } from "firebase/auth";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "bluecom-web-app.firebaseapp.com",
  projectId: "bluecom-web-app",
  storageBucket: "bluecom-web-app.appspot.com",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GithubAuthProvider();

export default function LoginPage() {
  const [error, setError] = useState("");

  const loginWithGithub = async () => {
    try {
      await signInWithPopup(auth, provider);
      window.location.href = "/"; // redirect after login
    } catch (err: any) {
      setError(err.message);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4">
      <h1 className="text-3xl font-bold">Login</h1>

      <button
        onClick={loginWithGithub}
        className="px-4 py-2 bg-black text-white rounded-md hover:bg-gray-800"
      >
        Continue with GitHub
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </div>
  );
}

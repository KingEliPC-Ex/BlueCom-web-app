"use client";

import { useState } from "react";
import { initializeApp, getApps } from "firebase/app";
import {
  getAuth,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";

// Firebase config from environment variables
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID,
};

// Safe Firebase initialization
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];
const auth = getAuth(app);
const provider = new GithubAuthProvider();

export default function LoginPage() {
  const [error, setError] = useState("");

  const loginWithGithub = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const user = result.user;

      // POST user info to your API
      await fetch("/api/auth/callback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          uid: user.uid,
          email: user.email,
          name: user.displayName,
          photo: user.photoURL,
        }),
      });

      // Redirect AFTER POST
      window.location.href = "/";
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

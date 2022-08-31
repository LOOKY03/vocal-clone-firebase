import Link from "next/link";
import React from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import { auth, db } from "../firebase";
import { useRouter } from "next/router";
import { useState } from "react";
import { addDoc, collection } from "firebase/firestore";

const signUp = () => {
  //let auth = getAuth();
  const router = useRouter();
  
  let googleProvider = new GoogleAuthProvider();
  const collectionRef = collection(db, "users");
  
 

  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState()


  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((res) => {
        //console.log(res);

        router.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((response) => {
        console.log(response);
        updateProfile(auth.currentUser, {
          displayName: name,
        })
        router.push("/");
      })
      .catch((err) => {
        alert(err.message);
      });
    
  };

  return (
    <div>
      <main className="max-w-4xl mx-auto mt-10">
        <Link href={"/"}>
          <img
            className="h-20 object-contain max-w-xl mx-auto"
            src="/vocal.logo.png"
            alt="vocal"
          />
        </Link>

        <form className="flex flex-col w-2/4 mx-auto mt-24">
          <h1 className="text-center text-4xl font-semibold">Join Vocal</h1>
          <div className="flex flex-col mt-10 ">
          <label className="text-lg">Name</label>
            <input
              type="text"
              className="p-2 border-2 border-gray-400 rounded-md mt-2 mb-3 text-lg focus:border-blue-500 outline-0"
              placeholder="Jane Smith"
              onChange={(e) => setName(e.target.value)}
            />
            <label className="text-lg">Email</label>
            <input
              type="text"
              className="p-2 border-2 border-gray-400 rounded-md mt-2 mb-3 text-lg focus:border-blue-500 outline-0"
              placeholder="email@domain.com"
              onChange={(e) => setEmail(e.target.value)}
            />
            <label className="text-lg">Password</label>
            <input
              type="password"
              className="p-2 border-2 border-gray-400 rounded-md mt-2 mb-3 text-lg focus:border-blue-500 outline-0"
              placeholder="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link href={"/signIn"}>
              <button
                className="bg-gray-800 text-white p-3 rounded-md mt-2"
                onClick={handleRegister}
              >
                Sign Up
              </button>
            </Link>

            <div className="flex justify-center mt-3">
              <Link href={"/signIn"}>
                <p className="cursor-pointer">
                  Already have an account?{" "}
                  <span className="underline">Sign in</span>{" "}
                </p>
              </Link>
            </div>
            <p className="text-center mt-5">Or</p>
          </div>
          <div className="space-y-3 mt-5">
            <div
              className="border border-gray-400 p-3 w-full rounded-md flex justify-center cursor-pointer"
              onClick={handleSignInWithGoogle}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                className="h-6 mr-2"
                alt=""
              />
              <p>Sign In With Google</p>
            </div>
            <div
              className="border border-gray-400 p-3 w-full rounded-md flex justify-center mb-10 cursor-pointer"
              onClick={""}
            >
              <img
                src="https://cdn-icons-png.flaticon.com/512/2991/2991148.png"
                className="h-6 mr-2"
                alt=""
              />
              <p>Sign In With Facebook</p>
            </div>
          </div>
          <p className="mt-14">
            By continuing, you agree to our Privacy Policy and Terms of Use
          </p>
        </form>
      </main>
    </div>
  );
};

export default signUp;

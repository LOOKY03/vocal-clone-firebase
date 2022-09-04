import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../firebase";

const Header = () => {
  const [users, setUsers] = useState();

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      //console.log(data)
      setUsers(data);
    });
  }, []);

  return (
    <>
      <header className="flex justify-between mx-5">
        <div className="flex items-center space-x-5 ">
          <Link href="/">
            <img
              className="h-16 object-contain cursor-pointer"
              src="/vocal.logo.png"
              alt="vocal"
            />
          </Link>
          <div className="hidden lg:block">
            <div className="flex items-center space-x-5 ">
              <Link href="/">
                <h1 className="cursor-pointer">Home</h1>
              </Link>

              <Link href="/stories">
                <h1 className="cursor-pointer">Top Stories</h1>
              </Link>
              <Link href="/communities">
                <h1 className="cursor-pointer">Communities</h1>
              </Link>

              <h1 className="cursor-pointer">Challenges</h1>
              <h1 className="cursor-pointer">Resources</h1>
              <h1 className="cursor-pointer">Vocal+</h1>
            </div>
          </div>
        </div>

        <div className="flex items-center space-x-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
          <h1>Join</h1>
          {users ? (
            <button onClick={() => auth.signOut()}>Sign out</button>
          ) : (
            <Link href={"/signIn"}>
              <button>Sign in</button>
            </Link>
          )}

          <Link href={users ? `/stories/new` : `/signIn`}>
            <h1 className="bg-black text-white p-2 rounded px-3  lg:inline-flex cursor-pointer">
              Create Story
            </h1>
          </Link>
        </div>
        
      </header>
      <hr />
      <div className="flex justify-between items-center space-x-5 overflow-x-scroll px-2 lg:hidden">
              <Link href="/">
                <h1 className="cursor-pointer">Home</h1>
              </Link>

              <Link href="/stories">
                <h1 className="cursor-pointer">Top Stories</h1>
              </Link>
              <Link href="/communities">
                <h1 className="cursor-pointer">Communities</h1>
              </Link>

              <h1 className="cursor-pointer">Challenges</h1>
              <h1 className="cursor-pointer">Resources</h1>
              <h1 className="cursor-pointer">Vocal+</h1>
            </div>
    </>
  );
};

export default Header;

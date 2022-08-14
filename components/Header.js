import { useSession, signIn, signOut } from "next-auth/react";
import Link from "next/link";

const Header = () => {
  const { data: session } = useSession();
  //console.log(session)

  return (
    <>
      <header className="flex justify-between mx-5 ">
        <div className="flex items-center space-x-5 ">
          <img
            className="h-16 object-contain"
            src="/vocal.logo.png"
            alt="vocal"
          />
          <div className=" flex items-center  space-x-5 ">
            <Link href='/'>
              <h1 className="cursor-pointer">Home</h1>
            </Link>

            <Link href="/stories">
              <h1 className="cursor-pointer">Top Stories</h1>
            </Link>

            <h1 className="cursor-pointer">Communities</h1>
            <h1 className="cursor-pointer">Challenges</h1>
            <h1 className="cursor-pointer">Resources</h1>
            <h1 className="cursor-pointer">Vocal+</h1>
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
          {session ? (
            <button onClick={() => signOut()}>Sign out</button>
          ) : (
            <button onClick={() => signIn()}>Sign in</button>
          )}

          <Link href="/stories/new">
            <h1 className="bg-black text-white p-2 rounded px-3 hidden lg:inline-flex cursor-pointer">
              Create Story
            </h1>
          </Link>
        </div>
      </header>
      <hr />
    </>
  );
};

export default Header;

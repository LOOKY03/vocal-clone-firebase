import Link from "next/link";
import {
  getAuth,
  onAuthStateChanged
 
} from "firebase/auth";
import { useEffect } from "react";




const TopStoriesPosts = ({ post }) => {
  let auth = getAuth()
  

  useEffect(() => {
    onAuthStateChanged(auth, (data)=> {
   //console.log(data)

    })
  }, [])

  function truncate(string, n) {
    return string?.length > n ? string.substr(0, n - 1) + "..." : string;
  }


  return (
    <Link href={`/stories/${post.id}`}>
    <div className="cursor-pointer h-full relative pb-10 -mt-20 md:-mt-5 group mb-5">
      <img
        className=" rounded-lg h-40 md:h-60 w-full object-cover  lg:h-40 group-hover:scale-105 transition-transform duration-200 ease-in-out"
        src={post.image}
        alt=""
      />
      <h1 className="text-xl font-medium mt-5">{post.title}</h1>
      <p className="mt-5">{truncate(post.subtitle, 100)}</p>
      <div className="flex space-x-2 mt-5 absolute top-80 md:top-96 lg:top-80  pt-10  ">
        <img
          className="h-12 rounded-full"
          src={post.photoUrl? post.photoUrl : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcGUqk49i2CVXTyvkxnlzAogkaSf5z-taRGELvZi2CA&s`}
          alt={''}
        />
        <div className="flex flex-col">
          <p>{post.author}</p>
          <p className="text-sm">
            Published at {new Date(post.publishedAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default TopStoriesPosts;

import React from "react";
import { useRouter } from "next/router";
import Header from "../../components/Header";
import { db } from "../../firebase";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { useEffect } from "react";
import { useState } from "react";

import Footer from "../../components/Footer";

const StoriesSlug = ({ sid }) => {
  const router = useRouter();
  const { id } = router.query;

  const [storyDetail, setStoryDetail] = useState([]);

  const collectionRef = collection(db, "stories");

  const docRef = doc(collectionRef, id ? id : sid);

  console.log();

  useEffect(() => {
    const getData = () => {
      getDoc(docRef).then((doc) => {
        console.log(doc.data(), doc.id);
        setStoryDetail(doc.data(), doc.id);
      });
    };

    if (!id) {
      return;
    } else {
      getData();
    }
  }, [id]);

  return (
    <div className="max-w-7xl mx-auto">
     
      <Header />
      <div className="max-w-4xl mx-auto p-16">
        <h1 className="text-5xl font-medium mb-5">{storyDetail.title}</h1>
        <div className="flex justify-start items-center ">
          <img
            className="mr-5 w-10 rounded-full"
            src={
              storyDetail.photoUrl
                ? storyDetail.photoUrl
                : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcGUqk49i2CVXTyvkxnlzAogkaSf5z-taRGELvZi2CA&s`
            }
            alt=""
          />
          <p>
            by {storyDetail.author} published at{" "}
            {new Date(storyDetail._createdAt).toLocaleString()}
          </p>
        </div>
        <p className="text-3xl mt-5">{storyDetail.subtitle}</p>
      </div>

      <article className="mb-10">
        <img
          className="min-w-full md:min-w-full lg:p-10 "
          src={storyDetail.image}
          alt=""
        />
        <div className="mt-10 max-w-4xl mx-auto">
          <p className="text-xl">{storyDetail.article}</p>
        </div>
      </article>

      <hr />
      <div className="max-w-4xl mx-auto">
        <h1 className="text-xl">Comments</h1>
        <div className="flex mt-5 items-center mb-10">
          <img
            className="mr-5 w-10 rounded-full"
            src={
              storyDetail.photoUrl
                ? storyDetail.photoUrl
                : `https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAcGUqk49i2CVXTyvkxnlzAogkaSf5z-taRGELvZi2CA&s`
            }
            alt=""
          />
          <input
            className="p-3 w-full border-2 border-gray-400 rounded-md"
            type="text"
            placeholder="Share your thoughts"
          />
        </div>
      </div>

      <hr />

   <Footer/>
    </div>
  );
};

export default StoriesSlug;

export async function getServerSideProps({ query, params }) {
  //todo: when I try to get id in server it works perfectly.
  const sid = query || params;
  return {
    props: {
      sid: sid,
    },
  };
}

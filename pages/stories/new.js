import React, { useState } from "react";
import Header from "../../components/Header";
import { useRouter } from "next/router";

import { useEffect } from "react";

import { app, db, storage } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";

const NewStories = () => {
  const auth = getAuth();
  const collectionRef = collection(db, "stories");

  const router = useRouter();

  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");

  const [fileUrl, setFileUrl] = useState({});
  const [article, setArticle] = useState("");
  const [users, setUsers] = useState([]);

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      //console.log(data)
      setUsers(data);
    });
  }, []);

  console.log(users);

  const handleSubmit = (e) => {
    e.preventDefault();
    addDoc(collectionRef, {
      title: title,
      subtitle: subtitle,
      article: article,
      image: fileUrl,
      author: users.displayName,
      photoUrl: users.photoURL,
    }).then(() => {
      alert("Data Added");
    });
    router.push('/')
  };

  const onfileChange = (e) => {
    const file = e.target.files[0];
    const storageRef = ref(storage, `images/${file?.name}`);
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
      },
      (error) => {
        //handle unsuccessful uploads
        console.log(error);
      },
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log("File available at", downloadURL);
          setFileUrl(downloadURL);
        });
      }
    );
  };

  useEffect(() => {
    onAuthStateChanged(auth, (data) => {
      console.log(data);
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <main>
        <h1 className=" bg-black text-sm text-white text-center py-3">
          Submit for review will become available affter you add a title, plus
          featured image, video, and content.
        </h1>
        <div className="max-w-2xl mx-auto mt-10 ">
          <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
            <input
              className="h-12 text-xl p-5"
              type="text"
              placeholder="Title"
              onChange={(e) => setTitle(e.target.value)}
            />
            <input
              type="text"
              className="h-12 text-xl p-5"
              placeholder="Subtitle"
              onChange={(e) => setSubtitle(e.target.value)}
            />
            <input type="file" onChange={onfileChange} />
            <textarea
              className=" p-5"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Start writing"
              onChange={(e) => setArticle(e.target.value)}
            ></textarea>
            <button className="mt-10 bg-gray-700 text-white p-2 cursor-pointer rounded-md">
              Submit
            </button>
          </form>
        </div>
      </main>
    </div>
  );
};

export default NewStories;

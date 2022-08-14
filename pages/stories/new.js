import React, { useState } from "react";
import Header from "../../components/Header";
import { useForm } from "react-hook-form";
import { useSession } from "next-auth/react";
import { AiOutlineCloudUpload } from "react-icons/ai";
import { client } from "../../lib/client";
import { useRouter } from "next/router";

const NewStories = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const id = session?.user?.id;
  console.log(client.assets);

  const [imagesAssets, setImagesAssets] = useState(null);
  const [wrongTypeofImage, setWrongTypeofImage] = useState(false);
  const [field, setField] = useState();
  const [title, setTitle] = useState("");
  const [subtitle, setSubtitle] = useState("");
  const [author, setAuthor] = useState("");

  const uploadAuthor = () => {
    const author = session?.user?.name;
    const doc = {
      
      _type: "author",
      name: "John",
    };
    const query = `*[_type == 'photo'] {
      author->{
      name
      }
      }`;

    /* Fetch authors from the database */
    // client.fetch(query).then((data) => {
    //   console.log(data);
    //   const result = data.map((item) => item.author?.name);
    // }
    // console.log(result.includes(doc.name));
    client.create(doc).then((res) => {
      console.log("New author was created" + res._id);
      setAuthor(res);
    });
    //console.log(result.includes('RUBY DHAL'))
    /* check if the author is in the database */
    // if (result.includes(doc.name.id) === true) {
    //   console.log("author already exist");

    //   return;
    // } else {
    //   client.create(doc).then((res) => {
    //     console.log("New author was created" + res._id);
    //     setAuthor(res);
    //   });
    // }
  };

  const uploadImage = (e) => {
    const selectedImage = e.target.files[0];

    //to input an image to the upload field
    if (
      selectedImage.type === "image/png" ||
      selectedImage.type === "image/svg" ||
      selectedImage.type === "image/jpeg" ||
      selectedImage.type === "image/gif" ||
      selectedImage.type === "image/tiff"
    ) {
      setWrongTypeofImage(false);

      client.assets
        .upload("image", selectedImage, {
          contentType: selectedImage.type,
          filename: selectedImage.name,
        })
        .then((document) => {
          console.log(document);
          setImagesAssets(document);
        //   /* check database if author exist */
        //   const query = `*[_type == 'photo'] {
        // author->{
        // name
        // }
        // }`;
        //   client.fetch(query).then((data) => {
        //     const result = data.map((item) => item.author?.name);
        //     console.log(result);
        //     /* check if the author is in the database */
        //     if (result.includes(session?.user?.name) === true) {
        //       console.log("author already exist");
        //       let currentAuthor = result.find(item=>item === session?.user?.name)
        //       console.log(currentAuthor.id)
              
        //     } 
        //   });

          uploadAuthor();
        })
        .catch((error) => {
          console.log("Upload failed:", error.message);
        });
    } else {
      setWrongTypeofImage(true);
    }
  };

  const saveImage = () => {
    if (imagesAssets?._id) {
      const doc = {
        _type: "photo",
        title,
        subtitle,
        author: {
          _type: "reference",
          _ref: author?._id,
        },
        slug: {
          _type: "slug",
          current: title.toLowerCase().replace(/\s+/g, "-"),
        },
        mainImage: {
          _type: "image",
          asset: {
            _type: "reference",
            _ref: imagesAssets?._id,
          },
        },
      };
      client.create(doc).then(() => {
        alert("submitted");
        router.push("/");
      });
    } else {
      setField(true);

      setTimeout(() => {
        setField(false);
      }, 2000);
    }
  };

  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <main>
        <h1 className=" bg-black text-sm text-white text-center py-3">
          Submit for review will become available affter you add a title, plus
          featured image, video, and content.
        </h1>

        <input
          className="p-3 text-xl font-medium"
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          className="p-3 text-xl font-medium"
          type="text"
          placeholder="Subtitle"
          value={subtitle}
          onChange={(e) => setSubtitle(e.target.value)}
        />
        <div className="flex flex-col justify-center items-center mt-5 lg:hh-4/5">
          <div className="bg-secondaryColor p-3 flex flex-0.7 w-full">
            <div className="flex justify-center items-center flex-col border-2 border-dotted border-gray-300 p-3 w-full h-420 ">
              {/* //the ternary operation */}
              {!imagesAssets ? (
                <label>
                  <div className="flex flex-col items-center justify-center h-full">
                    <div className="flex flex-col justify-center items-center">
                      <p className="font-bold text-2xl">
                        <AiOutlineCloudUpload />
                      </p>
                      <p className="text-lg">Click to upload</p>
                    </div>
                  </div>
                  <input
                    type="file"
                    name="upload-image"
                    onChange={uploadImage}
                    className="hidden"
                  />
                </label>
              ) : (
                <div className="relative h-full">
                  <img
                    src={imagesAssets?.url}
                    alt="uploaded_image"
                    className="h-60 w-60"
                  />
                  <button
                    type="button"
                    className="absolute bottom-3 right-3 p-3 rounded-full bg-white text-xl cursor-pointer outline-none hover:shadow-md transition-all duration-500 ease-in-out"
                    onClick={() => setImagesAssets(null)}
                  >
                    {/* <MdDelete /> */}
                  </button>
                </div>
              )}
            </div>
          </div>
          {/* //The paragraph tag contains the error. */}
          {wrongTypeofImage && <p>Wrong type of image</p>}
          <div className="flex justify-end items-end mt-5">
            <button
              type="button"
              onClick={saveImage}
              className="bg-red-500 text-white font-bold p-2 rounded-full w-28 outline-none"
            >
              Save Image
            </button>

            <button onClick={uploadAuthor}>Upload Author</button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default NewStories;

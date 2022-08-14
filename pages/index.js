
import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";
import TopStoriesPosts from "../components/TopStoriesPosts";
import { client } from '../lib/client'

const Home = ({ posts }) => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Head>
          <title>Vocal|Home</title>
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Header />

        {/* top stories */}
        <div className="p-5 mt-5 grid col-span-1 sm:grid-cols-2 gap-3 md:gap-6">
          <div className=" relative">
            <div className="w-80 lg:w-fit">
              <h1 className="text-5xl font-bold ">Top Stories</h1>
              <p className="mt-4">
                Find new, Handpicked stories you'll love, updated daily
              </p>
            </div>
            <button className="border border-black p-2 rounded px-3 absolute top-10 right-0">
              Explore All
            </button>
            <img
              className="rounded mt-5"
              src="https://images.unsplash.com/photo-1610372073608-05b64a89a864?fit=crop&fm=jpg&h=375&ixid=MnwzNTY3MHwwfDF8YWxsfHx8fHx8fHx8MTY1OTM5MTIwOQ&ixlib=rb-1.2.1&q=75&w=625&utm_medium=referral&utm_source=vocal.media"
              alt=""
            />
            <h1 className="text-xl font-semibold mt-5 mb-5">
              Champagne : Commmodifying the woman who built an empire
            </h1>
            <p>
              "Come quickly, I am tasting the stars!" Dom Pérignon, the French
              monk (incorrectly) attributed to discovering champagne, is
              romantically remembered exclaiming t....
            </p>
            <div className="flex space-x-2 mt-5">
              <img
                className="h-12 rounded-full"
                src="https://cdn3.vectorstock.com/i/1000x1000/38/17/male-face-avatar-logo-template-pictograph-vector-11333817.jpg"
                alt=""
              />
              <div className="flex flex-col">
                <p>Talia Nicole</p>
                <p className="text-sm">about 16 hours ago in Proff</p>
              </div>
            </div>
          </div>
          <div className="bg-black text-white p-7 pb-20  rounded-lg lg:p-14">
            <h1 className="text-4xl font-medium">
              Share your stories and support creators.
            </h1>
            <p className="mt-5">
              Vocal is an all-in-one platform where you can share your stories,
              build an audience, and earn money.
            </p>
            <button className="border border-white rounded p-2 px-3 mt-5">
              Become a Creator
            </button>
            <h1 className="mt-5 text-lg font-bold mb-5">
              Why creators choose Vocal:
            </h1>
            <p>Easy-to-use story creation tools</p>
            <p>Earn money from reads, tips and challenges</p>
            <p>We moderate every story for safety</p>
            <p className="mb-5">No annoying ads</p>
            <a href="#" className="underline ">
              Learn more about how Vocal works
            </a>
          </div>
        </div>

        {/* Post */}
        <div className="p-5  grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-3 gap-y-40 md:gap-6 md:gap-y-28 ">
          {posts.map((post) => (
            <TopStoriesPosts key={post._id} post={post} />
          ))}
        </div>
      </div>
      {/* Challenges */}
      <div className="bg-black text-white p-5 pt-14 pb-14 mt-28">
        <div className="flex justify-between items-center max-w-7xl mx-auto">
          <div>
            <h1 className="text-2xl font-medium">Challenges</h1>
            <p>
              Enter themed storytelling contests to put your creativity to the
              test.
            </p>
          </div>

          <button className="border border-white p-2 rounded text-sm px-3">
            Explore All
          </button>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 max-w-7xl mx-auto">
          <div className="relative">
            <img
              className="h-96 object-cover rounded-md"
              src="https://res.cloudinary.com/jerrick/image/upload/c_fill,f_jpg,g_auto,h_756,q_auto,w_1892/62e2ef58e8e5ea001db5c545.jpg"
              alt=""
            />
            <button className="bg-pink-600 px-3 absolute top-5 left-5">
              v+
            </button>
            <div className="absolute top-72 left-5">
              <h1 className="text-3xl font-bold">New Worlds</h1>
              <p>
                Write the first chapter if a science fiction story. Win $10,000.
              </p>
            </div>
            <div className="p-5 bg-neutral-800">
              <h1>10,000 Grand Price</h1>
              <h1>10 days left</h1>
            </div>
          </div>

          <div className="relative">
            <img
              className="h-96 object-cover rounded-md"
              src="https://res.cloudinary.com/jerrick/image/upload/c_fill,f_jpg,g_auto,h_756,q_auto,w_1892/62e2ef58e8e5ea001db5c545.jpg"
              alt=""
            />
            <button className="bg-pink-600 px-3 absolute top-5 left-5">
              v+
            </button>
            <div className="absolute top-72 left-5">
              <h1 className="text-3xl font-bold">New Worlds</h1>
              <p>
                Write the first chapter if a science fiction story. Win $10,000.
              </p>
            </div>
            <div className="p-5 bg-neutral-800">
              <h1>10,000 Grand Price</h1>
              <h1>10 days left</h1>
            </div>
          </div>
          <div className="relative">
            <img
              className="h-96 object-cover rounded-md"
              src="https://res.cloudinary.com/jerrick/image/upload/c_fill,f_jpg,g_auto,h_756,q_auto,w_1892/62e2ef58e8e5ea001db5c545.jpg"
              alt=""
            />
            <button className="bg-pink-600 px-3 absolute top-5 left-5">
              v+
            </button>
            <div className="absolute top-72 left-5">
              <h1 className="text-3xl font-bold">New Worlds</h1>
              <p>
                Write the first chapter if a science fiction story. Win $10,000.
              </p>
            </div>
            <div className="p-5 bg-neutral-800">
              <h1>10,000 Grand Price</h1>
              <h1>10 days left</h1>
            </div>
          </div>
        </div>
      </div>
      {/* Creators */}
      <div className="max-w-7xl mx-auto">
        <h1 className="text-2xl font-medium">Creators Were Loving</h1>
        <p>
          Meet the people in your communities creating extraordinary things.
        </p>
        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-5 px-5 md:px-5 lg:px-0">
          <div className="flex flex-col items-center border border-gray-200 py-5">
            <img
              className="h-40 "
              src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png"
              alt=""
            />
            <p>Arvin Vaje</p>
            <p>5 published stories</p>
          </div>
          <div className="flex flex-col items-center border border-gray-200 py-5">
            <img
              className="h-40 "
              src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png"
              alt=""
            />
            <p>Arvin Vaje</p>
            <p>5 published stories</p>
          </div>
          <div className="flex flex-col items-center border border-gray-200 py-5">
            <img
              className="h-40 "
              src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png"
              alt=""
            />
            <p>Arvin Vaje</p>
            <p>5 published stories</p>
          </div>
          <div className="flex flex-col items-center border border-gray-200 py-5">
            <img
              className="h-40 "
              src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png"
              alt=""
            />
            <p>Arvin Vaje</p>
            <p>5 published stories</p>
          </div>
          <div className="flex flex-col items-center border border-gray-200 py-5">
            <img
              className="h-40 "
              src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png"
              alt=""
            />
            <p>Arvin Vaje</p>
            <p>5 published stories</p>
          </div>
          <div className="flex flex-col items-center border border-gray-200 py-5">
            <img
              className="h-40 "
              src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png"
              alt=""
            />
            <p>Arvin Vaje</p>
            <p>5 published stories</p>
          </div>
          <div className="flex flex-col items-center border border-gray-200 py-5">
            <img
              className="h-40 "
              src="https://iconape.com/wp-content/png_logo_vector/avatar-4.png"
              alt=""
            />
            <p>Arvin Vaje</p>
            <p>5 published stories</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;

export const getServerSideProps = async () => {
  const query = `*[_type == 'post'] {
    _id,
    title,
    subtitle,
    publishedAt,
    author -> {
    name,
    image
  },
    description,
    mainImage,
    slug
   
  }`;

  const posts = await client.fetch(query);

  return {
    props: {
      posts,
    },
  };
};

import React from "react";
import Header from "../../components/Header";
import TopStoriesPosts from "../../components/TopStoriesPosts";
import { client } from "../../lib/client";

function YourStories({ posts }) {
  return (
    <div className="max-w-7xl mx-auto ">
      <Header />
      <div className="px-4">
      <h1 className="text-5xl font-semibold mt-10 mb-4">Top Stories</h1>
      <p className="max-w-md" >New stories you’ll love, handpicked for you by our team and updated daily.</p>
      <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-5 gap-y-40 md:gap-y-28 mt-10">
        {posts.map((post) => (
          <TopStoriesPosts key={post._id} post={post} />
        ))}
      </div>
      </div>
    
    </div>
  );
}

export default YourStories;

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

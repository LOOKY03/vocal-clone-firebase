import React from "react";
import Header from "../../components/Header";

const index = () => {
  return (
    <div className="max-w-7xl mx-auto ">
      <Header />
      <div className="px-4">
        <h1 className="text-5xl font-semibold mt-10 mb-4">Communities</h1>
        <p className="max-w-md">
          Explore communities powered by creators sharing stories about your
          interests and passions.
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-2 gap-5 gap-y-40 md:gap-y-28 mt-10">
          {/* {storiesPost.map((post) => (
            <TopStoriesPosts key={post.id} post={post} />
          ))} */}
        </div>
      </div>
    </div>
  );
};

export default index;

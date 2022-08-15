import Link from "next/link";
import { urlFor } from "../lib/client";

const TopStoriesPosts = ({ post }) => {
  return (
    <Link href={`/stories/${post.slug.current}`}>
    <div className="cursor-pointer h-full relative pb-10">
      <img
        className=" rounded-lg h-40 md:h-60 w-full object-cover  lg:h-40"
        src={urlFor(post?.mainImage)?.url()}
        alt=""
      />
      <h1 className="text-xl font-medium mt-5">{post.title}</h1>
      <p className="mt-5">{post.subtitle}</p>
      <div className="flex space-x-2 mt-5 absolute top-72 md:top-80 lg:top-72 pt-10  ">
        <img
          className="h-12 rounded-full"
          src={urlFor(post.author.image).url()}
          alt=""
        />
        <div className="flex flex-col">
          <p>{post.author.name}</p>
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

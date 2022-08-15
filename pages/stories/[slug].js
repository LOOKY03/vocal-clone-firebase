import React from "react";
import Header from "../../components/Header";
import { client, urlFor } from "../../lib/client";
import PortableText from "react-portable-text";

const StoriesSlug = ({ post }) => {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <div className="max-w-4xl mx-auto p-16">
        <h1 className="text-5xl font-medium mb-5">{post.title}</h1>
        <div className="flex justify-start items-center ">
          <img
            className="mr-5 w-10 rounded-full"
            src={urlFor(post.author.image)}
            alt=""
          />
          <p>
            by {post.author.name} published at{" "}
            {new Date(post._createdAt).toLocaleString()}
          </p>
        </div>
        <p className="text-3xl mt-5">{post.subtitle}</p>
      </div>

      <article>
        <img
          className="min-w-full md:min-w-full lg:p-10 "
          src={urlFor(post.mainImage)}
          alt=""
        />
        <div className="mt-10">
          <PortableText
            content={post.body}
            projectId={process.env.NEXT_PUBLIC_PROJECT_ID}
            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
            serializers={{
                h1: (props) => (
                  <h1 className="text-4xl font-bold my-5" {...props}></h1>
                ),
                h2: (props) => (
                  <h2 className="text-4xl font-bold my-5" {...props}></h2>
                ),
                li: ({ children }) => (
                  <h1 className="ml-4 list-disc">{children}</h1>
                ),
                link: ({ href, children }) => (
                  <a href={href} className="text-blue-500 hover:underline">
                    {children}
                  </a>
                ),
              }}
          />
        </div>
      </article>
    </div>
  );
};

export default StoriesSlug;

export const getStaticPaths = async () => {
  const query = `*[_type == 'post'] {
          _id,
          slug {
          current
        }
         
        }
        `;
  const posts = await client.fetch(query);

  const paths = posts.map((post) => ({
    params: {
      slug: post.slug.current,
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
};

export const getStaticProps = async ({ params }) => {
  const query = `*[_type == "post" && slug.current == $slug][0] {
          _id,
          _createdAt,
          title,
          subtitle,
          author -> {
             name,
             image,
        },
        'comments': *[_type == 'comment' && 
                      post._ref == ^._id && approved == true],
        'commentsPending': *[_type == 'comment' && 
                      post._ref == ^._id && approved == false],
        description,
        mainImage,
        slug,
        body
        }`;

  const post = await client.fetch(query, {
    slug: params?.slug,
  });

  if (!post) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      post,
    },
    revalidate: 60, // update cache 60 secs
  };
};

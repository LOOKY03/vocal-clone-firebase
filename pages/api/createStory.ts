// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import sanityClient from "@sanity/client";
import { createReadStream } from "fs";
import { basename } from "path";

const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: "dpqvtqob",
  useCdn: process.env.NODE_ENV === "production",
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
};

const client = sanityClient(config);

export default async function createStory(
  req: NextApiRequest,
  res: NextApiResponse
) {
  let { _id, title, subtitle, image, text } = JSON.parse(req.body);

 

  // try {
  //   await client.create({
  //     _type: "post",
  //     title: title,
  //     subtitle: subtitle,
  //     slug: {
  //       _type: "slug",
  //       current: title.toLowerCase().replace(/\s+/g, "-"),
  //     },
  //     mainImage: {
  //       _type: 'image',
  //       asset: {
  //         _type: 'reference',
  //         _ref: _id,
  //         url: 'https://cdn.sanity.io/images/dpqvtqob/production/' + _id,
  //         originalFilename: image[0]?.name,
  //       }
  //     },
  //     body: text,
  //   });
  // } catch (err) {
  //   return res.status(500).json({ message: `Couldn't submit story`, err });
  // }
  console.log("Story submitted", );
  res.status(200).json({ message: `Story submitted` });
}

import { client } from "../client";

async function getBlogPosts() {
  const query = `*[_type == "post-blog"]`;
  const data = await client.fetch(query);
  return data;
}

async function getDonationPosts() {
  const query = `*[_type == "post-donation"]`;
  const data = await client.fetch(query);
  return data;
}

export { getBlogPosts, getDonationPosts };

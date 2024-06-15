import React, { useEffect, useState } from "react";
import NewArticleCard from "./NewArticleCard";
import { getBlogPosts } from "../utils/sanityAPI";
import { urlFor } from "../sanityImageUrl";

function NewArticleList() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const blogData = await getBlogPosts();
      setPost(blogData);
    }
    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      {posts.slice(0, 4).map((post) => (
        <NewArticleCard
          key={post.slug.current}
          postUrl={`/education/${post.slug.current}`}
          title={post.title}
          imgUrl={urlFor(post.image).url()}
          publishedAt={new Date(post?.publishedAt).toLocaleDateString()}
        />
      ))}
    </div>
  );
}

export default NewArticleList;

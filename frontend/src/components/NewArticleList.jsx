import React, { useEffect, useState } from "react";
import NewArticleCard from "./NewArticleCard";
import { client } from "../client";

function NewArticleList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[_type == "post-blog"]{
          title,
          slug {
            current
          },
          author,
          image {
            asset->{
              _id,
              url
            }
          },
          publishedAt,
          body[]{
            ...,
            _type == "image" => {
              asset->{
                _id,
                url
              }
            }
          },
          link,
          tags
        }`
      )
      .then((data) => setPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div className="flex flex-col items-center gap-2">
      {posts.slice(0, 4).map((post) => (
        <NewArticleCard
          key={post.slug.current}
          postUrl={`/education/${post.slug.current}`}
          title={post.title}
          imgUrl={post.image.asset.url}
          publishedAt={new Date(post?.publishedAt).toLocaleDateString()}
        />
      ))}
    </div>
  );
}

export default NewArticleList;

import React, { useEffect, useState } from "react";
import CardBlog from "./CardBlog";
import HeaderSection from "./HeaderSection";
import { urlFor } from "../sanityImageUrl";
import { getBlogPosts } from "../utils/sanityAPI";

function SectionEducation() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const blogData = await getBlogPosts();
      setPosts(blogData);
    }
    fetchData();
  }, []);

  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
        <HeaderSection
          title="Education"
          description="Our blog offers educational articles on how to respond to
          earthquakes, safety tips, and seismology knowledge."
        />
        <section className="text-gray-600 body-font">
          <div className="container px-5 p-5 mx-auto">
            <div className="grid md:grid-cols-3 gap-4 py-6">
              {posts.slice(0, 3).map((post) => (
                <CardBlog
                  key={post.slug.current}
                  postUrl={`/education/${post.slug.current}`}
                  title={post.title}
                  imgUrl={urlFor(post.image).url()}
                  body={post.body}
                />
              ))}
            </div>
          </div>
        </section>
      </div>
    </section>
  );
}

export default SectionEducation;

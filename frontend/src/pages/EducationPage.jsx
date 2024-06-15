import React from "react";
import CardBlog from "../components/CardBlog";
import { useState, useEffect } from "react";
import PageHeader from "../components/PageHeader";
import { urlFor } from "../sanityImageUrl";
import Loader from "../components/Loader";
import { getBlogPosts } from "../utils/sanityAPI";

function EducationPage() {
  const [posts, setPost] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const blogData = await getBlogPosts();
      setPost(blogData);
    }
    fetchData();
  }, []);

  return (
    <main>
      {posts.length === 0 ? (
        <div className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl min-h-screen sm:py-16 lg:px-6 flex items-center justify-center">
            <Loader />
          </div>
        </div>
      ) : (
        <section className="bg-white dark:bg-gray-900">
          <div className="mx-auto sm:px-6 lg:py-20 max-w-5xl 2xl:max-w-screen-xl px-6 py-12 sm:py-16">
            <PageHeader
              pageName="Education"
              pageDescription="Our blog offers educational articles on how to respond to
            earthquakes, safety tips, and seismology knowledge."
            />
            <div className="grid md:grid-cols-3 2xl:grid-cols-4 gap-4 py-6">
              {posts.map((data) => (
                <CardBlog
                  key={data.slug.current}
                  postUrl={`/education/${data.slug.current}`}
                  title={data.title}
                  imgUrl={urlFor(data.image).url()}
                  body={data.body}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}

export default EducationPage;

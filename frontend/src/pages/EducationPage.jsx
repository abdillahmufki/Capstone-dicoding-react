import React from "react";
import CardBlog from "../components/CardBlog";
import { useState, useEffect } from "react";
import { client } from "../client";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import PageHeader from "../components/PageHeader";
import { urlFor } from "../sanityImageUrl";

async function getBlogPosts() {
  const query = `*[_type == "post-blog"]`;
  const data = await client.fetch(query);
  return data;
}

function EducationPage() {
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const blogData = await getBlogPosts();
      setDatas(blogData);
    }
    fetchData();
  }, []);

  return (
    <>
      <Header />
      <div className="bg-white dark:bg-gray-900">
        <div className="py-6 2xl:py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6 mt-16">
          <PageHeader
            pageName="Education"
            pageDescription="Our blog offers educational articles on how to respond to
            earthquakes, safety tips, and seismology knowledge."
          />
          {/* <h2>You are viewing {posts.length}</h2> */}
          <div className="grid md:grid-cols-3 2xl:grid-cols-4 gap-4 py-6">
            {datas.map((data) => (
              <CardBlog
                key={data.slug.current}
                postUrl={`/education/${data.slug.current}`}
                title={data.title}
                imgUrl={urlFor(data.image).url()}
              />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default EducationPage;

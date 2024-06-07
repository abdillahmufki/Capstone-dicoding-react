import React, { useEffect, useState } from "react";
import Header from "../Layouts/Header";
import Footer from "../Layouts/Footer";
import { useParams } from "react-router-dom";
import { client } from "../client";
import Breadcrumb from "../components/Breadcrumb";
import { PortableText } from "@portabletext/react";
import NewArticleList from "../components/NewArticleList";
import { urlFor } from "../sanityImageUrl";
import Loader from "../components/Loader";

async function getData(slug) {
  try {
    const query = `*[_type == "post-blog" && slug.current == "${slug}"][0]`;
    const data = await client.fetch(query);
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

const PortableTextComponents = {
  types: {
    image: ({ value }) => <img src={value.imageUrl} />,
    callToAction: ({ value, isInline }) =>
      isInline ? (
        <a href={value.url}>{value.text}</a>
      ) : (
        <div className="callToAction">{value.text}</div>
      ),
  },

  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith("/")
        ? "noreferrer noopener"
        : undefined;
      return (
        <a href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
  },
};

const dateOptions = { year: "numeric", month: "short", day: "numeric" };

function DetailBlogPage() {
  const { slug } = useParams();
  const [detailPost, setDetailPost] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const detailData = await getData(slug);
      setDetailPost(detailData);
    }
    fetchData();
  }, [slug]);

  return (
    <>
      <Header />
      {!detailPost ? (
        <div className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl min-h-screen sm:py-16 lg:px-6 flex items-center justify-center">
            <Loader />
          </div>
        </div>
      ) : (
        <div className="bg-white dark:bg-gray-900">
          <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
            <div className="container max-w-5xl gap-5 mx-auto grid grid-cols-4 md:grid-cols-12 mb:my-8">
              <article className="rounded-2xl bg-white dark:bg-slate-800 divide-y col-span-12 lg:col-span-8 w-full justify-center flex-col dark:text-white text-black">
                <Breadcrumb
                  titleSlug={detailPost?.slug?.current}
                  title={detailPost?.title}
                />
                <figure className="max-h-[450px] overflow-hidden mt-5">
                  <img
                    src={urlFor(detailPost.image).url()}
                    alt={detailPost?.title}
                    className="w-full object-cover"
                  />
                </figure>
                <h2 className="text-3xl font-bold text-center py-4">
                  {detailPost?.title}
                </h2>
                <p className="text-center text-gray-500 dark:text-gray-400">
                  {new Date(detailPost?.publishedAt).toLocaleDateString(
                    "en-US",
                    dateOptions
                  )}
                </p>
                <div className="max-w-none mt-4 text-lg">
                  <PortableText
                    value={detailPost?.body}
                    components={PortableTextComponents}
                  />
                </div>
              </article>
              <aside className="px-4 md:px-8 md:pl-4 md:pr-0 lg:pl-8 lg:pr-0 mt-8 lg:mt-0 col-span-12 lg:col-span-4">
                <div className="h-max rounded-2xl bg-white dark:bg-slate-800 w-auto">
                  <header>
                    <h1 className="text-2xl font-bold p-4 tracking-tight dark:text-white dark:border-slate-700">
                      Artikel Terbaru
                    </h1>
                  </header>
                  <NewArticleList />
                </div>
              </aside>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </>
  );
}

export default DetailBlogPage;
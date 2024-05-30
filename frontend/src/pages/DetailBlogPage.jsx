import React, { useEffect, useState } from "react";
import Breadcrumb from "../components/Breadcrumb";
import { client } from "../client";
import { useParams } from "react-router-dom";

function DetailBlogPage() {
  const { slug } = useParams();
  const [detailPost, setDetailPost] = useState([]);

  useEffect(() => {
    client
      .fetch(
        `*[slug.current == "${slug}"]{
          title,
          slug,
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
      .then((data) => setDetailPost(data[0]))
      .catch(console.error);
  }, [slug]);

  return (
    <div>
      <Breadcrumb
        titleSlug={detailPost?.slug?.current}
        title={detailPost?.title}
      />
      <div className="max-w-[1100px] mx-auto mt-8">
        <article>
          <img src={detailPost?.image?.asset?.url} alt="" />
          <h2 className="text-3xl font-bold text-center py-4">
            {detailPost?.title}
          </h2>
          <div className="text-lg font-normal">
            {detailPost.body && detailPost?.body[0]?.children[0]?.text}
          </div>
        </article>
      </div>
    </div>
  );
}

export default DetailBlogPage;

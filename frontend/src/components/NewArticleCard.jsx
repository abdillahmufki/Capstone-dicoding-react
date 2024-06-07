import React from "react";
import { Link } from "react-router-dom";

function NewArticleCard({ title, publishedAt, imgUrl, postUrl }) {
  return (
    <Link to={postUrl}>
      <div className="hover:bg-slate-100 dark:hover:bg-slate-700 active:scale-95 active:rounded-xl transition-all w-full">
        <div className="grid grid-cols-12 items-center gap-x-2">
          <div className="col-span-4">
            <img src={imgUrl} alt="" className="object-cover" loading="lazy" />
          </div>
          <div className="col-span-8">
            <h1 className="text-base xl:text-sm text-gray-20 dark:text-white line-clamp-2 font-semibold">
              {title}
            </h1>
            <p className="text-xs text-gray-20 dark:text-gray-400">
              {publishedAt}
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default NewArticleCard;

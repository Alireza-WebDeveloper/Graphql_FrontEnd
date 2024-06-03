import React from "react";
import { BlogState } from "../../hooks/blog/index.type";

interface Post {
  post: BlogState;
}

const Item: React.FC<Post> = ({ post }) => {
  return (
    <li className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden p-3">
      <h2 className="text-xl font-bold px-4 py-2 text-gray-900 dark:text-gray-100">
        {post.title}
      </h2>
      <p className="text-gray-600 dark:text-gray-400 px-4 py-2">
        By: {post.author}
      </p>
      <div className="px-4 py-2 text-gray-700 dark:text-gray-300">
        {post.content.slice(0, 100)}...
      </div>
      <button className="bg-blue-500 dark:bg-blue-700 hover:bg-blue-700 dark:hover:bg-blue-500 text-white font-bold py-2 px-4 rounded-b-lg">
        Read More
      </button>
    </li>
  );
};

export default Item;

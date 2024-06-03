import React from "react";
import Item from "./item";
import { BlogState } from "../../hooks/blog/index.type";

interface ListProps {
  data: BlogState[];
}

const List: React.FC<ListProps> = ({ data }) => {
  const renderItem = data.map((post) => <Item key={post._id} post={post} />);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">Blog Posts</h1>
      <ul className="grid lg:col-end-3 md:grid-cols-2 grid-cols-1 gap-4">
        {renderItem}
      </ul>
    </div>
  );
};

export default List;

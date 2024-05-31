import React from "react";
import { JobState } from "../../../hooks/job/index.type";

interface ItemProps {
  item: JobState;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  const {
    title,
    description,
    company: { name },
  } = item;
  return (
    <li>
      <span className="text-gray-900">{title}</span> at
      <span className="text-gray-700">
        {name}: {description}
      </span>
    </li>
  );
};

export default Item;

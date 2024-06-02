import { ProductState } from "../../hooks/product/index.type";

interface ItemProps {
  item: ProductState;
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <div className="p-2 rounded bg-purple-700 text-white">
      <span>
        {item.id}-{item.name}
      </span>
      <span>price : ${item.price}</span>
    </div>
  );
};

export default Item;

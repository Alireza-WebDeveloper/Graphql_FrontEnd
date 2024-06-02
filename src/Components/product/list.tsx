import { ProductState } from "../../hooks/product/index.type";
import Item from "./item";

interface ListProps {
  data: ProductState[];
}

const List: React.FC<ListProps> = ({ data }) => {
  const renderItem = () => {
    return data.map((item) => {
      return <Item key={item.id} item={item} />;
    });
  };
  return <div className="flex flex-col space-y-4">{renderItem()}</div>;
};

export default List;

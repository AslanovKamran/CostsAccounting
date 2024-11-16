
import { useState } from "react";
import CostItemList from "./components/cost-item-list/cost-item-list";
import NewItem from "./components/new-item/new-item";


const INITIAL_STATE = [
  {
    id: 'c1',
    date: new Date(2021, 2, 12),
    title: 'Refrigerator',
    price: 999.99,
  },
  {
    id: 'c2',
    date: new Date(2021, 11, 25),
    title: 'MacBook',
    price: 1254,
  },
  {
    id: 'c3',
    date: new Date(2021, 4, 1),
    title: 'Jeans',
    price: 49.99,
  }
]

const App = () => {

  const [items, setItems] = useState(INITIAL_STATE);

  const addItemHandler = (item) => {
    setItems((prevItems) => [...prevItems, item]);

  };

  return (
    <>
      <NewItem onAddCost={addItemHandler} />
      <CostItemList costs={items} /> 
    </>
  );
}

export default App;

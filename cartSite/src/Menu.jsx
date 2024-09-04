import React, { useEffect, useState } from "react";
import ItemList from "./data.json";
import MenuStructure from "./MenuStructure";
import "./Menu.css";
import { GlobalContext } from "./Context";
import Searchbar from "./Searchbar";

const Menu = () => {
  const [Items, setItems] = useState(ItemList);
  
  useEffect(()=>{
    window.scrollTo(0,0);
  },[])

  // console.log(Items);
  return (
    <div className="Menu-containor">
      <GlobalContext.Provider value={{Items,setItems}}>
        
        <div className="Menu-heading">Menu Card</div>
        <div className="Menu-heading-containor">
          <Searchbar />
        </div>
        <div className="Menu-content">
          {Items.map((product) => (
            <MenuStructure key={product.id} product={product} />
          ))}
        </div>
      </GlobalContext.Provider>
    </div>
  );
};

export default Menu;

import React from 'react';
import './category.scss';
import Info from "./children/info"
import ItemList from "./children/itemList"
// import ItemList from "./chilren/itemList"
// import Hot from "./chilren/hot"

function category() {
  return (
    <div className="home">
        <Info />
        <ItemList />
        {/* <Activity />
        <Hot /> */}
        
    </div>
  );
}

export default category;

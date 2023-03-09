import React, { useState } from 'react';
import AddProd from './Components/Products/Addprod';
import ProductsList from './Components/Products/ProdList';
import ProductTotal from './Components/Products/total';
function App() {
  const [productList,setproductList]=useState([])
  const addProductHandler=(uId,uPrice,uName)=>{
    setproductList((prevProd)=>{
      return[...prevProd,{id:uId,price:uPrice,name:uName}]
    })
  }

  return (
    <div>
      <AddProd onAddprod={addProductHandler}/>
      <ProductsList prod={productList}/>
      <ProductTotal />
    </div>
  );
}

export default App;

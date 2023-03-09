import React, { useState } from "react";
import Button from "../UI/Button";
import Card from "../UI/card";
import classes from './Addprod.module.css'
const AddProd=(props)=>{
    const [prodId,setProdId]=useState('')
    const [prodPrice,setProdPrice]=useState('')
    const [prodName,setProdName]=useState('')
   const prodaddHandler=(event)=>{
    event.preventDefault();
    if(prodId.trim().length===0 || prodName.trim().length===0){
        return;
    }
    if(+prodPrice<1){
        return;
    }
    props.onAddprod(prodId,prodPrice,prodName)
    setProdId('');setProdName('');setProdPrice('')
   }

   const idHandler=(event)=>{
    setProdId(event.target.value)
   }
   const priceHandler=(event)=>{
    setProdPrice(event.target.value)
   }
   const nameHandler=(event)=>{
    setProdName(event.target.value)
   }

    return(
        <Card className={classes.input}>
        <form onSubmit={prodaddHandler}>
            <label htmlFor="prodId">Product Id</label>
            <input type="text" id="prodId" value={prodId} onChange={idHandler}></input>
            <label htmlFor="prodPrice">Selling Price</label>
            <input type="number" id="prodPrice" value={prodPrice} onChange={priceHandler}></input>
            <label htmlFor="prodName">Product Name</label>
            <input type="text" id="prodName" value={prodName} onChange={nameHandler}></input>
            <Button type="submit">Add Product</Button>
        </form>
        </Card>
    )
}

export default AddProd;
import React from "react";
import Card from "../UI/card";
import classes from './Prodlist.module.css'

const ProductsList=(props)=>{
    return (
        <Card className={classes.prod}>
            <ul>{props.prod.map(product => <li key={product.id}>{product.id} {product.price} {product.name}</li>)}</ul>
        </Card>
    )
}

export default ProductsList;
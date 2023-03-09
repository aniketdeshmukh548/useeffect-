import React from "react";
import Card from "../UI/card";
import classes from './total.css'
const ProductTotal=(props)=>{
    return(
        <Card className={classes.total}>
            <div>
                <h2>Total Price:</h2>
            </div>
        </Card>
    )
}
export default ProductTotal;
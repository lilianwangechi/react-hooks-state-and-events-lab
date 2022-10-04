import React,{useState} from "react";

function Item({ name, category }) {
  const[itemInCart,setItemInCart]=useState(false);
  function addToCart(){
    setItemInCart((inCart)=> !inCart);
  }

  const itemCart = itemInCart ? "in-cart" : ""
  return (
    <li className={itemCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={addToCart}>Add to Cart</button>
    </li>
  );
}

export default Item;

import React, { useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import {  ICartItem } from "./constants/IProps";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";


const App = () => {

  const [cart, setCart] = useState<ICartItem[]>([])

  const setCartItems = (data: ICartItem) => {
    try {
      var newArray: ICartItem[] = cart
    if(cart.length===0){
      newArray.push(data)
    }else{
      let existingItem: boolean = false
      newArray.map((item, i) => {
        if (item.product.id === data.product.id) {
          existingItem = true
          
          if(data.quantity === 0){
            newArray.splice(i, 1)
          }else{
            newArray[i].quantity = data.quantity
          }
        } 
      })
      if(!existingItem){
        newArray.push(data)
      }
      
    }
    setCart(newArray);
    console.log("cart inside", cart)
  }
  catch (e) {
    console.error(e);
  }
  }

  useEffect(() => {
    console.log("cart", cart)
  }, [cart])
  

  return (<div className="App">
        <Router>
        <Routes>
       
          <Route path="/" element={<HomePage cart={cart} setCartItems={setCartItems} />} />
          <Route path="/cart" element={<CartPage  cart={cart} setCartItems={setCartItems} />} />
          
        </Routes>
    </Router>
    </div>)
}

export default App

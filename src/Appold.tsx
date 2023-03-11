import React, {createContext, useState, useEffect} from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ICartContext, ICartItem } from "./constants/IProps";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";

export const CartContext = createContext<ICartContext>({
  cartItems : [],
    setCartItems : () => {},
});

const Appold = () => {

  const [cart, setCart] = useState<ICartContext>({
    cartItems : [],
    setCartItems: () => {}
  })

  useEffect(() => {
    const res = cart
    res.setCartItems = setCartItems
    setCart(res)
  }, [])
  

  const setCartItems = (data: ICartItem) => {
    var newArray: ICartItem[] = cart.cartItems
    if(cart.cartItems.length===0){
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
    setCart({cartItems: newArray, setCartItems: setCartItems});
  }

  return (<div className="App">
       <CartContext.Provider value={cart} ><Router>
        <Routes>
       
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          
        </Routes>
    </Router>
    </CartContext.Provider>
    </div>)
}

export default Appold

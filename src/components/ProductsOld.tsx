import React, { useState, useEffect, useContext } from "react";
import { getProducts, filterProducts } from "../actions/AProducts";
import Quantity from "./Quantity";
// import {ICartItem, IFilterBy, IProduct} from "../constants/IProps"
import {IFilterBy, IProduct} from "../constants/IProps"
// import { CartContext } from "../App";


const Products = (props: IFilterBy) => {
  const [products, setProducts] = useState<any[]>([])
  const [filteredProducts, setFilteredProducts] = useState<any[]>([])
  // const cartItems = useContext(CartContext)

  useEffect(() => {
    getProducts().then((products: IProduct[]) => 
    { setProducts(products)
      setFilteredProducts(products)
    })
  }, []);

  useEffect(() => {
    const res = filterProducts(products, props)
    setFilteredProducts(res)
  }, [props]);

  const updateCart = (product:IProduct, quantity: number ) => {
    // cartItems.setCartItems({product: product, quantity: quantity})
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        {filteredProducts.length>0 &&  <div className="grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          
            {filteredProducts.map((product: IProduct) => (
            <a key={product.id} href={void(0)} className="group">
              <div className="aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.imageURL}
                  alt={product.name}
                  className="h-full w-full object-cover object-center group-hover:opacity-75"
                />
              </div>
              <div className="flex flex-row grid-cols-2 gap-2">
                <div className="basis-3/5">
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">Rs.{product.price}</p>
                </div>
                <div className="basis-2/5 mt-8 text-lg font-medium text-gray-900"><Quantity product={product} updateCart={updateCart} /></div>
              </div>
            </a>
          ))}</div>}
          {filteredProducts.length <= 0 && 
        <div className="text-center w-full">
                      <p className="text-base font-semibold text-indigo-600"> No Products Found</p>
          <p className="mt-6 text-base leading-7 text-gray-600 text-sm">remove some filters to view products</p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
           
            
          </div>
        </div>}
      </div>
    </div>
  )
}

export default Products
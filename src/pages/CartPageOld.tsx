import React, {useContext} from "react";
// import {CartContext} from "../App"

const CartPageOld = () => {
    // const cartItems = useContext(CartContext);
    // console.log("cartItems", cartItems)
    return <div className="flex h-full flex-col overflow-y-scroll bg-white shadow-xl">
    <div className="flex-1 overflow-y-auto py-6 px-4 sm:px-6">


      <div className="mt-8">
        <div className="flow-root">
          <ul role="list" className="-my-6 divide-y divide-gray-200">
            {/* {cartItems.cartItems.length >0  && cartItems.cartItems.map((item) => (
              <li key={item.product.id} className="flex py-6">
                <div className="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <img
                    src={item.product.imageURL}
                    alt={item.product.name}
                    className="h-full w-full object-cover object-center"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <a href={void(0)}>{item.product.name}</a>
                      </h3>
                      <p className="ml-4">{item.product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">{item.product.color}</p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {item.quantity}</p>

                    <div className="flex">
                      <button
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))} */}
          </ul>
        </div>
      </div>
    </div>

    <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
      <div className="flex justify-between text-base font-medium text-gray-900">
        <p>Subtotal</p>
        <p>$262.00</p>
      </div>
      <p className="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
      <div className="mt-6">
        <a
          href="#"
          className="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700"
        >
          Checkout
        </a>
      </div>
      <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
        <p>
          or
          {/* <button
            type="button"
            className="font-medium text-indigo-600 hover:text-indigo-500"
            onClick={() => setOpen(false)}
          >
            Continue Shopping
            <span aria-hidden="true"> &rarr;</span>
          </button> */}
          <a
          href="/"
          className="font-medium text-indigo-600 hover:text-indigo-500"
        >
          Continue Shopping
        </a>
        </p>
      </div>
    </div>
  </div>
}

export default CartPageOld
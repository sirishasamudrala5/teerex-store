import React, {useEffect, useState} from "react";
import { IQuantityProps } from "../constants/IProps";

const Quantity = (props: IQuantityProps) => {
    const [count, setCount] = useState(0);
    const [showMsg, setShowMsg] = useState(false)

    useEffect(() => {
      if(count===props.product.quantity+1){
        setShowMsg(true)
        setTimeout(() => setShowMsg(false), 800)
    }
    },[count, props.product.quantity])

    const handleAdd = () => {
      if(count>0) setCount(count - 1) 
        else {
          setCount(0)
        }
        props.updateCart(props.product, count-1)
    }
    const handleRemove = () => {
        if(count<= props.product.quantity) setCount(count + 1) 
        else setCount(count)
        props.updateCart(props.product, count+1)
    }

    return <><div className="flex grid-cols-3 gap-2 border-2 border-gray-200 rounded-full px-2 py-0 text-sm">
    <button className="text-gray-400" disabled={count===0 ? true: false} onClick={handleAdd}>
      -
    </button>
    <p  className="px-1 bg-white m-0 w-6 text-center">{count}</p>
    <button className="text-gray-400" disabled={count===props.product.quantity+1 ? true: false} onClick={handleRemove}>
      +
    </button>
  </div>
  {showMsg && <span className="items-center font-xs text-red-500 text-xs mt-0">not available</span>}
</>
}

export default Quantity
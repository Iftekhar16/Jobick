// import { useState } from "react";
// let [gray, setGray] = useState(true);
// setGray = num % 2 === 0 ? 1 : 0;

export default function Item({num, item, desc, uCost, qty, total}){
    const gray = num % 2 === 0;
    return(
        <div className={`item-container flex px-3 py-2 text-dark1 dark:text-light1 ${gray? "" : "bg-gray-100 dark:bg-dark1 border-y-[1px] border-gray-200 dark:border-gray-800"}`}>
            <p className="number px-3 py-2 w-14">{num}</p>
            <p className="item px-3 py-2 w-40">{item}</p>
            <p className="description px-3 py-2 flex flex-grow">{desc}</p>
            <p className="unit-cost px-3 py-2 w-28">{uCost}</p>
            <p className="quantity px-3 py-2 w-14">{qty}</p>
            <p className="total px-3 py-2 w-28 text-end">{total}</p>
        </div>
    )
}
import React from "react";
import { useGlobalContext } from "./context";

export default function Cart() {
    const { deleteBtn, setDeleteBtn, amount } = useGlobalContext()

    if (deleteBtn || amount < 1) {
        return (
            <div className="font-body absolute right-10 top-16 z-20 lg:right-10 lg:top-8 w-72 h-56 bg-white lg:m-8 p-4 rounded-md shadow-2xl">
                <p>Cart</p>
                <hr />
                <h2 className=" my-4 mt-10 text-center text-sm font-semibold">Your cart is Empty.</h2>
                {deleteBtn && <p className="text-sm text-center mt-20">Refresh to add New Items.</p>}
            </div>)
    }


    return (
        <div className="font-body absolute right-10 top-16 z-20 lg:right-10 lg:top-8 w-72 h-56 bg-white lg:m-8 p-4 rounded-md shadow-2xl">
            <p>Cart</p>
            <hr />
            <div className="flex my-6">
                <img className="w-12 h-12 mr-3 rounded-xl" src="./images/image-product-1-thumbnail.jpg" />
                <div>
                    <span className="text-[12px]">Full Limited Edition Sneakers</span>
                    <p className="" >$125.00 x <span>{amount}</span> <span>${amount * 125.00}.00</span></p>
                </div>
                <img onClick={() => setDeleteBtn(true)} className="h-4 ml-6 mt-4 cursor-pointer" src="./images/icon-delete.svg" />
            </div>
            <button className="bg-[#ff7d1a] h-10 w-60 text-white rounded-lg flex justify-center items-center mt-5">Checkout</button>
        </div>
    )
}

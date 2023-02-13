import React, { useState } from "react";
import Navbar from "./navbar";
import Cart from "./cart";
import { useGlobalContext } from "./context";


export default function Header() {
  const { cartOpen, setCartOpen } = useGlobalContext()
  const [sidebarOpen, setSidebarOpen] = useState(false)

  return (
    <>
      <nav className="p-6 flex justify-between  lg:px-28 font-body">
        {sidebarOpen && <Navbar sidebar={sidebarOpen} setSidebar={setSidebarOpen} />}
        <div className="flex">
          <img onClick={() => setSidebarOpen(!sidebarOpen)} className="cursor-pointer h-6 mr-3 lg:hidden" src="./images/icon-menu.svg" alt="logo" />
          <img className="h-6" src="./images/logo.svg" alt="logo" />
          <ul className="hidden lg:flex ml-12 cursor-pointer">
            <li>Collections</li>
            <li className="mx-6">Men</li>
            <li>Women</li>
            <li className="mx-6">About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="flex">
          <img onClick={() => setCartOpen(!cartOpen)} className="h-8 cursor-pointer" src="./images/icon-cart.svg" alt="logo" />
          <img className="w-9  ml-3 hover:border-2 hover:border-[#ff7d1a] rounded-3xl" src="./images/image-avatar.png" alt="logo" />
        </div>
      </nav>
      {cartOpen && <Cart />}
    </>
  )
}
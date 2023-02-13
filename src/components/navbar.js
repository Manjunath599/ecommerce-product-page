import React from "react";


export default function Navbar({ sidebar, setSidebar }) {
    return (
        <div className={`font-body p-10 z-10 h-full  w-8/12 bg-white absolute  ${sidebar ? 'left-0' : '-left-96 '} top-0`}>
            <img onClick={() => setSidebar(!sidebar)} className="cursor-pointer w-6 my-4 " src="./images/icon-close.svg" />
            <ul className="mx-6 cursor-pointer">
                <li>Collections</li>
                <li className="my-6">Men</li>
                <li>Women</li>
                <li className="my-6">About</li>
                <li>Contact</li>
            </ul>
        </div>
    )
}
import React, { useState } from "react";

export default function Modal({ openModal, setModal, setValue, value, products }) {

    const { mainImage } = products[value]

    const checkNumber = (number) => {
        if (number > 3) {
            return 0
        }
        else if (number < 0) {
            return 3
        }
        else {
            return number
        }
    }

    const prevBtn = () => {
        setValue((prevState) => {
            let newState = prevState - 1
            return checkNumber(newState)
        })
    }

    const nextBtn = () => {
        setValue((prevState) => {
            let newState = prevState + 1
            return checkNumber(newState)
        })
    }

    console.log(value)

    return (
        <div className="bg-black pt-12 pl-96 opacity-95 absolute top-0 left-0 right-0 bottom-0 z-20">
            <div>
                <img onClick={() => setModal(!openModal)} className="w-6 cursor-pointer ml-[30rem]" src="./images/icon-close.svg" />
                <img className="w-[30rem] rounded-2xl ml-5" src={mainImage} />
                <img onClick={prevBtn} className="cursor-pointer absolute left-[23rem] top-60  border bg-white p-3 rounded-3xl" src="./images/icon-previous.svg" />
                <img onClick={nextBtn} className="cursor-pointer absolute right-[37rem] top-60  border bg-white p-3 rounded-3xl" src="./images/icon-next.svg" />
            </div>
            <div className="flex mt-4">
                {
                    products.map((item, index) => {
                        return <img key={item.id}
                            className={`${index === value && 'opacity-75 border-4 border-[#ff7d1a]'} mx-6 w-24 h-24 rounded-xl cursor-pointer`}
                            onClick={() => setValue(index)}
                            src={item.thumbnail} />
                    })
                }
            </div>
        </div>
    )
}
import React, { useState } from "react";


export default function Images() {
    const [value, setValue] = useState(1)

    const checkNumber = (number) => {
        if (number > 4) {
            return 1
        }
        else if (number < 1) {
            return 4
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

    return (
        <>
            <div className="relative lg:hidden">
                <img src={`./images/image-product-${value}.jpg`} />
                <img onClick={prevBtn} className="cursor-pointer  absolute left-2 top-40  border bg-white p-3 rounded-3xl" src="./images/icon-previous.svg" />
                <img onClick={nextBtn} className="cursor-pointer  absolute right-2 top-40  border bg-white p-3 rounded-3xl" src="./images/icon-next.svg" />
            </div>
        </>
    )
}
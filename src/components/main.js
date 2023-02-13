import React, { useState } from "react";
import Modal from "./modal";
import data from "./data";
import { useGlobalContext } from "./context";

export default function Main() {
    const { cartOpen, setCartOpen, amount, setAmount } = useGlobalContext()

    const [openModal, setOpenModal] = useState(false)
    const [products, setProducts] = useState(data)
    const [value, setValue] = useState(0)


    const { mainImage } = products[value]

    const handleMinus = () => {
        setAmount(amount - 1)
        if (amount <= 0) {
            setAmount(0)
        }
    }


    return (
        <main className="lg:flex lg:overflow-y-hidden font-body">
            {openModal && <Modal openModal={openModal} setModal={setOpenModal}
                products={products} value={value} setValue={setValue}
            />}
            <section className="hidden lg:block p-6 ml-24">
                <div>
                    <img onClick={() => setOpenModal(true)} className="w-[30rem] cursor-pointer rounded-2xl ml-5" src={mainImage} />
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
            </section>
            <section className="p-6 lg:ml-[7rem] lg:mt-16">
                <h3 className="text-[#ff7d1a] uppercase font-medium">Sneaker Company</h3>
                <h1 className="font-bold text-4xl my-4">Fall Limited Edition Sneakers</h1>
                <p className="mb-6 lg:w-96">
                    These low-profile sneakers are your perfect casual wear companion. Featuring a
                    durable rubber outer sole, they’ll withstand everything the weather can offer.
                </p>
                <span className="mr-4  font-bold text-3xl">$125.00</span>
                <span className="text-[#ff7d1a] border bg-[#ffede0] font-medium">50%</span>
                <p className="my-4"><s>$250.00</s></p>

                <div className="lg:flex">
                    <div className="p-6 flex justify-between items-center h-10 w-72 bg-[#f7f8fd] rounded-lg lg:w-44">
                        <img onClick={handleMinus} className="w-3 h-2 cursor-pointer" src="./images/icon-minus.svg" alt="minus" />
                        <span>{amount}</span>
                        <img onClick={() => setAmount(amount + 1)} className="w-3 h-3 cursor-pointer" src="./images/icon-plus.svg" alt="plus" />
                    </div>
                    <button onClick={() => setCartOpen(!cartOpen)} className="bg-[#ff7d1a] h-10 w-72 text-white rounded-lg flex justify-center items-center mt-5 lg:mt-0 lg:ml-4"><img src="/images/icon-cart.svg" alt="cart" />Add to cart</button>
                </div>
            </section>
        </main>
    )
}
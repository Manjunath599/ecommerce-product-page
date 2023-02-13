import React, { useState, useContext, createContext } from "react";


const AppContext = createContext()

const AppProvider = ({ children }) => {
    const [deleteBtn, setDeleteBtn] = useState(false)
    const [cartOpen, setCartOpen] = useState(false)
    const [amount, setAmount] = useState(0)


    return (
        <AppContext.Provider
            value={{
                deleteBtn,
                setDeleteBtn,
                cartOpen,
                setCartOpen,
                amount,
                setAmount,

            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext)
}

export { AppContext, AppProvider }
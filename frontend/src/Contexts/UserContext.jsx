import React, { useState } from "react"

export const UserContext = React.createContext()

export  function UserProvider({ children }) {
    const [user, setUser] = useState({
        status: false,
        name: "",
        password: "",
        email: "",
        id:"",
        cart:0,
        totalPrice:0
    })

    const [search, setSearch] = useState("all")
    

    return (
        <UserContext.Provider value={{ user, setUser, search, setSearch }}>
            {children}
        </UserContext.Provider>
    )
}


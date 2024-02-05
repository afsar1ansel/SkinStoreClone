import React, { useState } from "react"

export const UserContext = React.createContext()

export  function UserProvider({ children }) {
    const [user, setUser] = useState({
        status: false,
        name: "",
        password: "",
        email: "",
    })

    const [search, setSearch] = useState("")
    

    return (
        <UserContext.Provider value={{ user, setUser, search, setSearch }}>
            {children}
        </UserContext.Provider>
    )
}


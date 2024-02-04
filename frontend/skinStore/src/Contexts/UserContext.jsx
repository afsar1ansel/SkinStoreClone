import React, { useState } from "react"

export const UserContext = React.createContext()

export  function UserProvider({ children }) {
    const [user, setUser] = useState({
        status: false,
        name: "",
        password: "",
        email: "",
    })
    

    return (
        <UserContext.Provider value={{ user, setUser }}>
            {children}
        </UserContext.Provider>
    )
}


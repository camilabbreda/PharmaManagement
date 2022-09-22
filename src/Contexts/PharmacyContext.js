import { createContext, useContext, useState } from "react";

const LoginContext = createContext()

const LoginProvider = ({ children }) => {
    const [isLoggedIn, setIsLoggedIn] = useState()
    return (
        <LoginContext.Provider value={{
            isLoggedIn,
            setIsLoggedIn
        }} >
            {children}
        </LoginContext.Provider>
    )

}
const useLogin = () => {
    return useContext(LoginContext)
}
export { LoginProvider, useLogin }
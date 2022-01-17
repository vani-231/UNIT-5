import { createContext, useState } from "react";
export const JobContext = createContext({ token: "", handleToken: () => { } })
export const JobContextProvider = ({ children }) => {
    const [token, setToken] = useState("");

    const handleToken = (token) => {
        setToken(token);
    };
    return (
        <JobContext.Provider value={{ token, handleToken }}>
            {children}
        </JobContext.Provider>
    );



}


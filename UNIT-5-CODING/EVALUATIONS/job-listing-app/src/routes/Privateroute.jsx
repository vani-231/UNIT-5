import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { JobContext } from "../contexts/Jobcontext";

export const PrivateRoute = ({ children }) => {
    const { token } = useContext(JobContext);

    return !token ? <Navigate to="/login" /> : children;
};
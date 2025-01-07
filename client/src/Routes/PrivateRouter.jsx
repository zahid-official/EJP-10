/* eslint-disable react/prop-types */
import { useContext } from "react";
import ContextAPI from "../Components/Auth/ContextAPI";
import { Navigate, useLocation } from "react-router-dom";


const PrivateRouter = ({children}) => {
    // useContext 
    const {users, loading} = useContext(ContextAPI);
    // useLocation
    const location = useLocation();

    if(loading){
        return <div className="flex justify-center py-8"><span className="loading loading-ring loading-lg"></span></div>
    }

    if(users?.email){
        return children;
    }
    return <Navigate to={'/login'} state={location?.pathname}></Navigate>
};

export default PrivateRouter;
import { useState } from "react";
import { logout as logOutHandler } from "../../components/useLogout";

const getUserDetails = () => {
    const userDetails = localStorage.getItem('user');
    if(userDetails){
        return JSON.parse(userDetails)
    }
    return null
}

export const useUserDetails = () => {
    const [userDetails, setUserDetails] = useState(getUserDetails())

    const logout = () => {
        logOutHandler()
    }

    return{
        isLogged: Boolean(useUserDetails),
        username: userDetails?.username ? userDetails.username : 'Guest',
        logout,
    }
}
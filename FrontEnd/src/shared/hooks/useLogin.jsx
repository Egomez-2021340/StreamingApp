import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login as loginRequest } from "../../services";
import toast from "react-hot-toast";

export const useLogin = () => {
    const [isLoading, setIsLoading] = useState(false)

    const navigate = useNavigate()
    
    const login = async (password, email) => {
        setIsLoading(true)

        const response = await loginRequest({password, email})
    }

    setIsloading(false)

    if(response.error){
        return toast.error(response.e?.response?.data) || 
    }
        
}
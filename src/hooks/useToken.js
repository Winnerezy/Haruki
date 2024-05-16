import { useState } from "react"

export const useToken = () => {
    const [token, setToken] = useState(null)
    if(!token){
      return;
    }
      localStorage.setItem("authToken", token);
    return [token, setToken];
}

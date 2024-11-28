import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import api from "../API"


const useVaildation =()=>{
    const navigate = useNavigate()

    useEffect(()=>{
        const verfyToken = async()=>{
            try {
                const token = localStorage.getItem("token")
                const response = await api.post("/auth/validate", {token})
                if (!response.data.valid) {
                    throw new Error("Invalid Token")};
            } catch (error) {
                navigate("/login")
            }
        }
        verfyToken()
    },[navigate])
}
export default useVaildation
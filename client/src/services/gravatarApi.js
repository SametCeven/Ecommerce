import axios from "axios"

const GRAVATAR_API_KEY = import.meta.env.VITE_GRAVATAR_API_KEY

const gravatarInstance = axios.create({
    baseURL: "https://api.gravatar.com/v3/profiles",
    headers: {
        "Authorization" : `Bearer ${GRAVATAR_API_KEY}`,
        "Content-Type": "application/json"
    }
})


export default gravatarInstance
import axios from "axios";

const apiClient = axios.create({
    baseURL: 'https://127.0.0.1:3000/twitch/v1',
    timeout: 1000
})

export const login = async (data) => {
    try {
        return await apiClient.post ('/auth/login', data)
    } catch (error) {
        return {
            error: true,
            error
        }
    }
}
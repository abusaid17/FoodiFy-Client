import axios from "axios";
import { useNavigate } from "react-router";
import useAuth from "./useAuth";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5001'
})

const useAxiosSecure = () => {
    const navigate = useNavigate();
    const { logOut } = useAuth();
    // request interceptor to add authorization header for every secure call to the apis
    axiosSecure.interceptors.request.use(function (config) {
        const token = localStorage.getItem('accessToken');
        // console.log('Request stoped by interceptors', token);
        config.headers.authorization = `Bearer ${token}`;
        return config;
    }, function (error) {
        // Do sumthing with request error
        return Promise.reject(error);
    })
    // Intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function (response) {
        return response;
    }, async (error) => {
        const status = error.response.status;
        // console.log('Status code error in the interceptors : ', status);
        // if find error status 401 and 403 then user loged out and navigate login page 
        if (status === 401 || status === 403) {
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    })




    return axiosSecure;
};

export default useAxiosSecure;
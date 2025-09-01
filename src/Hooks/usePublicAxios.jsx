import axios from "axios";

const publicAxios = axios.create({
    baseURL: 'http://localhost:5001',

})
const usePublicAxios = () => {
    return publicAxios;
};

export default usePublicAxios;
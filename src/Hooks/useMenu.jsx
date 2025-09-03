// import { useEffect, useState } from "react"

import { useQuery } from "@tanstack/react-query"
import usePublicAxios from "./usePublicAxios"

const useMenu = () => {
    const publicAxios = usePublicAxios();

    const { data: menu = [], isPending: loading, refetch } = useQuery({
        queryKey: ['menu'],
        queryFn: async () => {
            const res = await publicAxios.get('/menu');
            return res.data;
        }
    })

    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);
    // useEffect(() => {
    //     fetch('http://localhost:5001/menu')
    //         .then(res => res.json())
    //         .then(data => {
    //             setMenu(data);
    //             setLoading(false);
    //         })
    // }, [])
    return [menu, loading, refetch]
}
export default useMenu
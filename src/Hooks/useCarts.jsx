import { useQuery } from "@tanstack/react-query";
import useAxios from "./useAxiosSecure";
import useAuth from "./useAuth";


const useCarts = () => {
    const axiosSecure = useAxios();
    const { user } = useAuth();

    const { data: cart = [], isLoading, refetch } = useQuery({
        queryKey: ['cart', user?.email],
        enabled: !!user?.email, // ✅ run only if user exists
        queryFn: async () => {
            // const res = await axiosSecure.get(`/carts?email${user.email}`);
            const res = await axiosSecure.get(`/carts?email=${user.email}`);
            return res.data;
        }
    })

    return [cart, refetch];
};

export default useCarts;
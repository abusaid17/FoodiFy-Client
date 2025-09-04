import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../../Hooks/useAuth";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";

const PaymentHistory = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const { data: payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    return (
        <div>
            <h1 className="text-orange-300 text-lg text-center my-6">--- At a Glamce ---</h1>
            <h1 className="text-3xl font-bold uppercase text-center">Your Payment History</h1>
            <div className="overflow-x-auto">
                <h1 className="uppercase my-6">Total Payments : {payments.length}</h1>
                <table className="table">
                    {/* head */}
                    <thead className="bg-yellow-800 uppercase text-white">
                        <tr>
                            <th>Email</th>
                            <th>Payment Status</th>
                            <th>Total Price</th>
                            <th>Transaction Id</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id} className="bg-base-200">
                                <th>{payment.email}</th>
                                <td className="text-lg font-bold text-orange-800"> $ {payment.price}</td>
                                <td>{payment.status}</td>
                                <td>{payment.transactionId}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;
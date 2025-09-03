import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../../../Hooks/useAxiosSecure";
import useCarts from "../../../../Hooks/useCarts";
import useAuth from "../../../../Hooks/useAuth";

const CheckoutForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState('');
  const [clientSecret, setclientSecret] = useState('');
  const [transaction, setTransaction] = useState('');
  const axiosSecure = useAxiosSecure();
  const [cart] = useCarts();
  const { user } = useAuth();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0)
  // const totalPrice = parseFloat(Price / 100);
  useEffect(() => {
    axiosSecure.post('/create-payment-intent', { price: totalPrice })
      .then(res => {
        console.log(res.data.clientSecret);
        setclientSecret(res.data.clientSecret);
      })
  }, [axiosSecure, totalPrice])

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: 'card',
      card
    })
    if (error) {
      console.log('[error ]', error);
      setError(error.message);
    }
    if (paymentMethod) {
      console.log('[paymentmethod ]', paymentMethod);
      setError('')
    }
    // Confirm card payment
    const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email || 'Annonymous',
            name: user.displayName || 'annonymous',

          }
        }
      }
    )
    if (confirmError) {
      console.log('payment error ', confirmError);
    }
    if (paymentIntent) {
      console.log('PAyment intend inside success', paymentIntent);
      if (paymentIntent?.status === 'succeeded') {
        console.log('trunsaction is is = ', paymentIntent.id);
        setTransaction(paymentIntent.id);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              fontSize: '16px',
              color: '#424770',
              '::placeholder': {
                color: '#aab7c4',
              },
            },
            invalid: {
              color: '#9e2146',
            },
          },
        }}
      />
      <button className='btn btn-primary my-8' type="submit" disabled={!stripe || !clientSecret}>
        Pay
      </button>
      <p className="text-red-600">{error}</p>
      {transaction && (
        <p className="text-green-500 font-semibold">
          This is your Transaction Id : {transaction}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import UseAxiosSecure from "../../../../hooks/UseAxiosSecure";

const CheckoutForm = () => {
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const axiosSecure = UseAxiosSecure();



    useEffect(() => {
        axiosSecure.post('/create-payment-intent')
    }, [axiosSecure])


    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('Payment error', error);
            setError(error.message);
        }
        else {
            console.log('Payment Method', paymentMethod);
            setError('');
        }
    }


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
            ></CardElement>
            <div className="flex justify-center">
                <button className="btn bg-[#03a9fc] border-0 font-bold text-white mt-5 px-10" type="submit" disabled={!stripe}>
                    Pay
                </button>
            </div>

            <p className="text-red-600">{error}</p>
        </form>
    );
};

export default CheckoutForm;
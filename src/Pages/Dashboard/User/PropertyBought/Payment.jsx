import { Elements } from "@stripe/react-stripe-js";
import { Helmet } from "react-helmet";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);


const Payment = () => {
    return (
        <div>
            <Helmet>
                <meta charSet="utf-8" />
                <title>Evergreen Estate | Payment</title>
            </Helmet>

            <div className="flex items-center justify-center my-10">
                <h2 className="text-5xl font-bold text-center uppercase">Payment</h2>
            </div>

            <div className="divider mb-10"></div>

            <div className="flex justify-center mb-20">
                <div className=" mt-10 md:w-1/2 border border-[#03a9fc] rounded-xl shadow-2xl p-14">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm></CheckoutForm>
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;
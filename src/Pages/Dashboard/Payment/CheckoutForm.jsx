import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import useAxiosSecure from "../../Shared/AxiosSecure/useAxiosSecure";
import UseCart from "../../Shared/Cart/UseCart";
import { AuthContext } from "../../../Providers/AuthProvider";

const CheckoutForm = () => {
  // states
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [cart] = UseCart();
  const [transactionId, setTransactionId] = useState("");

  // hooks
  const axiosSecure = useAxiosSecure();
  const { user } = useContext(AuthContext);

  // cart price
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  // stripe
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    axiosSecure
      .post("/create-payment-intent", { price: totalPrice })
      .then((res) => {
        // console.log(res.data.clientSecret);
        setClientSecret(res.data.clientSecret);
      });
  }, [axiosSecure, totalPrice]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);

    if (card === null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      console.log("error in payment method: ", error);
      setError(error.message);
    } else {
      console.log("payment method successfull: ", paymentMethod);
      setError("");
    }

    // confirm payment
    const { paymentIntent, error: confirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
            name: user?.displayName,
          },
        },
      });

    if (confirmError) {
      console.log("confirm error: ", confirmError);
    } else {
      console.log("payment intent: ", paymentIntent);
      if (paymentIntent.status === "succeeded") {
        console.log("transaction id: ", paymentIntent.id);
        setTransactionId(paymentIntent.id);
      }
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-4/5 bg-gray-300 p-3 mx-auto rounded-xl"
    >
      <CardElement
        options={{
          style: {
            base: {
              fontSize: "16px",
              color: "#424770",
              "::placeholder": {
                color: "#aab7c4",
              },
            },
            invalid: {
              color: "#9e2146",
            },
          },
        }}
      />
      <button
        className="btn btn-secondary my-5"
        type="submit"
        disabled={!stripe || !clientSecret}
      >
        Pay
      </button>
      <p className="text-red-500 font-bold">{error}</p>
      {transactionId && (
        <p className="text-green-500 font-bold">
          You&#39;r transaction Id : {transactionId}
        </p>
      )}
    </form>
  );
};

export default CheckoutForm;

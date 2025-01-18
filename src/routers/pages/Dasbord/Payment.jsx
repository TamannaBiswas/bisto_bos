import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../componentes/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";

// add pablishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

export default function Payment() {
  return (
    <div>
      <SectionTitle
        heading="Payment"
        subHeading="please pay to eat"
      ></SectionTitle>
      <div className="">
        <Elements stripe={stripePromise}>
          <CheckoutForm></CheckoutForm>
        </Elements>
      </div>
    </div>
  );
}

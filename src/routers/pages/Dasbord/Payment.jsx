// import { loadStripe } from "@stripe/stripe-js";
// import SectionTitle from "../../../componentes/SectionTitle";
// import { Elements } from "@stripe/react-stripe-js";
// import CheckoutForm from "./CheckoutForm";

// // add pablishable key
// const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

// export default function Payment() {
//   return (
//     <div>
//       <SectionTitle
//         heading="Payment"
//         subHeading="please pay to eat"
//       ></SectionTitle>
//       <div className="">
//         <div className="mb-5">
//           <select name="cars" id="cars" className="p-1">
//             <option value="volvo">Stripe</option>
//             <option value="saab">SSL Commerze</option>
//           </select>
//         </div>

//         <Elements stripe={stripePromise}>
//           <CheckoutForm></CheckoutForm>
//         </Elements>
//       </div>
//     </div>
//   );
// }
import { useState } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import SectionTitle from "../../../componentes/SectionTitle";
import CheckoutForm from "./CheckoutForm";
import SslCommerzForm from "./SslCommerzForm";

// add pablishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_GATEWAY_PK);

export default function Payment() {
  const [selectedGateway, setSelectedGateway] = useState("stripe");

  return (
    <div>
      <SectionTitle heading="Payment" subHeading="Please pay to eat" />

      <div className="mb-5">
        <select
          name="paymentMethod"
          id="paymentMethod"
          className="p-1"
          value={selectedGateway}
          onChange={(e) => setSelectedGateway(e.target.value)}
        >
          <option value="stripe">Stripe</option>
          <option value="sslcommerz">SSL Commerz</option>
        </select>
      </div>

      {selectedGateway === "stripe" ? (
        <Elements stripe={stripePromise}>
          <CheckoutForm />
        </Elements>
      ) : (
        <SslCommerzForm>
          
        </SslCommerzForm>
      )}
    </div>
  );
}

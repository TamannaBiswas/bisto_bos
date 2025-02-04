import axios from "axios";
import useAuth from "../../../hooks/useAuth";
import useCart from "../../../hooks/useCart";

export default function SslCommerzForm() {
  const { user } = useAuth();
  const [cart, refetch] = useCart();
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);
  const handelCreatePayment = async (e) => {
    e.preventDefault();
    const payment = {
      email: user.email,
      price: totalPrice,
      transactionId: "",
      date: new Date(),
      cartIds: cart.map((item) => item._id),
      menuItemIds: cart.map((item) => item.menuId),
      status: "pending",
    };
    const response = await axios.post(
      "http://localhost:5000/create-ssl-payment",
      payment
    );
    if (response.data?.getewayUrl) {
      window.location.replace(response.data?.getewayUrl);
    }
    console.log("response", response);
  };
  return (
    <div>
      <div className="mb-3">
        <h1 className="font-bold text-2xl">Payment Details</h1>
        <p>Complete your order dy providing your payment details</p>
      </div>
      {/* 00000000 */}
      <div className="card bg-base-100 w-full">
        <form className="card-body" onSubmit={handelCreatePayment}>
          <div className="form-control">
            <label className="label">
              <span className="label-text">place order</span>
            </label>
            <input
              type="email"
              value={user?.email || ""}
              className="input input-bordered"
              required
            />
          </div>

          <div className="form-control mt-6">
            <button type="submit" className="btn bg-[#fb923c]">
              Pay Now
            </button>
          </div>
        </form>
      </div>
      {/* 0000000 */}
    </div>
  );
}

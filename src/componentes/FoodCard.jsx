import Swal from "sweetalert2";
import useAuth from "../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useCart from "../hooks/useCart";

export default function FoodCard({ itsm }) {
  const { name, image, price, recipe, _id } = itsm;
  const { user } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handeleAddTOCart = () => {
    if (user && user.email) {
      //send card item to the database
      const cardItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
        recipe,
      };
      axiosSecure.post("/carts", cardItem).then((res) => {
        // console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });

          // refetch cart to updata the cart items count

          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "you are not Login?",
        text: "please login to add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,login",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="Shoes" />
      </figure>
      <p className="bg-slate-900 absolute right-8 mr-4 mt-4 px-4 text-white">
        ${price}
      </p>
      <div className="card-body">
        <h2 className="card-title flex-col items-center">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-center">
          <button
            onClick={handeleAddTOCart}
            className="btn btn-outline bg-slate-200 border-orange-400  border-0 border-b-4"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

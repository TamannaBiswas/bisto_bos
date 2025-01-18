import { useForm } from "react-hook-form";
import SectionTitle from "../../../componentes/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiousPublic from "../../../hooks/useAxiousPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`;

export default function AddItem() {
  const { register, handleSubmit, reset } = useForm();
  const axiosPublic = useAxiousPublic();
  const axiosSecure = useAxiosSecure();

  const onSubmit = async (data) => {
    // console.log(data);
    // image upload to imgbb and then get an url
    const imageFile = { image: data.image[0] };
    const res = await axiosPublic.post(image_hosting_api, imageFile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });

    if (res.data.success) {
      const menuItem = {
        name: data.name,
        category: data.category,
        price: parseFloat(data.price),
        recipe: data.recipe,
        image: res.data.data.display_url,
      };
      const menuRes = await axiosSecure.post("/menu", menuItem);
      // console.log(menuRes.data);
      if (menuRes.data.insertedId) {
        reset();
        Swal.fire({
          title: `${data.name} is added to the menu .`,
          icon: "success",
          draggable: true,
        });
      }
    }

    // console.log("with image url", res.data);
  };
  return (
    <div>
      <SectionTitle
        heading="add an item"
        subHeading="What's new?"
      ></SectionTitle>

      <div className="">
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* NAME */}
          <label className="form-control w-full">
            <div className="label">
              <span className="label-text">Recipe Name*</span>
            </div>
            <input
              {...register("name", { required: true })}
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
            />
          </label>
          {/* ******  */}

          <div className="flex gap-4">
            {/* PRICE */}
            <div className="">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Price</span>
                </div>
                <input
                  {...register("price", { required: true })}
                  type="text"
                  placeholder="price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            {/* *********** */}
            {/* Category */}
            <div className="">
              <label className="form-control w-full">
                <div className="label">
                  <span className="label-text">Recipe category*</span>
                </div>
                <select
                  defaultValue="default"
                  {...register("category", { required: true })}
                  className="select select-bordered w-full"
                >
                  <option disabled value="default">
                    Selected a category
                  </option>
                  <option value="salad">Salad</option>
                  <option value="pizza">Pizza</option>
                  <option value="soup">Soup</option>
                  <option value="dessert">Dessert</option>
                  <option value="drinks">Drinks</option>
                </select>
              </label>
            </div>
            {/* ********** */}
          </div>
          {/* recipe details */}
          <div className="">
            <label className="form-control">
              <div className="label">
                <span className="label-text">Recipe Details</span>
              </div>
              <textarea
                {...register("recipe", { required: true })}
                className="textarea textarea-bordered h-24"
                placeholder="Recipe Details"
              ></textarea>
            </label>
          </div>

          {/* FILE INPUT */}
          <div className="form-control w-full">
            <input
              {...register("image", { required: true })}
              type="file"
              className="file-input w-full mt-4"
            />
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Add Item
            <FaUtensils className="ml-3" />
          </button>
        </form>
      </div>
    </div>
  );
}

import { useContext } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../provider/AuthProvider";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiousPublic from "../../../hooks/useAxiousPublic";
import SoculGoogleLogin from "../../../componentes/SoculGoogleLogin";

export default function SingUp() {
  const axiosPublic = useAxiousPublic();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const { createUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();

  const onSubmit = (data) => {
    // console.log(data);

    createUser(data.email, data.password).then((result) => {
      const loggedUser = result.user;
      // console.log(loggedUser);
      updateUserProfile(data.name, data.photoURL)
        .then((result) => {
          // create user entry in the database
          const userInfo = {
            name: data.name,
            email: data.email,
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              // console.log("user add");
              reset();
              Swal.fire({
                title: "successfull",
                text: "user created successfully.",
                icon: "success",
                confirmButtonText: "Cool",
              });
              navigate("/");
            }
          });
        })
        // .catch((error) => console.log(error));
    });
  };

  return (
    <>
      <Helmet>
        <title>Bistro boss|Sign Up</title>
      </Helmet>
      <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left">
            <h1 className="text-5xl font-bold">Sign up nou !</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
            <form onSubmit={handleSubmit(onSubmit)} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">name</span>
                </label>
                <input
                  type="text"
                  {...register("name", { required: true })}
                  placeholder="name"
                  className="input input-bordered"
                />
                {errors.name && (
                  <span className="text-red-400 p-1">name is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  type="text"
                  {...register("photoURL", { required: true })}
                  placeholder="photoURL"
                  className="input input-bordered"
                />
                {errors.photoURL && (
                  <span className="text-red-400 p-1">photoURL is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  {...register("email", { required: true })}
                  placeholder="email"
                  className="input input-bordered"
                  // required
                />
                {errors.email && (
                  <span className="text-red-400 p-1">email is required</span>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: true,
                    minLength: 6,
                    maxLength: 20,
                    pattern: /(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])/,
                  })}
                  placeholder="password"
                  className="input input-bordered"
                  // required
                />
                {errors.password?.type === "required" && (
                  <span className="text-red-400 p-1">password is required</span>
                )}
                {errors.password?.type === "minLength" && (
                  <span className="text-red-400 p-1">
                    password must be 6 characters
                  </span>
                )}
                {errors.password?.type === "pattern" && (
                  <span className="text-red-400 p-1">
                    password must have one Uppercase, one lowercase,one number
                  </span>
                )}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Sign Up"
                />
              </div>
            </form>
            <p className="text-center p-5">
              <small>
                Allready have an account ?<Link to="/login">login</Link>
              </small>
            </p>
            <div className="flex justify-center">
              <SoculGoogleLogin></SoculGoogleLogin>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

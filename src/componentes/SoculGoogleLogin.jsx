import React from "react";
import { FaGoogle } from "react-icons/fa";
import useAuth from "../hooks/UseAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiousPublic from "../hooks/useAxiousPublic";

export default function SoculGoogleLogin() {
  const { googleSignIn } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const axiosPublic = useAxiousPublic();

  const handleGoogleSingIn = () => {
    googleSignIn().then((result) => {
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        navigate(from, { replace: true });
      });
    });
  };

  return (
    <div>
      <div className="p-8">
        <div className="divider"></div>
        <button onClick={handleGoogleSingIn} className="btn">
          <FaGoogle className="mr-4"></FaGoogle>
          Google
        </button>
      </div>
    </div>
  );
}

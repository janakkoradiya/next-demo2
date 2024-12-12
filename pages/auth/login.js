"use client";

import { LOGIN_API } from "@/src/api/authAPI";
import useAxios from "@/src/network/useAxios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { toast } from "react-hot-toast";
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/router";

const LogIn = () => {
  const router = useRouter();
  const axiosCreate = useAxios();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitBtnDisabled, setIsSubmitBtnDisabled] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors when typing
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.email) newErrors.email = "email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    return newErrors;
  };

  const handleSubmit = async (e) => {
    setIsSubmitBtnDisabled(true)
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setIsSubmitBtnDisabled(false)
    } else {
      console.log("Form Data:", formData);
      try {
        const res = await axiosCreate.post(LOGIN_API, formData);
        console.log("res ---- " + JSON.stringify(res))
        if (res.status === 200 || res.status === 304) {
          let userData = {
            email: res?.data?.user?.email,
            user_name: res?.data?.user?.username,
            access_token: res?.data?.tokens?.access,
          }
          document.cookie = `userData=${encodeURIComponent(JSON.stringify(userData))}; path=/;`;
          setFormData({ email: "", password: "" });
          router.push('./../profile')
          setFormData({ email: "", password: "" });
          toast.success("Login successfully")
        }
      } catch (error) {
        setIsSubmitBtnDisabled(false)
        console.error("Error message:", error.message);
        toast.error("Something went wrong, please try again.");
      }
    }
  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("tokenResponse ------ ", tokenResponse);
      try {
        const userInfoResponse = await fetch(
          "https://www.googleapis.com/oauth2/v2/userinfo",
          {
            headers: {
              Authorization: `Bearer ${tokenResponse.access_token}`,
            },
          }
        );

        if (!userInfoResponse.ok) {
          console.error(`Failed to fetch user info: ${userInfoResponse.statusText}`);
          toast.error("Something went wrong, please try again.");
        }
        const userInfo = await userInfoResponse.json();

        console.log("User Info:", userInfo);
        let userData = {
          email: userInfo?.email,
          access_token: tokenResponse?.access_token,
          user_name: userInfo?.name
        }
        document.cookie = `userData=${encodeURIComponent(JSON.stringify(userData))}; path=/;`;
        router.push('./../profile')
        toast.success("Login successfully")
      } catch (error) {
        console.error("Error during Google login:", error);
        toast.error("Something went wrong, please try again.");
      }
    },
    onError: (error) => {
      console.error("Google login failed:", error);
      toast.error("Something went wrong, please try again.");
    },
  });

  return (
    <div className="px-0 md:px-20">
      <div className="grid lg:grid-cols-2 gap-4 max-lg:gap-12 bg-gradient-to-r rounded-b-[5rem] from-primary to-primary px-6 md:px-12 py-12 h-[360px]">
        <div>
          <a href="/home" className="text-3xl font-extrabold text-white/70">
            LOGO
          </a>
          <div className="max-w-lg mt-16 max-lg:hidden">
            <h3 className="text-3xl font-extrabold text-white">
              Welcome Back!
            </h3>
            <p className="text- mt-4 text-white">
              Step into a world of possibilities as you log in to your account.
              Reconnect with your journey, access tailored experiences, and
              unlock endless opportunities designed just for you.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl md:mt-14 sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <h3 className="text-3xl font-extrabold text-primary">Login</h3>
            </div>
            <div className="sm:flex sm:items-start space-x-4 max-sm:space-y-4 mb-8">
              <button
                type="button"
                className="py-2.5 px-4 text-sm font-medium rounded-xl text-primary border hover:shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] hover:shadow-primary/20  focus:outline-none flex items-center space-x-2"
                onClick={handleGoogleLogin}
              >
                <span className="text-[20px]">
                  <FcGoogle />
                </span>{" "}
                <span>Google</span>
              </button>
            </div>

            <div>
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="text"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-primary"
                  placeholder="Enter email"
                />
                <span className="absolute right-4 text-red-500 text-xs">
                  {errors.email}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <label className="text-gray-800 text-sm mb-2 block">
                Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="password"
                  type="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-primary"
                  placeholder="Enter password"
                />
                <span className="absolute right-4 text-red-500 text-xs">
                  {errors.password}
                </span>
              </div>
            </div>

            <div className="mt-4 text-right">
              <button
                className="text-primary text-sm font-medium hover:underline"
                onClick={() => { router.push('./reset-password')}}
              >
                Forgot Password?
              </button>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full shadow-xl py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/80 focus:outline-none"
                disabled={isSubmitBtnDisabled}
              >
                Login
              </button>
            </div>
          </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-800">
                Don't have an account?{" "}
                <button
                  className="text-primary hover:underline"
                  onClick={() => { router.push('./register')}}
                >
                  Sign Up
                </button>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;

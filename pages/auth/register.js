"use client";

import { SIGNUP_API } from "@/src/api/authAPI";
import useAxios from "@/src/network/useAxios";
import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useRouter } from "next/router";
import { toast } from 'react-toastify';
import { useGoogleLogin } from "@react-oauth/google";

const SignUp = () => {
  const router = useRouter();
  const axiosCreate = useAxios();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" }); // Clear errors when typing
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";

    if (!formData.password) newErrors.password = "Password is required";
    else if (formData.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!formData.confirmPassword) newErrors.confirmPassword = "Confirm Password is required";
    else if (formData.confirmPassword.length < 6)
      newErrors.confirmPassword = "Confirm Password must be at least 6 characters";

    if (formData.password && formData.confirmPassword && formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Form Data:", formData);
      try {
        let data = {
          email: formData?.email,
          username: formData?.name,
          password: formData?.password,
          confirm_password: formData?.confirmPassword
        }
        const res = await axiosCreate.post(SIGNUP_API, data);
        console.log("res ---- " + JSON.stringify(res))
        router.push('./login')
        toast.success("Registration successfully")
      } catch (error) {
        console.error("Error during Registration: ", error);
        toast.error("Something went wrong, please try again.")
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
        router.push('./../home')
        toast.success("Registration successfully")
      } catch (error) {
        console.error("Error during Google registration:", error);
        toast.error("Something went wrong, please try again.");
      }
    },
    onError: (error) => {
      console.error("Google registration failed:", error);
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
              Create Your Account!
            </h3>
            <p className="text- mt-4 text-white">
              Embark on your journey by creating an account. Unlock personalized
              experiences and access a world of opportunities tailored just for
              you.
            </p>
          </div>
        </div>

        <div className="bg-white rounded-2xl md:mt-14 sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-[0_2px_10px_-3px_rgba(6,81,237,0.3)] max-lg:mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="mb-8">
              <h3 className="text-3xl font-extrabold text-primary">Sign Up</h3>
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
              <label className="text-gray-800 text-sm mb-2 block">Name</label>
              <div className="relative flex items-center">
                <input
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-primary"
                  placeholder="Enter your name"
                />
                <span className="absolute right-4 text-red-500 text-xs">
                  {errors.name}
                </span>
              </div>
            </div>

            <div className="mt-4">
              <label className="text-gray-800 text-sm mb-2 block">Email</label>
              <div className="relative flex items-center">
                <input
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-primary"
                  placeholder="Enter your email"
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

            <div className="mt-4">
              <label className="text-gray-800 text-sm mb-2 block">
                Confirm Password
              </label>
              <div className="relative flex items-center">
                <input
                  name="confirmPassword"
                  type="password"
                  value={formData.confirmPassword}
                  onChange={handleInputChange}
                  className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-primary"
                  placeholder="Enter Confirm Password"
                />
                <span className="absolute right-4 text-red-500 text-xs">
                  {errors.confirmPassword}
                </span>
              </div>
            </div>

            <div className="mt-8">
              <button
                type="submit"
                className="w-full shadow-xl py-3 bg-primary text-white font-semibold rounded-md hover:bg-primary/80 focus:outline-none"
              >
                Sign Up
              </button>
            </div>
          </form>

            <div className="mt-4 text-center">
              <p className="text-sm text-gray-800">
                Already have an account?{" "}
                <button 
                href="/auth/login" 
                className="text-primary hover:underline"
                onClick={() => { router.push('./login')}}>
                  Login
                </button>
              </p>
            </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;

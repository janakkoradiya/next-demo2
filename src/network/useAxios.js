import axios from "axios";
import { useRouter } from "next/router";
import { toast } from "react-toastify";
import { GetUserData } from "../utils/GetUserData";

const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

const useAxios = () => {

  const router = useRouter();
  const userData = GetUserData();
  let sessionTimeoutShown = false;

  const axiosCreate = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json;charset=UTF-8",
      "Access-Control-Allow-Origin": "*",
      authorization: `bearer ${userData?.access_token}`,
      'ref_token': `${userData?.refresh_token}`,
      Accept: "*/*",
    },
  });


  // Add Axios response interceptor
  axiosCreate.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      if (error?.response?.status == 401 &&
        typeof error?.response?.data?.message === "string" &&
        error?.response?.data?.message.includes("Logged Out Due To")
      ) {
        if (!sessionTimeoutShown) {
          sessionTimeoutShown = true
          localStorage.clear()
          document.cookie = "userData=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
          router.push('./../../pages/auth/login')
          toast.info("Session TimeOut, Please Login Again")
        }
      }
      return Promise.reject(error);
    }
  );

  return axiosCreate;
};

export default useAxios;

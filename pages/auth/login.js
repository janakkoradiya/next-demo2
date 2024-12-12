import { LOGIN_API } from "../api/authAPI";
import axios from "axios";
import { useRouter } from "next/router";
import { useGoogleLogin } from "@react-oauth/google";

export default function Login() {
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault();
    let data = {
      username: e.target.username.value,
      password: e.target.password.value,
    }

    try {
      const response = await axios.post(LOGIN_API, data);
      // console.log("response ---- ", response.data.data)
      localStorage.setItem('userData', JSON.stringify(response.data.data))
      // Set userData in cookies
      document.cookie = `userData=${encodeURIComponent(JSON.stringify(response.data.data))}; path=/;`;
      document.cookie = `access_token=${encodeURIComponent(response.data.data.access_token)}; path=/;`;
      router.push("./../protected/home");
    } catch (error) {
      throw error.response?.data?.message || "Login failed";
    }

  };

  const handleGoogleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      console.log("tokenResponse ------ ", tokenResponse);
      const userInfoResponse = await fetch(
        "https://www.googleapis.com/oauth2/v2/userinfo",
        {
          headers: {
            Authorization: `Bearer ${tokenResponse.access_token}`,
          },
        }
      );

      const userInfo = await userInfoResponse.json();

      console.log("User Info:", userInfo);
      document.cookie = `userData=${encodeURIComponent(JSON.stringify(tokenResponse))}; path=/;`;
      document.cookie = `access_token=${encodeURIComponent(tokenResponse.access_token)}; path=/;`;
      router.push("./../protected/home");
    },
    onError: (error) => {
      console.error("Google login failed:", error);
    },
    redirect_uri: "http://localhost:3001/protected/home", // Replace with your registered redirect URI
  });

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input name="username" type="text" placeholder="Username" required />
        <br />
        <input name="password" type="password" placeholder="Password" required/>
        <br />
        <button type="submit">Login</button>
      </form>
      <button onClick={() => router.push('./registration')}>Registration</button><br/>
      <button onClick={() => router.push('./reset-password')}>Reset Password</button><br/>
      <button onClick={() => router.push('./../demo')}>Demo</button>
      <button onClick={() => router.push('./../protected/home')}>Home</button>
      <div style={{ marginTop: "20px" }}>
        <h2>OR</h2>
        <button onClick={handleGoogleLogin}>Sign in with Google</button>
      </div>
    </div>
  );
}
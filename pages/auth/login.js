import { LOGIN_API } from "../api/authAPI";
import axios from "axios";
import { useRouter } from "next/router";

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

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input name="username" type="text" placeholder="Username" required />
        <br />
        <input name="password" type="password" placeholder="Password" required />
        <br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
import { LOGIN_API } from "../api/authAPI";
import axios from "axios";
import { useRouter } from "next/router";


export default function Login() {
  const router = useRouter();

  const handleLogin = async (e) => {
    router.push("./../home");
    
  };

  return (
    <div style={{ textAlign: "center" }}>
      <h1>Login</h1>
      <button onClick={handleLogin}>Login</button>
      <button onClick={() => router.push('./registration')}>Registration</button>
    </div>
  );
}
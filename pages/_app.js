import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from 'react-toastify';
import { Toaster } from "react-hot-toast";
import 'react-toastify/dist/ReactToastify.css';

const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

export default function App({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <Toaster position="top-right" reverseOrder={false} />
      <Component {...pageProps} />
      <ToastContainer />
    </GoogleOAuthProvider>
  );
}

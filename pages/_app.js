import "@/styles/globals.css";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const googleClientId = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID;

export default function App({ Component, pageProps }) {
  return (
    <GoogleOAuthProvider clientId={googleClientId}>
      <Component {...pageProps} />
      <ToastContainer />
    </GoogleOAuthProvider>
  );
}


import { useRouter } from "next/router";
const ResetPassword = () => {
    const router = useRouter();
    return (
        <>
            <h1>RESET PASSWORD</h1>
            <button onClick={() => router.push('./login')}>Login</button><br/>
        </>
    )
};

export default ResetPassword;
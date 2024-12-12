
import { useRouter } from "next/router";

const Registration = () => {
    const router = useRouter();
    return (
        <>
            <h1>Registration</h1>
            <button onClick={() => router.push('./login')}>Login</button><br/>
        </>
    )
};

export default Registration;
import { useRouter } from "next/router";

const ResetPassword = () => {
    const router = useRouter();

    return (
        <div >
            <h1 >Welcome to the ResetPassword Page</h1>
            <button onClick={() => router.push('./../contact')}>Contact</button>
            <button onClick={() => router.push('./../about')}>About</button>
        </div>
    );
};

export default ResetPassword;
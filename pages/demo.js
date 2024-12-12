
import { useRouter } from "next/router";


const Demo = () => {
    const router = useRouter();

    return (
        <div >
            <h1 >Welcome to the Demo Page</h1>
            <button onClick={() => router.push('./auth/login')}>Login</button><br/>
            <button onClick={() => router.push("./protected/home")}>Home</button>
        </div>
    );
};

export default Demo;

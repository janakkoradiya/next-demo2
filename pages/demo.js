
import { useRouter } from "next/router";

const Demo = () => {
    const router = useRouter();

    return (
        <div >
            <h1 >Welcome to the Demo Page</h1>
            <button onClick={() => router.push('./home')}>Home</button>
        </div>
    );
};

export default Demo;

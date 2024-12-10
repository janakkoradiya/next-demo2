import styles from './../../styles/home.module.css';
// import styles from '../styles/home.module.css';
import { useRouter } from "next/router";

const Home = () => {
    const router = useRouter();

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Welcome to the Home Page</h1>
            <button onClick={() => router.push('./contact')}>Contact</button>
            <button onClick={() => router.push('./about')}>About</button>
        </div>
    );
};

export default Home;

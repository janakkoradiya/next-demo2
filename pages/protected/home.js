import Header from '@/components/header';
import styles from '../../styles/Home.module.css';
// import styles from '../styles/Home.module.css';
// import Footer from '@/components/footer';
import { useRouter } from "next/router";
import { googleLogout } from '@react-oauth/google';


const Home = () => {
    const router = useRouter();

    const logout = () => {
        googleLogout()
        document.cookie = "userData=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        document.cookie = "access_token=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/";
        router.push('./../auth/login')
    }

    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Welcome to the Home Page</h1>
            <button onClick={() => router.push('./contact')}>Contact</button>
            <button onClick={() => router.push('./about')}>About</button>
            <div><button onClick={logout}>Log Out</button></div>
        </div>
    );
};

export default Home;

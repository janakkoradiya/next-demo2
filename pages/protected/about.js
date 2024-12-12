import styles from '../../styles/About.module.css';
// import styles from '../styles/About.module.css';
import { useRouter } from "next/router";


const About = () => {
    const router = useRouter();
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>About Us</h1>
            <button onClick={() => router.push('./contact')}>Contact</button>
            <button onClick={() => router.push('./home')}>Home</button>
        </div>
    );
};

export default About;
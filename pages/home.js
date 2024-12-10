import Header from '@/components/header';
import styles from './../styles/home.module.css';
import ProtectedRoute from './protectedRoute';
// import Footer from '@/components/footer';

const Home = () => {
    return (
        <ProtectedRoute>
            <div className={styles.container}>
                <h1 className={styles.heading}>Welcome to the Home Page</h1>
            </div>
        </ProtectedRoute>
    );
};

export default Home;

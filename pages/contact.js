import styles from './../styles/contact.module.css';
import ProtectedRoute from './protectedRoute';

const Contact = () => {
  return (
    <ProtectedRoute>
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
    </div>
    </ProtectedRoute>
  );
};

export default Contact;
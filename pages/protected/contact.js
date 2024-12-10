import styles from './../../styles/contact.module.css';
// import styles from '../styles/Contact.module.css';
import { useRouter } from "next/router";

const Contact = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Contact Us</h1>
      <button onClick={() => router.push('./home')}>Home</button>
      <button onClick={() => router.push('./about')}>About</button>
    </div>
  );
};

export default Contact;
import { Link } from 'react-router-dom';
import styles from './Home.module.css';
import desenvolvedor from './img/developer-red.svg'

function Home() {
    return (
        <section className={styles.home}>
            <div className={styles.apresentacao}>
                <p>Olá, sou <br />
                    <span>Gabriel Ventura</span><br />
                    Dev Full Stack
                </p>
                <Link to='/sobre' className={`${styles.btn} ${styles.btn_red}`} aria-label="Saiba mais sobre Gabriel Ventura">
                    Saiba mais
                </Link>
            </div>
            <figure>
                <img className={styles.img_home} src={desenvolvedor} alt="Desenvolvedor" />
            </figure>
        </section>
    );
}

export default Home;

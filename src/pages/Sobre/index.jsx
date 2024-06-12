import styles from './Sobre.module.css';
import avatar from './images/avatar.png'
import html from './images/icon-html.svg';
import css from './images/icon-css.svg';
import js from './images/icon-js.svg';
import react from './images/icon-react.svg';
import node from './images/icon-node.svg';
import sql from './images/icon-sql.svg';

function Sobre() {
    return (
        <section className={styles.sobre}>
            <div className={styles.bio}>
                <img src={avatar} alt="" className={styles.avatar} />
                <div className={styles.textos}>
                    <h2>Sobre</h2>
                    <p>Sou <span>Gabriel Ventura</span> <br />
                        <strong>Dev Full Stack</strong>
                    </p>
                    <p>Trabalho com desenvolvimento web desde 2023</p>
                    <p>Sou apaixonado por transformar ideias em realidade digital</p>
                    <p>Especializado em criação de aplicações dinâmicas e intuitivas, <br />
                        com foco na experiência do usuário.
                    </p>
                </div>
            </div>
            <div className={styles.techs}>
                <h3>Techs</h3>
                <div className={styles.icones}>
                    <img src={html} alt="Ícone do HTML" />
                    <img src={css} alt="Ícone do CDD" />
                    <img src={js} alt="Ícone do JS" />
                    <img src={react} alt="Ícone do REACT" />
                    <img src={node} alt="Ícone do NODE" />
                    <img src={sql} alt="Ícone do SQL" />
                </div>
            </div>
        </section>
    )
}
export default Sobre
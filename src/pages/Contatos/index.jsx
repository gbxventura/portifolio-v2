import styles from './Contatos.module.css';
import { GoMail } from 'react-icons/go'
import { BsInstagram, BsGithub, BsLinkedin } from 'react-icons/bs'

function Contatos() {
    return (
        <section className={styles.contatos}>
            <h2>Contatos</h2>
            <h3>Entre em contato</h3>
            <p>Para que possamos conversar mais sobre.</p>

            <div className={styles.icones}>
                <a href="mailto:gabriel.ventura20200@gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Enviar email para Gabriel Ventura">
                    <GoMail className={styles.icone} />
                </a>
                <a href="https://www.instagram.com/gbxventura" target="_blank" rel="noopener noreferrer" aria-label="Instagram de Gabriel Ventura">
                    <BsInstagram className={styles.icone} />
                </a>
                <a href="https://www.github.com/gbxventura" target="_blank" rel="noopener noreferrer" aria-label="GitHub de Gabriel Ventura">
                    <BsGithub className={styles.icone} />
                </a>
                <a href="https://www.linkedin.com/in/gabriel-ventura-13028b208/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn de Gabriel Ventura">
                    <BsLinkedin className={styles.icone} />
                </a>
            </div>
        </section>
    )
}

export default Contatos

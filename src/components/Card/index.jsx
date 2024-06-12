import styles from './Card.module.css';
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa";
import { BsArrowRight } from "react-icons/bs";

// eslint-disable-next-line react/prop-types
function Card({ titulo, descricao, html_url }) {
    return (
        <section className={styles.card}>
            <h3>{titulo}</h3>
            <p>{descricao}</p>
            <div className={styles.card_footer}>
                <div className={styles.card_icones}>
                    <FaHtml5 />
                    <FaCss3Alt />
                    <FaJs />
                    <FaReact />
                </div>
                <a href={html_url} target='_blank' rel='noopenner noreffer' className={styles.card_botao}>
                    <BsArrowRight />

                </a>
            </div>
        </section>
    )
}

export default Card;

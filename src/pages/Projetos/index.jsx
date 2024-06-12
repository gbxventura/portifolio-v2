import { useEffect, useState } from "react";
import Card from "../../components/Card";
import styles from './Projetos.module.css';

function Projetos() {

    const [repositorios, setRepositorios] = useState([]);

    useEffect(() => {
        const buscarRepositorios = async () => {
            const resposta = await fetch('https://api.github.com/users/gbxventura/repos?page=1&per_page=50');
            const dados = await resposta.json();
            // console.log(dados); // Adicionando console.log para verificar os dados recebidos
            setRepositorios(dados);
        }
        buscarRepositorios();
    }
        , []);


    return (
        <section className={styles.projetos}>
            <h2>Projetos</h2>
            {
                repositorios.length > 0 ? (
                    <section className={styles.lista}>
                        {
                            repositorios.map((repo) =>
                                <Card
                                    key={repo.id}
                                    titulo={repo.name} // Alterando name para titulo
                                    descricao={repo.description}
                                    html_url={repo.html_url}
                                />
                            )
                        }
                    </section>
                ) : (
                    <p>Carregando repositorios...</p>
                )
            }
        </section>
    )
}

export default Projetos;

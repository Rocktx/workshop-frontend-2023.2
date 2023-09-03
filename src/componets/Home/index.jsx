import styles from "./Home.css";

function Home() {
    return (
        <div class Name={styles.Home}>
            <section className="home">
                <div className="home-conteudo">
                    <p>
                        Star Wars é uma franquia do tipo space opera estadunidense criada pelo cineasta George Lucas, que conta com uma série de nove filmes de fantasia científica e dois spin-offs.
                    </p>
                    <p>
                        A princesa Leia é mantida refém pelas forças imperiais comandadas por Darth Vader. Luke Skywalker e o capitão Han Solo precisam libertá-la e restaurar a liberdade e a justiça na galáxia.
                    </p>
                </div>
                <div className="img-conteudo">
                        <img src="src/componets/Img/star_wars-home.jpg" width={1000}/>
                </div>
            </section>
        </div>
    )
}
export default Home 

import styles from "./Header.module.css";

function Header()  {
    return(
        <header className={styles.header}>
            <img src="src/componets/Img/Star_Wars_Logo.png" alt="logo Star Wars"/>
            <nav>
                <a href="#">Ínicio</a>
                <a href="#galeria">Galeria</a>
            </nav>
        </header>
    )
}
export default Header
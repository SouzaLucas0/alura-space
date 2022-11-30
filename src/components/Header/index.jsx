import Logo from "../Logo"
import SearchBar from "../SearchBar"
import styles from './Header.module.scss'

const Header = () => {
    return(
        <header className={styles.cabecalho}>
            <Logo/>
            <SearchBar/>
        </header>
    )
}

export default Header;
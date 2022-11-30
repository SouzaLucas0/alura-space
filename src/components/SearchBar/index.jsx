import search from'./search.png'
import styles from './SeachBar.module.scss'

const SearchBar = () => {
    return(
        <div className={styles.searchBar}>
            <input
                className={styles.searchBar__input}
                type="text"
                placeholder="O que você procura?"
            />
            <img src={search} alt="ícone de lupa" />
        </div>
    )
}

export default SearchBar;
import search from'./search.png'

const SearchBar = () => {
    return(
        <div>
            <img src={search} alt="ícone de lupa" />
            <input
                type="text"
                placeholder="O que você procura?"
            />
        </div>
    )
}

export default SearchBar;
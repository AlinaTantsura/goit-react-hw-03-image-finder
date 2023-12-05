import SearchbarStyled from "./Searchbar.styled";

const Searchbar = ({ onSubmit }) => {
    return (
        <SearchbarStyled>
            <form onSubmit={onSubmit}>
                <button type="submit" >
                    <span>Search</span>
                </button>

        <input
       name="search"             
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
  </form>
</SearchbarStyled>
    )
}

export default Searchbar;
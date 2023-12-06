import Button from "./Button.styled";
import Form from "./Form.styled";
import SearchbarStyled from "./Searchbar.styled";

const Searchbar = ({ onSubmit }) => {
    return (
        <SearchbarStyled>
            <Form onSubmit={onSubmit}>
                <Button type="submit" >
                    <span>Search</span>
                </Button>

        <input
            name="search"             
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
        />
            </Form>
</SearchbarStyled>
    )
}

export default Searchbar;
import React from "react";
import { 
HeaderContainer,
Logo,
NavLinks,
NavLink,
SearchBar,
SearchButton,
Input
} from './styled'

interface HeaderComponentProps {
  search: string;
  setSearch: (search: string) => void;
  handleSearch: () => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({ search, setSearch, handleSearch }) => {
  return (
    <HeaderContainer>
      <Logo>MovieDB</Logo>
      <NavLinks>
        <NavLink href="/">Home</NavLink>
        <NavLink href="/about">About</NavLink>
        <NavLink href="/contact">Contact</NavLink>
      </NavLinks>
      <SearchBar>
        <Input
          type="text"
          placeholder="Search movies..."
          value={search}
          onChange={(e) => setSearch(e.target.value)} // Update search state
        />
        <SearchButton onClick={handleSearch}>Search</SearchButton>
      </SearchBar>
    </HeaderContainer>
  );
};

export default HeaderComponent;
import React, {forwardRef} from "react";

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

const HeaderComponent = forwardRef<HTMLInputElement, HeaderComponentProps>(
  ({ search, setSearch, handleSearch }, ref) => {
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
            onChange={(e) => setSearch(e.target.value)}
            ref={ref} // ✅ Correctly using ref here
          />
          <SearchButton onClick={handleSearch}>Search</SearchButton>
        </SearchBar>  
      </HeaderContainer>
    );
  }
);



export default HeaderComponent;
import styled from "styled-components";
import Link from "next/link";


export const HeaderContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #1e1e1e;
  padding: 20px;
  border-radius: 10px;
  margin-bottom: 20px;
  @media (max-width: 800px) {
   flex-direction: column;
   
  }
`;

// 800
 export const Logo = styled.h1`
  color: #ff9800;
  font-size: 2em;
  margin: 0;
`;

export const NavLinks = styled.div`
  display: flex;
  gap: 20px;
`;

export const NavLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.1em;
  transition: color 0.3s ease;

  &:hover {
    color: #ff9800;
  }
`;

export const SearchBar = styled.div`
  display: flex;
  gap: 10px;
`;

export const Input = styled.input`
  padding: 10px;
  width: 250px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
`;

export const SearchButton = styled.button`
  background: #ff9800;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 16px;
  border-radius: 5px;
  transition: 0.3s ease;

  &:hover {
    background: #e68900;
  }
`;
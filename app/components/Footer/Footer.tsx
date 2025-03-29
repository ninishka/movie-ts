import React from "react";
import { FooterContainer } from "./styled";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <p>Powered by <a href="https://www.themoviedb.org/" target="_blank" rel="noopener noreferrer">TMDb</a></p>
      <p>&copy; {new Date().getFullYear()} MovieDB</p>
    </FooterContainer>
  );
};

export default Footer;
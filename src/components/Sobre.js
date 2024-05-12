import React from 'react';
import styled from 'styled-components';

// Estilize o componente Sobre
const AboutContainer = styled.div`
  text-align: center;
  margin: 20px auto;
  width: 80%;
  max-width: 600px;
`;

const AboutTitle = styled.h2`
  color: #333;
`;

const AboutContent = styled.p`
  color: #666;
  line-height: 1.6;
`;

const Sobre = () => {
  return (
    <AboutContainer>
      <AboutTitle>Sobre o Projeto</AboutTitle>
      <AboutContent>
      O projeto se trata de um bloco de notas onde, o usuario pode colocar notas e retirar quando quiser 
      </AboutContent>
    </AboutContainer>
  );
}

export default Sobre;

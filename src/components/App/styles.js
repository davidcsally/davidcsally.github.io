import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: url('${({backgroundImage}) => backgroundImage}') no-repeat center center fixed;
`;

export const H1Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #D02120;
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
`;

export const H1 = styled.h1`
  color: white;
  font-weight: normal;
  margin: 0;
  font-size: 2rem;
  font-family: 'Futura-Medium';
  font-style: italic;
`;

export const TextContainer = styled.div`
  padding-top: ${({ paddingTop }) => paddingTop };
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const P = styled.p`
  font-family: 'Courier New', Courier, monospace;
  font-weight: bold;
  font-size: 1rem;
  margin: 0;
  color: white;
`;

export const Description = styled.p`
  color: white;
  margin-top: 10px;
  font-weight: 400;
  line-height: 1.8;
  font-family: 'Open Sans', "Helvetica Neue", Helvetica, Arial, sans-serif;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 200px;
  width: 100%;
  font-size: 1.5em;
`;

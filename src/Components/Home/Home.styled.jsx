import styled from 'styled-components'

export const Container = styled.div`
max-width: 480px;
padding: 20px 15px;
margin: 0 auto;

@media screen and (min-width: 768px){
  max-width: 100%;
width: 738px;

  };

  @media screen and (min-width: 1280px){
    width: 1250px;

  };
`;

export const ContainerSearch = styled.div`
width: 100%;
margin: 0 auto 20px;

`;



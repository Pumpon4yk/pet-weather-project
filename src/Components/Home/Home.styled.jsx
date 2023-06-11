import styled from 'styled-components'


export const Container = styled.div`
max-width: 480px;
padding: 15px;
margin: 0 auto;

@media screen and (min-width: 787px){

max-width: 787px;

  };

  @media screen and (min-width: 1200px){
    max-width: 1200px;

  };
`;

export const ContainerSearch = styled.div`
display: flex;
flex-direction: column;
gap: 20px;

width: 100%;
margin: 0 auto 20px;

@media screen and (min-width: 787px){
  flex-direction: row;
  gap: 40px;

  align-items: center;
  justify-content: center;
}


`;

export const ContainerBtn = styled.div`
display: flex;
gap: 10px;
`;



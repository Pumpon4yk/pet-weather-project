import styled from 'styled-components';

export const ContainerCard = styled.div`
max-width: 450px;
background-color: #fff6;
padding: 32px;
/* border: 1px solid black; */
margin: 0 auto;
border-radius: 20px;
text-align: center;
`;

export const DayTitle = styled.h3`
font-size: 24px;
padding: 0;
margin: 0;
margin-bottom: 20px;

@media screen and (min-width: 787px){
  font-size: 28px;

  };

  @media screen and (min-width: 1200px){
    font-size: 34px;
  };
`;


export const ContainerTemp = styled.div`
display: flex;
justify-content: center;
margin-bottom: 30px;

`;


export const Icon = styled.img`
width: 70px;
height: 80px;

@media screen and (min-width: 787px){
  width: 100px;
height: 100px;

  };

  @media screen and (min-width: 1200px){
    width: 120px;
height: 120px;
  };
`;

export const Temperature = styled.p`
display: flex;
align-items: center;
gap: 20px;
margin-left: 20px;
`;

export const DetailTempMax = styled.p`
font-size: 24px;

@media screen and (min-width: 787px){
  font-size: 38px;

  };

`;

export const DetailTempMin = styled.p`
font-size: 18px;

@media screen and (min-width: 787px){
  font-size: 24px;

  };

`;

export const DayTime = styled.p`
display: flex;
justify-content: left;
align-items: center;
gap: 20px;
padding: 10px;
font-size: 18px;
@media screen and (min-width: 787px){
  font-size: 26px;

  };

  @media screen and (min-width: 1200px){
    font-size: 30px;

  };
`;


export const PrecipitationType = styled.p`
font-size: 18px;

@media screen and (min-width: 787px){
  font-size: 24px;

  };

  @media screen and (min-width: 1200px){
    font-size: 28px;
  };
`



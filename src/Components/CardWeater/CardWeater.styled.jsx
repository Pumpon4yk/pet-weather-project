import styled from 'styled-components';

export const ContainerCard = styled.div`
max-width: 450px;
background-color: #fff8;
padding: 32px;

box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
margin: 0 auto;
border-radius: 20px;
text-align: center;
`;

export const DayTitle = styled.h3`
font-size: 24px;
padding: 0;
margin: 0;
margin-bottom: 20px;
color: #fff;
text-shadow: 3px 4px 6px rgba(66, 68, 90, 1);

@media screen and (min-width: 787px){
  font-size: 28px;

  };

  @media screen and (min-width: 1200px){
    font-size: 34px;
  };
`;

export const CurrentDate = styled.h3`
font-size: 18px;
padding: 0;
margin: 0;
margin-bottom: 20px;
color: #fff;
text-shadow: 2px 2px 6px rgba(66, 68, 90, 1);

@media screen and (min-width: 787px){
  font-size: 22px;

  };

  @media screen and (min-width: 1200px){
    font-size: 28px;
  };
`;


export const Icon = styled.img`
width: 120px;
height: 120px;
margin-bottom: 20px;

@media screen and (min-width: 787px){
  width: 180px;
height: 180px;

  };

  @media screen and (min-width: 1200px){
    width: 240px;
height: 240px;
  };
`;


export const CurrentTemp = styled.p`
font-size: 32px;
text-shadow: 1px 1px 4px rgba(66, 68, 90, 1);

margin-bottom: 20px;

@media screen and (min-width: 787px){
  font-size: 48px;
  };

`;


export const PrecipitationType = styled.p`
font-size: 18px;
/* text-shadow: 2px 2px 6px rgba(255, 255, 255, 1); */
text-shadow: 1px 1px 4px rgba(66, 68, 90, 1);

@media screen and (min-width: 787px){
  font-size: 24px;

  };

  @media screen and (min-width: 1200px){
    font-size: 28px;
  };
`



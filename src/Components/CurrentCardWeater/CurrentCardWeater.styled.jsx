import styled from 'styled-components';

export const ContainerCard = styled.div`
position: relative;
max-width: 450px;
background-color: #fff8;
padding: 46px 28px;

box-shadow: rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset;
margin: 0 auto;
border-radius: 20px;
text-align: center;
`;

export const Country = styled.p`
position: absolute;
right: 15px;
top: 15px;
color: #21212145;
`;

export const CurrentDateDay = styled.p`
position: absolute;
top: 15px;
left: 15px;
font-size: 18px;
color: #fff;
text-shadow: 2px 2px 6px rgba(66, 68, 90, 1);
`;

export const CurrentDatetime = styled(CurrentDateDay)`
font-size: 24px;
left: 50%;
transform: translateX(-50%)
`;

export const City = styled.h3`
  font-size: 28px;
text-shadow: 1px 1px 4px #414141;


@media screen and (min-width: 787px){
  font-size: 30px;

  };

  @media screen and (min-width: 1200px){
    font-size: 36px;
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
font-size: 48px;
text-shadow: 1px 1px 4px #414141;


margin-bottom: 20px;

@media screen and (min-width: 787px){
  font-size: 56px;
  };

`;

export const FeelsText = styled.span`
font-size: 14px;
color: #fff;
margin-bottom: 20px;
text-shadow: 1px 1px 4px #414141;

@media screen and (min-width: 787px){
  font-size: 18px;
  };

`;

export const FeelsTemp = styled.p`
font-size: 28px;
text-shadow: 1px 1px 4px #414141;


margin-bottom: 20px;

@media screen and (min-width: 787px){
  font-size: 34px;
  };

`;

export const Line = styled.span`
display: block;
width: 100%;
height: 1px;
background-color: #212121;
margin-bottom: 20px;
`;

export const DataList = styled.ul`
display: flex;
flex-direction: column;
align-items: center;
gap: 15px;
padding: 0;
margin: 0 auto;
list-style: none;
`;

export const DataListItem = styled.li`
display: flex;
align-items: center;
gap: 15px;

:nth-child(1){
  @media screen and (max-width: 768px){
    flex-direction:column;
  }
}

`;
export const DataItem = styled.p`
font-size: 18px;
`


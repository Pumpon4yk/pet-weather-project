import styled from "styled-components";

export const Card = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
background-color: #fff8;
border-radius: 10px;
`;

export const Wrapper = styled.div`
width: 100%;
display: grid;
grid-template: 
"title" auto
"weather" 1fr
"details" auto;
gap: 20px;


  @media screen and (min-width: 1280px) {
    grid-template: 
"title title" 1fr
"weather details" auto;
  }
`;

export const DateWrapper = styled.div`
width: max-content;
padding: 4px 8px;
position: relative;
font-size: 14px;
color: #934ed1;
text-shadow: 2px 2px 6px rgba(66, 68, 90, 0.3);

grid-area: title;
@media screen and (min-width: 768px) {
  font-size: 18px;

  }

  @media screen and (min-width: 1280px) {
    font-size: 22px;

  }
`


export const CurrentDay = styled.p`
display: inline-block;
margin-right: 30px;

`;

export const CurrentDate = styled.p`
display: inline-block;

`;



export const List = styled.ul`
grid-area: weather;

max-width: 450px;
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
flex-wrap: wrap;
margin: 0;
padding: 4px;
list-style: none;

    padding-bottom: 12px;
    overflow: auto hidden;
    scroll-snap-type: x mandatory;


  /* width */
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 30px #934ed155;
    border-radius: 12px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #934ed1;
    border-radius: 12px;
  }

  @media screen and (min-width: 768px) {
max-width: 100%;

  width: 698px;

  }

  @media screen and (min-width: 1280px) {
  width: 770px;
  }
`;

export const Item = styled.li`
width: 432px;

border-bottom: 1.2px solid #934ed1;
padding-bottom: 8px;

@media screen and (min-width: 768px) {
  width: 690px;
  }

  @media screen and (min-width: 1280px) {
  width: 762px;
  }
`
export const ListData = styled.ul`
display: grid;
grid-template-columns: 50px repeat(8, 1fr);
align-items: center;
justify-items: center;
list-style: none;
margin: 0;
padding: 0;
@media screen and (min-width: 768px) {
  grid-template-columns: 70px repeat(8, 1fr);

  }

  @media screen and (min-width: 1280px) {
  grid-template-columns: 100px repeat(8, 1fr);

  }
`;

export const ItemData = styled.li`
font-size: 9px;

@media screen and (min-width: 768px) {
  font-size: 12px;

  }

@media screen and (min-width:1280px) {
  font-size: 16px;

  }

`;

export const Icon = styled.img`
  width: 26px;

@media screen and (min-width:768px) {
  width: 38px;

  }

@media screen and (min-width:1280px) {
  width: 46px;

  }

`
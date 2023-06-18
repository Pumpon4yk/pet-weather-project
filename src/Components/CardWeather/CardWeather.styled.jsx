import styled from "styled-components";

export const Card = styled.div`
display: flex;
justify-content: space-between;
padding: 20px;
background-color: #fff8;
border-radius: 10px;
`;

export const Wrapper = styled.div`

`;

export const CurrentDay = styled.p`
display: inline-block;
margin-right: 30px;
`;

export const CurrentDate = styled.p`
display: inline-block;

`;



export const List = styled.ul`
display: flex;
flex-direction: column;
justify-content: center;
gap: 20px;
flex-wrap: wrap;

list-style: none;
`;

export const Item = styled.li`
`

export const ListData = styled.ul`
display: flex;
align-items: center;
justify-content: center;
gap: 40px;
flex-wrap: wrap;
list-style: none;
`;

export const ItemData = styled.li`
text-align: center;
width: 50px;

`;

export const Icon = styled.img`
width: 50px;
`
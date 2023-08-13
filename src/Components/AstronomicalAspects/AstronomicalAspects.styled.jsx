import styled from 'styled-components';


export const Container = styled.div`
max-width: 400px;
grid-area: details;
@media screen and (min-width: 768px) {
max-width: 700px;
  }

  @media screen and (min-width: 1280px) {
    max-width: 400px;
    height: 360px;
  }
`

export const Title = styled.h5`
margin: 0;
margin-bottom: 20px;
color: #934ed1;
`

export const List = styled.ul`
list-style: none;
padding: 0;
margin: 0;

display: grid;
grid-template-columns: repeat(2, 1fr);
row-gap: 20px;
column-gap: 20px;

@media screen and (min-width: 768px) {
  grid-template-columns: repeat(5, 1fr);
  }


  @media screen and (min-width: 1280px) {
    grid-template-columns: repeat(2, 1fr);

  }
`

export const ListItem = styled.li`
display: flex;
flex-direction: column;
gap: 10px;
justify-content: space-between;
border-bottom: 1.2px solid #934ed1;
padding-bottom: 6px;
`

export const TitleData = styled.p`
font-size: 10px;

@media screen and (min-width:1280px) {
  font-size: 12px;
  }
`


export const TimeData = styled.p`
  font-size: 12px;


@media screen and (min-width:1280px) {
  font-size: 14px;
  }
`


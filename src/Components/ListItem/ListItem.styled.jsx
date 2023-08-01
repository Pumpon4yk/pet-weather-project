import styled from "styled-components";

export const ContainerDate = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 10px;
margin-bottom: 10px;
@media screen and (min-width: 768px) {

  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;

  }
`
export const Day = styled.p`
font-size: 8px;
@media screen and (min-width: 768px) {
  font-size: 12px;

}

@media screen and (min-width: 1280px) {
  font-size: 18px;

}
`

export const DateDay = styled.p`
font-size: 10px;
@media screen and (min-width: 768px) {
  font-size: 12px;

}

@media screen and (min-width: 1280px) {
  font-size: 18px;

}
`

export const Icon = styled.img`
width: 20px;
margin-bottom: 8px;

@media screen and (min-width: 768px) {
  width: 60px;

}

@media screen and (min-width: 1280px) {
  width: 100px;
  margin-bottom: 20px;

}
`

export const Temp =styled.p`
font-size: 12px;

@media screen and (min-width: 768px) {
  font-size: 16px;

}

@media screen and (min-width: 1280px) {
  font-size: 24px;

}
`
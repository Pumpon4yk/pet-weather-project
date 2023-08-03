import styled from "styled-components";

export const Container = styled.div`
width: 140px;
display: flex;
align-items: center;
justify-content: space-between;
`

export const Wrapper = styled.div`
display: flex;
flex-direction: column;
align-items: start;
justify-content: center;
gap: 10px;
margin-bottom: 20px;
padding: 0 12px;

@media screen and (min-width: 768px) {
  justify-content: space-between;
  flex-direction: row;
  align-items: center;

  }
`

export const City = styled.h4`
display: inline;
padding: 8px, 0;
margin: 0;
font-size: 16px;
color: #934ed1;

text-shadow: 2px 2px 6px rgba(66, 68, 90, 0.5);

@media screen and (min-width: 768px) {
  font-size: 20px;
  }

  @media screen and (min-width: 1280px) {
    font-size: 24px;
  }
`


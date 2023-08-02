import styled from "styled-components";

export const ContainerDate = styled.div`
display: flex;
width: 100%;
flex-direction: column;
justify-content: space-between;
gap: 4px;
margin-bottom: 4px;



@media screen and (min-width: 768px) {
  gap: 10px;
  margin-bottom: 10px;

  }

  @media screen and (min-width: 1280px) {
    flex-direction: row;
  }
`
export const Day = styled.p`
display: none;
font-size: 8px;
@media screen and (min-width: 768px) {
display: block;

  font-size: 12px;
}

@media screen and (min-width: 1280px) {
  font-size: 18px;
}
`

export const DateDay = styled.p`
font-size: 8px;

@media screen and (min-width: 340px) {
  font-size: 10px;
  }

  @media screen and (min-width: 400px) {
  font-size: 12px;
  }


@media screen and (min-width: 768px) {
  font-size: 14px;

}

@media screen and (min-width: 1280px) {
  font-size: 18px;

}
`

export const Icon = styled.img`
width: 16px;
margin-bottom: 6px;


@media screen and (min-width: 340px) {
  width: 18px;

  }

  @media screen and (min-width: 400px) {
    width: 22px;

  }
@media screen and (min-width: 768px) {
  width: 60px;

}

@media screen and (min-width: 1280px) {
  width: 100px;
  margin-bottom: 20px;

}
`

export const Temp =styled.p`
font-size: 8px;

@media screen and (min-width: 340px) {
  font-size: 10px;
  }

  @media screen and (min-width: 400px) {
  font-size: 12px;
  }

@media screen and (min-width: 768px) {
  font-size: 16px;

}

@media screen and (min-width: 1280px) {
  font-size: 24px;

}
`
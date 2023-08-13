import { Container, List, ListItem, TimeData, Title, TitleData } from "./AstronomicalAspects.styled"

import { createAstronomicDataArray } from "../../utils/createAstronomicDataArray";

const astronomicalDataTitle = {
  sunrise: "Sunrise",
  sunset: "Sunset",
  solar_noon: "Solar noon",
  day_length: "Day length",
  civil_twilight_begin: "Civil twilight begin",
  civil_twilight_end: "Civil twilight end",
  nautical_twilight_begin: "Nautical twilight begin",
  nautical_twilight_end: "Nautical twilight end",
  astronomical_twilight_begin: "Astronomical twilight begin",
  astronomical_twilight_end: "Astronomical twilight end"
};

const AstronomicalAspects = ({ astronomicData, timezone }) => {
  const { astronomicNewObj, keys } = createAstronomicDataArray(astronomicData, timezone)

  return (
    <Container>
      <Title>Astronomical Aspects of Sunrise, Sunset, and Twilights</Title>
      <List>
        {keys.map(e => (
          <ListItem key={e}>
            <TitleData>{astronomicalDataTitle[e]}:</TitleData>
            <TimeData>{astronomicNewObj[e]}</TimeData>
          </ListItem>
        ))}
      </List>
    </Container>
  )
}

export default AstronomicalAspects
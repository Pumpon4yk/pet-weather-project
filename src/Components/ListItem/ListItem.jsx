import {ContainerDate, Day, DateDay, Icon, Temp} from './ListItem.styled'

const ListItem = ({day}) => {

  return(
    <>
    <ContainerDate>
    <Day>{day.day}</Day>
    <DateDay>{day.date}</DateDay>
    </ContainerDate>
    <Icon src={day.icon} alt="icon weather"/>
    <Temp>{`${day.min}/${day.max}`}</Temp>
    </>
  )

}

export default ListItem
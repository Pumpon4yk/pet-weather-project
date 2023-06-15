import { List, Item } from "./ForecastList.styled"
import ListItem from "../ListItem/ListItem"


const ForecastList = ({arrayMinData,  setIdDay}) => {


  return(
<List>
{arrayMinData.map(e => (<Item key={e.id} onClick={() => setIdDay(e.id) }><ListItem day={e}/></Item>))}
</List>
  )
}

export default ForecastList
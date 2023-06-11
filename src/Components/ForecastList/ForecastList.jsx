import { List, Item } from "./ForecastList.styled"
import ListItem from "../ListItem/ListItem"


const ForecastList = ({arrayMinData}) => {


  return(
<List>
{arrayMinData.map(e => (<Item key={e.id}><ListItem day={e}/></Item>))}
</List>
  )
}

export default ForecastList
import { List, Item } from './ForecastList.styled';
import ListItem from '../ListItem/ListItem';

const ForecastList = ({ arrayMinData, setIdDay, idDay }) => {

  return (
    <List>
      {arrayMinData.map(e => (
        <Item
          key={e.id}
          onClick={() => setIdDay(e.id)}
          active={e.id === idDay}
        >
          <ListItem day={e} />
        </Item>
      ))}
    </List>
  );
};

export default ForecastList;

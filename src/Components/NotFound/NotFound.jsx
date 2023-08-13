
import { TbError404, TbMoodSadDizzy } from 'react-icons/tb';
import { Container, Line, Title } from './NotFound.styled';
import { Link } from '../Navigation/Navigation.styled';

const NotFound = () => {

  return(
    <Container>
    <Title>Page not found</Title>
      <TbMoodSadDizzy size={100} color='#934ed1'/>
      <TbError404 size={200} color='#934ed1'/>
      <Link to="/">go to home page</Link>
      <Line/>
    </Container>
  )
}

export default NotFound
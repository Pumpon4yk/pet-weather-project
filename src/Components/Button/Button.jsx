import { Btn, Text } from './Button.styled';

const Button = ({path, children}) => {
  return (
    <Btn to={path} >
    <Text>{children}</Text>
    </Btn>
  );
};

export default Button;

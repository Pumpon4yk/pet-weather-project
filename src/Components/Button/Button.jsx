import { Btn, Text } from './Button.styled';

const Button = ({current, onClick, children}) => {
  return (
    <Btn current={current} onClick={onClick}>
    <Text>{children}</Text>
    </Btn>
  );
};

export default Button;

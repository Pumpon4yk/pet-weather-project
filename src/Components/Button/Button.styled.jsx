import styled from 'styled-components';

export const Btn =styled.button`
width: 196px;
height: 50px;
margin: 0 auto;
background-color:${props => (props.followToggle && !props.isLoading ? '#5CD3A8' : '#EBD8FF')};
box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.25);
border-radius: 10.3108px;
`

export const Text = styled.p`
font-weight: 600;
font-size: 18px;
line-height: 22px;

text-transform: uppercase;
color: #373737;
`
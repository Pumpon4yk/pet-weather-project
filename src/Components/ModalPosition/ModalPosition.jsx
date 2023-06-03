// import { useState } from 'react';
// import Modal from 'react-modal';
// import {Text,  WrapperButton, ButtonModal} from './ModalPosition.styled'
// Modal.setAppElement('#modal-root');

// const customStyles = {
//   overlay:{
//     backgroundColor: 'transparent',
//   },
//   content: {
//     top: '20px',
//     left: '20px',
//     right: 'auto',
//     bottom: 'auto',
//     backgroundColor: '#fff',
//     color: '212121',
//     borderRadius: '10px',
//     boxShadow: "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
//   },
// };

// const ModalPosition = ({isOpen, setISOpen}) =>{

//  const falseGeoposition = () => {
//   setISOpen(false)
//  }

//  const trueGeoposition = () => {
//     navigator.geolocation.getCurrentPosition(
//       (position) => {
//         // Отримано геодані
//         const { latitude: lat, longitude: lon } = position.coords;
//         console.log(lat);
//         console.log(lon);
//       },
//       (error) => {
//         // Обробка помилки
//         setError(error.message);
//       }
//     );
//   setISOpen(false)

//   }


//   return (
//     <Modal
//     isOpen={isOpen}
//     style={customStyles}
//     contenrLabel="Location"
//     shouldCloseOnOverlayClick={false}
//     >
//     <Text>Allow access to geolocation</Text>
//     <WrapperButton>
//     <ButtonModal onClick={trueGeoposition}>yes</ButtonModal>
//     <ButtonModal onClick={falseGeoposition}>no</ButtonModal>
//     </WrapperButton>
//     </Modal>
//   )
// }

// export default ModalPosition
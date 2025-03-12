import React from 'react';
import { 
Overlay,
ModalContainer,
ModalHeader,
CloseButton,
TwoButtons,
Watch
} from './styled'

interface ModalProps {
  movie: {
    title: string;
    overview: string;
  };
  closeModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ movie, closeModal }) => {
  return (
    <Overlay>
      <ModalContainer>
        <ModalHeader>
          <h2>{movie.title}</h2>
        </ModalHeader>
        <p>{movie.overview}</p>
        <TwoButtons>
          <CloseButton onClick={closeModal}>Close</CloseButton>
          <Watch>Watch</Watch>
        </TwoButtons>
      </ModalContainer>
    </Overlay>
  );
};

export default Modal;
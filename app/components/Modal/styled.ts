import styled from "styled-components";

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999;
`;

export const ModalContainer = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  max-width: 600px;
  width: 100%;
  position: relative;
`;

export const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 10px;
`;
export const CloseButton = styled.button`
  background: #ff4c4c;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #ff3333;
  }
`;

export const Watch = styled.button`
  background:green;
  color: white;
  border: none;
  padding: 5px 10px;
  border-radius: 4px;
  cursor: pointer;
  &:hover {
    background: #ff3333;
  }
`

export const TwoButtons = styled.div`
display: flex;
justify-content: space-between;
`
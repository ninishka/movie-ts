import styled from 'styled-components'

export const MovieImage = styled.img`
  border-radius: 5px;
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

export const CardWrap = styled.div`
  background: #222;
  color: white;
  padding: 10px;
  border-radius: 8px;
  width: 200px; /* Fixed width */
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  
`;
export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin: 10px 0;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
  max-width: 180px; // Limit width to ensure consistency
`;

export const OverviewButton = styled.button`
  margin-top: 15px;
  padding: 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;
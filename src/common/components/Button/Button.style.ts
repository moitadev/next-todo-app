import styled from 'styled-components';

const ButtonStyle = styled.button<{ $bgColor?: string; }>`
  background-color: ${props => props.$bgColor || '#00cc73'};
  padding: 12px 18px;
  width: 46px;
  height: 46px;
  border: 0;
  border-radius: 2px;
  color: #fff;
  font-size: 18px;
  transition: all 0.7s;
  cursor: pointer;

  &:hover {
    opacity: 0.8;
    transition: all 0.6s;
  }
`;

export { ButtonStyle };

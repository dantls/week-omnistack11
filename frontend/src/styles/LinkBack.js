import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkBack = styled(Link)`
  display: flex;
  align-items: center;
  margin-top: 40px;
  color: #41414d;
  font-size: 18px;
  text-decoration: none;
  font-weight: 500;
  transition: opacity 0.2s;
  cursor: pointer;
  
  &:hover{
    opacity: 0.8;
  }
  svg{
    margin-right: 10px;
  }
  `;

  export default LinkBack;
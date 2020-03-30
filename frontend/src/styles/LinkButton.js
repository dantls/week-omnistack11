import { Link } from 'react-router-dom';
import styled from 'styled-components';

const LinkButton = styled(Link)`  
  width: 260px;
  height: 60px;
  background: #e02041;
  border: 0;
  color: #FFF;
  border-radius: 8px;
  font-weight: bold;
  margin-top: 0px;
  display: inline-block;
  text-align: center;
  text-decoration: none;
  font-size: 18px;
  line-height: 60px;
  margin-left: auto;
  transition: filter 0.2s;

  &:hover{
      filter: brightness(90%);
  }

  `;

  export default LinkButton;
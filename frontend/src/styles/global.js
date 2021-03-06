import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`

  *{
   
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body{
    background: #f0f0f5;
    -webkit-font-smoothing: antialiased !important;
    font: 400 14px Roboto, sans-serif;
  }


  input, button, textarea{
    font: 400 18px Roboto, sans-serif;

  }
  button{
    cursor: pointer;
  }

  form input{
    width: 100%;
    height: 60px;
    color: #333;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 0 24px;

  }
  form textarea{
    width: 100%;
    min-height: 160px;
    color: #333;
    resize: vertical;
    border: 1px solid #dcdce6;
    border-radius: 8px;
    padding: 16px 24px;
    line-height: 24px;
  }
    

  html,body, #root{
    min-height: 100%;
  }
`;

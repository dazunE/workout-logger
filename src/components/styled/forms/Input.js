import styled from 'styled-components';
import is, { isNot } from 'styled-is';

const Input = styled.input`
    ${
      is('grouped')`
        position: relative;
        -webkit-box-flex: 1;
        -ms-flex: 1 1 auto;
        flex: 1 1 auto;
        width: 1%;
        margin-bottom: 0;
      `
    };
    display: block;
    width: 100%;
    padding: .75rem 0.75rem 0.75rem 3rem;
    font-size: 1rem;
    line-height: 1.5;
    color: #495057;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #ced4da;
    border-radius: .25rem;
    box-sizing: border-box;
    transition: border-color .15s ease-in-out,box-shadow .15s ease-in-out;
    
    &:focus{
      color: #495057;
      background-color: #fff;
      border-color: #80bdff;
      outline: 0;
      box-shadow: 0 0 0 0.2rem rgba(0,123,255,.25);
    }
   
    &::placeholder{
    color: cyan;
    opacity: 0.8;
    }
    
`;

export default Input;

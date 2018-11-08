import styled from 'styled-components';
import is from 'styled-is';


export default styled.button`
  font-size: 1rem;
  ${ is('large')`
    padding: .5rem 1rem;
    font-size: 1.25rem;
    line-height: 1.5;
    border-radius: 2rem;
  `};
  ${ is('block')`
    display:block;
  `};
  ${ is('center')`
    width:80%;
    margin:1rem auto;
  `};
    color: #fff;
    background-color: #007bff;
 
`;

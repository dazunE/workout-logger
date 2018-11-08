import styled from 'styled-components';
import is from 'styled-is';

const InputGroup = styled.div`
   ${ is('prepend')`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    margin-right: -1px;
   `};
   position: absolute;
   z-index: 1;
   padding: 0.75rem;
`;

export default InputGroup;

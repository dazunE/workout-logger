import styled from 'styled-components';
import is from 'styled-is';

const InputWrapper = styled.div`
margin-bottom: ${ props => props.marginBottom ? props.marginBottom : "1rem" };
${is('input-group')`
    position: relative;
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-align: stretch;
    -ms-flex-align: stretch;
    align-items: stretch;
    width: 100%;
 `};
`;

export default InputWrapper;

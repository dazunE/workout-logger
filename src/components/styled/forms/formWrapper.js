import styled from 'styled-components';
import is from 'styled-is'

export default styled.div`
background: #FFF ;
display: ${ props => props.middle ? "table" : "block "};
 ${is('middle')`
    height:100%
  `};
 padding: 1.5rem;
`;


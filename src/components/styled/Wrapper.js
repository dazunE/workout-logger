import styled from 'styled-components';
import is from 'styled-is';

const Wrapper =  styled.div`
  display: grid;
  ${is('columns')`
    grid-template-columns: ${props => props.columns};
  `};
`;

const AbsWrapper = styled(Wrapper)`
  position: absolute;
  top:0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

export {
    Wrapper,
    AbsWrapper,
}




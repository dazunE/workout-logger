import styled from 'styled-components';
import is from 'styled-is';

const GridWrapper =  styled.div`
  display: grid;
  ${is('columns')`
    grid-template-columns: ${props => props.columns};
  `};
`;

const Wrapper = styled.div`
display: block;
max-width:${ props => props.width};
${ is('middle')`
  margin: 0 auto;
`};
`;

const AbsWrapper = styled(GridWrapper)`
  position: absolute;
  top:0;
  bottom: 0;
  height: 100%;
  width: 100%;
`;

export {
    GridWrapper,
    AbsWrapper,
    Wrapper
}




import {  createElement } from 'react';
import PropTypes from 'prop-types';
import styled ,{ css } from 'styled-components';
import _ from 'lodash';


const Element = ( { as ,children , ...props }) => createElement( as , _.omit( props , ['as','size']) , children );

const Typo = styled( Element )`
    ${ props => {
       const size = props.size || props.as;
       
       return css`
       font-size:${ size }`;
    }};
`;

Typo.defaultProps = {
    as :'h1'
};

Typo.proptypes = {
    size: PropTypes.oneOf(['h1','h2','h3','h4','h5','h6'])
};

export default Typo;

import styled from 'styled-components';
import { AbsWrapper } from './Wrappers/Wrapper';

const BackgroundImg =  styled(AbsWrapper)`
  background: ${props => props.url ? `url(${props.url})`: "#6200ea"};
  background-size: cover;
`;

export default BackgroundImg;

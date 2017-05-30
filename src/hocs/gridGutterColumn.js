import styled from 'styled-components';
import { gutterHalfWidth } from '../constants';

export default (component) => {
  const GridGutterColumnHOC = styled(component)`
    box-sizing: border-box;
    padding-left: ${gutterHalfWidth};
    padding-right: ${gutterHalfWidth};
  `;

  return GridGutterColumnHOC;
};

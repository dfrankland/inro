import styled from 'styled-components';
import { gutterHalfWidth } from '../constants';

export default (component) => {
  const GridGutterRowHOC = styled(component)`
    margin-left: -${gutterHalfWidth};
    margin-right: -${gutterHalfWidth};
  `;

  return GridGutterRowHOC;
};

import styled from 'styled-components';
import { gutterHalfWidth as defaultGutterHalfWidth } from '../constants';

export default ({
  gutterHalfWidth = defaultGutterHalfWidth,
} = {}) => (component) => {
  const GridGutterRow = styled(component)`
    margin-left: -${gutterHalfWidth};
    margin-right: -${gutterHalfWidth};
  `;

  return GridGutterRow;
};

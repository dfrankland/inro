import styled from 'styled-components';
import { gutterHalfWidth as defaultGutterHalfWidth } from '../constants';

export default ({
  gutterHalfWidth = defaultGutterHalfWidth,
} = {}) => (component) => {
  const GridGutterColumn = styled(component)`
    box-sizing: border-box;
    padding-left: ${gutterHalfWidth};
    padding-right: ${gutterHalfWidth};
  `;

  return GridGutterColumn;
};

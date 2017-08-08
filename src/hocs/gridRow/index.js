import styled from 'styled-components';
import { clearFix } from 'polished';

export default () => (component) => {
  const GridRow = styled(component)`
    ${clearFix()}
  `;

  return GridRow;
};

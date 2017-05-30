import styled from 'styled-components';
import display from '../hocs/display';
import gridContainer from '../hocs/gridContainer';

export default (
  display(
    gridContainer(
      styled.div``,
    ),
  )
);

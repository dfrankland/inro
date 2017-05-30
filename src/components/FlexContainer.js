import styled from 'styled-components';
import display from '../hocs/display';
import gridGutterRow from '../hocs/gridGutterRow';
import flexContainer from '../hocs/flexContainer';

export default (
  display(
    gridGutterRow(
      flexContainer(
        styled.div``,
      ),
    ),
  )
);

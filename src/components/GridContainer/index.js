import styled from 'styled-components';
import styledBreakpoint from '../../hocs/styledBreakpoint';
import gridContainer from '../../hocs/gridContainer';

export default (
  styledBreakpoint()(
    gridContainer()(
      styled.div``,
    ),
  ).component
);

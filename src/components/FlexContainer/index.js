import styled from 'styled-components';
import styledBreakpoint from '../../hocs/styledBreakpoint';
import gridGutterRow from '../../hocs/gridGutterRow';
import gridRow from '../../hocs/gridRow';
import flexContainer from '../../hocs/flexContainer';

export default (
  styledBreakpoint()(
    gridGutterRow()(
      gridRow()(
        flexContainer()(
          styled.div``,
        ),
      ),
    ),
  ).component
);

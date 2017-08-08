import styled from 'styled-components';
import styledBreakpoint from '../../hocs/styledBreakpoint';
import gridGutterRow from '../../hocs/gridGutterRow';
import flexContainer from '../../hocs/flexContainer';

export default (
  styledBreakpoint()(
    gridGutterRow()(
      flexContainer()(
        styled.div``,
      ),
    ),
  ).component
);

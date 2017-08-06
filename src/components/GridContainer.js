import React from 'react';
import styledBreakpoint from '../hocs/styledBreakpoint';
import gridContainer from '../hocs/gridContainer';

export default (
  styledBreakpoint(
    gridContainer(
      props => <div {...props} />,
    ),
  )
);

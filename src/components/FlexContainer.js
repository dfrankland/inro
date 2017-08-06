import React from 'react';
import styledBreakpoint from '../hocs/styledBreakpoint';
import gridGutterRow from '../hocs/gridGutterRow';
import flexContainer from '../hocs/flexContainer';

export default (
  styledBreakpoint(
    gridGutterRow(
      flexContainer(
        props => <div {...props} />,
      ),
    ),
  )
);

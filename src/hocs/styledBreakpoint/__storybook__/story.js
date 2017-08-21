import React from 'react';
import { injectGlobal } from 'styled-components';
import { storiesOf } from '@storybook/react';
import styledBreakpoint from '../index';

storiesOf('styledBreakpoint', module)
  .add('it styles based on breakpoint', () => {
    /* eslint-disable no-unused-expressions */
    injectGlobal`
      body {
        margin: 0;
      }
    `;
    /* eslint-enable */
    const { component: StyledBreakpointComponent } = styledBreakpoint()(
      ({ style, className, children }) => (
        <div style={style} className={className}>{children}</div>
      ),
    );
    return (
      <StyledBreakpointComponent
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        xs-style="background-color: red;"
        sm-style="background-color: orange;"
        md-style="background-color: yellow;"
        lg-style="background-color: green;"
        xl-style="background-color: blue;"
      >
        <h1>Resize the window to change the background color!</h1>
      </StyledBreakpointComponent>
    );
  });

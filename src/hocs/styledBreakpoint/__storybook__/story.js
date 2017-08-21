import React from 'react';
import { injectGlobal } from 'styled-components';
import { readableColor } from 'polished';
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
          transitionProperty: 'background-color, color',
          transitionDuration: '0.5s',
          transitionTimingFunction: 'ease-in-out',
          position: 'absolute',
          width: '100%',
          height: '100%',
        }}
        xs-style={`background-color: red; color: ${readableColor('red')}`}
        sm-style={`background-color: orange; color: ${readableColor('orange')}`}
        md-style={`background-color: yellow; color: ${readableColor('yellow')}`}
        lg-style={`background-color: green; color: ${readableColor('green')}`}
        xl-style={`background-color: blue; color: ${readableColor('blue')}`}
      >
        <h1>Resize the window to change the background color!</h1>
      </StyledBreakpointComponent>
    );
  });

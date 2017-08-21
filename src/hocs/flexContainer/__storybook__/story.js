import React from 'react';
import { storiesOf } from '@storybook/react';
import flexContainer from '../index';
import { gutterHalfWidth } from '../../../constants';

storiesOf('flexContainer', module)
  .add('it creates a flex container', () => {
    const FlexContainer = flexContainer()(
      ({ style = {}, className, children }) => (
        <div
          style={{
            ...style,
            marginLeft: `-${gutterHalfWidth}`,
            marginRight: `-${gutterHalfWidth}`,
          }}
          className={className}
        >
          {children}
        </div>
      ),
    );

    const column = (
      <div
        style={{
          display: 'flex',
          flex: '0 0 50%',
          paddingLeft: gutterHalfWidth,
          paddingRight: gutterHalfWidth,
          boxSizing: 'border-box',
        }}
      >
        <div style={{ background: 'rgba(255, 255, 255, 0.75)', width: '100%' }}>
          <h1 style={{ margin: 0 }}>Column</h1>
        </div>
      </div>
    );

    return (
      <div
        style={{
          background: 'blue',
          margin: '0 auto',
          width: '500px',
          paddingLeft: gutterHalfWidth,
          paddingRight: gutterHalfWidth,
        }}
      >
        <h1 style={{ margin: 0 }}>Container</h1>
        <FlexContainer
          style={{
            background: 'rgba(255, 0, 0, 0.5)',
            marginLeft: `-${gutterHalfWidth}`,
            marginRight: `-${gutterHalfWidth}`,
          }}
        >
          <div style={{ width: '100%' }}>
            <h1 style={{ margin: 0 }}>Flex Container</h1>
          </div>
          {column}
          {column}
        </FlexContainer>
      </div>
    );
  });

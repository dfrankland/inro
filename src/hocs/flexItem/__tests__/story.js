import React from 'react';
import { storiesOf } from '@storybook/react';
import flexItem from '../index';
import { gutterHalfWidth } from '../../../constants';

storiesOf('flexItem', module)
  .add('it creates flex items', () => {
    const FlexItem = flexItem()(
      ({ style = {}, className, children }) => (
        <div
          style={{
            ...style,
            paddingLeft: gutterHalfWidth,
            paddingRight: gutterHalfWidth,
            boxSizing: 'border-box',
          }}
          className={className}
        >
          {children}
        </div>
      ),
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
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            background: 'rgba(255, 0, 0, 0.5)',
            marginLeft: `-${gutterHalfWidth}`,
            marginRight: `-${gutterHalfWidth}`,
          }}
        >
          <div style={{ width: '100%' }}>
            <h1 style={{ margin: 0 }}>Row</h1>
          </div>
          <FlexItem>
            <div style={{ background: 'rgba(255, 255, 255, 0.75)' }}>
              <h1 style={{ margin: 0 }}>Flex Item</h1>
            </div>
          </FlexItem>
          <FlexItem>
            <div style={{ background: 'rgba(255, 255, 255, 0.75)' }}>
              <h1 style={{ margin: 0 }}>Flex Item</h1>
            </div>
          </FlexItem>
        </div>
      </div>
    );
  });

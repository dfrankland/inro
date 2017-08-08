import React from 'react';
import { storiesOf } from '@storybook/react';
import gridColumnOffset from '../index';
import { gutterHalfWidth } from '../../../constants';

storiesOf('gridColumnOffset', module)
  .add('it adds offset margin to columns', () => {
    const GridColumnOffset = gridColumnOffset()(
      ({ style = {}, className, children }) => (
        <div
          style={{
            ...style,
            width: '25%',
            paddingLeft: gutterHalfWidth,
            paddingRight: gutterHalfWidth,
            boxSizing: 'border-box',
            float: 'left',
          }}
          className={className}
        >
          <div style={{ background: 'rgba(255, 255, 255, 0.75)' }}>
            <p style={{ margin: 0 }}>Grid Column Offset</p>
            {children}
          </div>
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
            background: 'rgba(255, 0, 0, 0.5)',
            marginLeft: `-${gutterHalfWidth}`,
            marginRight: `-${gutterHalfWidth}`,
          }}
        >
          <h1 style={{ margin: 0 }}>Row</h1>
          <GridColumnOffset xs-column-offset={3} />
          <GridColumnOffset xs-column-offset={3} />
          <div style={{ display: 'table', clear: 'both' }} />
        </div>
      </div>
    );
  });

import React from 'react';
import { storiesOf } from '@storybook/react';
import gridRow from '../index';
import { gutterHalfWidth } from '../../../constants';

storiesOf('gridRow', module)
  .add('it adds a clearfix', () => {
    const GridRow = gridRow()(
      ({ style = {}, className, children }) => (
        <div
          style={{
            ...style,
            background: 'rgba(255, 0, 0, 0.5)',
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
          width: '50%',
          paddingLeft: gutterHalfWidth,
          paddingRight: gutterHalfWidth,
          boxSizing: 'border-box',
          float: 'left',
        }}
      >
        <div style={{ background: 'rgba(255, 255, 255, 0.75)' }}>
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
        <GridRow>
          <h1 style={{ margin: 0 }}>Grid Row</h1>
          {column}
          {column}
        </GridRow>
      </div>
    );
  });

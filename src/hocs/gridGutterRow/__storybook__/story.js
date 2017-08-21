import React from 'react';
import { storiesOf } from '@storybook/react';
import gridGutterRow from '../index';
import { gutterHalfWidth } from '../../../constants';

storiesOf('gridGutterRow', module)
  .add('it adds negative gutter margin to rows', () => {
    const GridGutterRow = gridGutterRow()(
      ({ style, className, children }) => (
        <div style={style} className={className}>{children}</div>
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
        <GridGutterRow style={{ background: 'rgba(255, 0, 0, 0.5)' }}>
          <h1 style={{ margin: 0 }}>Grid Gutter Row</h1>
          {column}
          {column}
          <div style={{ display: 'table', clear: 'both' }} />
        </GridGutterRow>
      </div>
    );
  });

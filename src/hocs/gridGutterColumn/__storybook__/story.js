import React from 'react';
import { storiesOf } from '@storybook/react';
import gridGutterColumn from '../index';
import { gutterHalfWidth } from '../../../constants';

storiesOf('gridGutterColumn', module)
  .add('it adds gutter padding to columns', () => {
    const GridGutterRow = gridGutterColumn()(
      ({ style, className, children }) => (
        <div style={style} className={className}>{children}</div>
      ),
    );

    const column = (
      <GridGutterRow
        style={{
          width: '50%',
          float: 'left',
        }}
      >
        <div style={{ background: 'rgba(255, 255, 255, 0.75)' }}>
          <h1 style={{ margin: 0 }}>Grid Gutter Column</h1>
        </div>
      </GridGutterRow>
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
          {column}
          {column}
          <div style={{ display: 'table', clear: 'both' }} />
        </div>
      </div>
    );
  });

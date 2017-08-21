import React from 'react';
import { storiesOf } from '@storybook/react';
import gridContainer from '../index';
import { gutterHalfWidth } from '../../../constants';

storiesOf('gridContainer', module)
  .add('it adds a container with gutter padding for gutter rows', () => {
    const GridContainer = gridContainer()(
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
      <GridContainer style={{ background: 'blue' }}>
        <h1 style={{ margin: 0 }}>Grid Container</h1>
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
      </GridContainer>
    );
  });

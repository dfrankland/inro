import React from 'react';
import { storiesOf } from '@storybook/react';
import gridColumn from '../index';
import { gutterHalfWidth } from '../../../constants';

storiesOf('gridColumn', module)
  .add('it creates flex columns', () => {
    const GridColumn = gridColumn()(
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
          <GridColumn xs-columns={12} md-columns={6}>
            <div style={{ background: 'rgba(255, 255, 255, 0.75)' }}>
              <h1 style={{ margin: 0 }}>Grid Column (flex)</h1>
            </div>
          </GridColumn>
          <GridColumn xs-columns={12} md-columns={6}>
            <div style={{ background: 'rgba(255, 255, 255, 0.75)' }}>
              <h1 style={{ margin: 0 }}>Grid Column (flex)</h1>
            </div>
          </GridColumn>
        </div>
      </div>
    );
  })
  .add('it creates normal columns', () => {
    const GridColumn = gridColumn({ flex: false })(
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
            background: 'rgba(255, 0, 0, 0.5)',
            marginLeft: `-${gutterHalfWidth}`,
            marginRight: `-${gutterHalfWidth}`,
          }}
        >
          <h1 style={{ margin: 0 }}>Row</h1>
          <GridColumn xs-columns={12} md-columns={6}>
            <div style={{ background: 'rgba(255, 255, 255, 0.75)' }}>
              <h1 style={{ margin: 0 }}>Grid Column (normal)</h1>
            </div>
          </GridColumn>
          <GridColumn xs-columns={12} md-columns={6}>
            <div style={{ background: 'rgba(255, 255, 255, 0.75)' }}>
              <h1 style={{ margin: 0 }}>Grid Column (normal)</h1>
            </div>
          </GridColumn>
          <div style={{ display: 'table', clear: 'both' }} />
        </div>
      </div>
    );
  });

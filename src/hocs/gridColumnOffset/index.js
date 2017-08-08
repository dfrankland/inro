import React from 'react';
import CustomPropTypes from '../../lib/CustomPropTypes';
import { columns as defaultColumns } from '../../constants';
import styledBreakpoint from '../styledBreakpoint';

export default ({
  columns = defaultColumns,
  suffix = '-column-offset',
  defaultProps = {},
} = {}) => (component) => {
  const {
    component: Component,
    propNames,
  } = styledBreakpoint({ suffix })(component);

  const GridColumnOffset = (props) => {
    const newProps = propNames.reduce(
      (allNewProps, propName) => {
        const value = allNewProps[propName];
        if (!value) return allNewProps;

        return {
          ...allNewProps,
          [propName]: `
            margin-left: ${(value / columns) * 100}%;
          `,
        };
      },
      props,
    );

    return <Component {...newProps} />;
  };

  GridColumnOffset.defaultProps = defaultProps;

  GridColumnOffset.propTypes = (
    propNames.reduce(
      (allPropTypes, propName) => ({
        ...allPropTypes,
        [propName]: CustomPropTypes.integerRange(1, columns),
      }),
      {},
    )
  );

  return GridColumnOffset;
};

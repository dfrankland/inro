import React from 'react';
import PropTypes from 'prop-types';
import CustomPropTypes from '../../lib/CustomPropTypes';
import { columns as defaultColumns } from '../../constants';
import styledBreakpoint from '../styledBreakpoint';

export default ({
  columns = defaultColumns,
  suffix = '-columns',
  defaultProps = {},
  flex = true,
} = {}) => (component) => {
  const {
    component: Component,
    propNames,
  } = styledBreakpoint({ suffix })(component);

  const GridColumn = (props) => {
    const newProps = propNames.reduce(
      (allNewProps, propName) => {
        let value = allNewProps[propName];
        if (!value) return allNewProps;

        if (value === 'auto') {
          value = `
            ${flex ? 'flex: 0 0 auto;' : 'float: left;'}
            width: auto;
            max-width: 100%;
          `;
        } else {
          const percentage = (value / columns) * 100;
          value = `
            ${flex ? `flex: 0 0 ${percentage || 'auto'}%;` : 'float: left;'}
            width: ${percentage}%;
            max-width: ${percentage}%;
          `;
        }

        return {
          ...allNewProps,
          [propName]: value,
        };
      },
      props,
    );

    return <Component {...newProps} />;
  };

  GridColumn.defaultProps = defaultProps;

  GridColumn.propTypes = (
    propNames.reduce(
      (allPropTypes, propName) => ({
        ...allPropTypes,
        [propName]: PropTypes.oneOfType([
          PropTypes.oneOf(['auto']),
          CustomPropTypes.integerRange(1, columns),
        ]),
      }),
      {},
    )
  );

  return GridColumn;
};

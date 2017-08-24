import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import CustomPropTypes from '../../lib/CustomPropTypes';
import {
  gridContainerMaxWidths as defaultGridContainerMaxWidths,
  gutterHalfWidth as defaultGutterHalfWidth,
} from '../../constants';
import styledBreakpoint from '../styledBreakpoint';

export default ({
  styledBreakpointOptions = { suffix: '-container' },
  gridContainerMaxWidths = defaultGridContainerMaxWidths,
  gutterHalfWidth = defaultGutterHalfWidth,
  defaultProps,
} = {}) => (component) => {
  const {
    component: newComponent,
    propNameMap,
    propNames,
  } = styledBreakpoint(styledBreakpointOptions)(component);

  const Component = styled(newComponent)`
    box-sizing: border-box;
    margin-right: auto;
    margin-left: auto;
    padding-right: ${gutterHalfWidth};
    padding-left: ${gutterHalfWidth};
    max-width: 100%;
  `;

  const GridContainer = (props) => {
    const newProps = propNames.reduce(
      (allNewProps, propName) => {
        const value = allNewProps[propName];
        if (!value) return allNewProps;

        return {
          ...allNewProps,
          [propName]: `width: ${gridContainerMaxWidths[propNameMap[propName]]};`,
        };
      },
      props,
    );

    return <Component {...newProps} />;
  };

  GridContainer.defaultProps = defaultProps || propNames.reduce(
    (allDefaultProps, propName) => ({
      ...allDefaultProps,
      [propName]: gridContainerMaxWidths[propNameMap[propName]],
    }),
    {},
  );

  GridContainer.propTypes = (
    propNames.reduce(
      (allPropTypes, propName) => ({
        ...allPropTypes,
        [propName]: PropTypes.oneOfType([
          PropTypes.oneOf(['auto']),
          CustomPropTypes.cssWidth,
        ]),
      }),
      {},
    )
  );

  return GridContainer;
};

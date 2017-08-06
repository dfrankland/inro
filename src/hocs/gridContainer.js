import React from 'react';
import styled from 'styled-components';
import CustomPropTypes from '../lib/CustomPropTypes';
import {
  gridContainerMaxWidths,
  gutterHalfWidth as defaultGutterHalfWidth,
} from '../constants';
import styledBreakpoint from './styledBreakpoint';

export default ({
  suffix = '-container',
  breakpointWidths = gridContainerMaxWidths,
  gutterHalfWidth = defaultGutterHalfWidth,
  defaultProps,
}) => (component) => {
  const {
    component: newComponent,
    propNameMap,
    propNames,
  } = styledBreakpoint(component, { suffix, breakpointWidths });

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
          [propName]: width => `
            width: ${width};
          `,
        };
      },
      props,
    );

    return <Component {...newProps} />;
  };

  GridContainer.defaultProps = defaultProps || propNames.map(
    propName => gridContainerMaxWidths[propNameMap[propName]],
  );

  GridContainer.propTypes = (
    propNames.reduce(
      (allPropTypes, propName) => ({
        ...allPropTypes,
        [propName]: CustomPropTypes.cssWidth.isRequired,
      }),
      {},
    )
  );

  return GridContainer;
};

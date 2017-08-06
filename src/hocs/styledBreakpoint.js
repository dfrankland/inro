import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpointMinWidths as defaultBreakpointWidths } from '../constants';

export const getTemplate = config => (props) => {
  const { propNames, propNameMap, breakpointWidths, cssTemplate } = config;

  return propNames.reduce(
    (css, propName) => {
      const breakpoint = propNameMap[propName];
      if (!breakpoint) return css;

      const breakpointWidth = breakpointWidths[breakpoint];

      let value = props[propName];

      if (typeof value === 'function') {
        value = value(props, { css, propName, breakpoint, breakpointWidth }, config);
      }

      if (typeof value !== 'string') return css;

      return `${css} ${cssTemplate({ breakpointWidth, value })}`;
    },
    '',
  );
};

export const getConfig = ({ prefix, suffix, breakpointWidths }) => (
  Object.keys(breakpointWidths).reduce(
    ({ propNameMap, propNames, propTypes }, nextBreakpoint) => {
      const newPropName = `${prefix}${nextBreakpoint}${suffix}`;
      return {
        propNameMap: {
          ...propNameMap,
          [newPropName]: nextBreakpoint,
        },
        propNames: [
          ...propNames,
          newPropName,
        ],
        propTypes: {
          ...propTypes,
          [newPropName]: PropTypes.oneOfType(PropTypes.string, PropTypes.func),
        },
      };
    },
    {
      propNameMap: {},
      propNames: [],
      propTypes: {},
    },
  )
);

export default ({
  prefix = '',
  suffix = '-style',
  breakpointWidths = defaultBreakpointWidths,
  cssTemplate = ({ breakpointWidth, value }) => (
    `@media (min-width: ${breakpointWidth}) { ${value} }`
  ),
  defaultProps = {},
} = {}) => {
  const {
    propNameMap,
    propNames,
    propTypes,
  } = getConfig({
    prefix,
    suffix,
    breakpointWidths,
  });

  const template = getTemplate({
    propNameMap,
    propNames,
    propTypes,
    breakpointWidths,
    cssTemplate,
  });

  return {
    propNameMap,
    propNames,
    propTypes,
    template,
    component: (component) => {
      const StyledBreakpoint = styled(component)`${template}`;
      StyledBreakpoint.propTypes = propTypes;
      StyledBreakpoint.defaultProps = defaultProps;
      return StyledBreakpoint;
    },
  };
};

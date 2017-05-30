import PropTypes from 'prop-types';
import styled from 'styled-components';
import CustomPropTypes from '../lib/CustomPropTypes';
import { breakpointWidths, gridContainerMaxWidths, gutterHalfWidth } from '../constants';
import breakpointCssReducer from '../lib/breakpointCssReducer';

export default (component) => {
  const GridContainerHOC = styled(component)`
    box-sizing: border-box;
    margin-right: auto;
    margin-left: auto;
    padding-right: ${gutterHalfWidth};
    padding-left: ${gutterHalfWidth};
    ${props => (
      breakpointCssReducer({
        breakpoints: props.containerWidths,
        css: width => `
          width: ${width};
          max-width: 100%;
        `,
      })
    )}
  `;

  GridContainerHOC.defaultProps = {
    containerWidths: Object.keys(gridContainerMaxWidths).map(
      breakpoint => ({
        breakpoint,
        value: gridContainerMaxWidths[breakpoint],
      }),
    ),
  };

  GridContainerHOC.propTypes = {
    containerWidths: PropTypes.arrayOf(
      PropTypes.shape({
        breakpoint: PropTypes.oneOf(
          Object.keys(breakpointWidths),
        ).isRequired,
        value: CustomPropTypes.cssWidth.isRequired,
      }),
    ),
  };

  return GridContainerHOC;
};

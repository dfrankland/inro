import PropTypes from 'prop-types';
import styled from 'styled-components';
import { breakpointWidths } from '../constants';
import breakpointCssReducer from '../lib/breakpointCssReducer';

export default (component) => {
  const DisplayHOC = styled(component)`
    ${props => (
      breakpointCssReducer({
        breakpoints: props.d,
        css: display => `display: ${display};`,
      })
    )}
  `;

  DisplayHOC.defaultProps = {
    d: [],
  };

  DisplayHOC.propTypes = {
    d: PropTypes.arrayOf(
      PropTypes.shape({
        breakpoint: PropTypes.oneOf(
          Object.keys(breakpointWidths),
        ).isRequired,
        value: PropTypes.oneOf([
          'none',
          'inline',
          'inline-block',
          'block',
          'table',
          'table-cell',
          'flex',
          'inline-flex',
        ]).isRequired,
      }),
    ),
  };

  return DisplayHOC;
};

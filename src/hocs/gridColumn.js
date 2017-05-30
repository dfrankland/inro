import styled from 'styled-components';
import CustomPropTypes from '../lib/CustomPropTypes';
import { breakpointWidths, columns } from '../constants';
import breakpointCssReducer from '../lib/breakpointCssReducer';

export default (component) => {
  const GridColumnHOC = styled(component)`
    position: relative;
    min-height: 1px;
    ${props => (
      breakpointCssReducer({
        breakpoints: (
          Object.keys(props).reduce(
            (allBreakpoints, breakpoint) => {
              const value = props[breakpoint];
              if (!breakpointWidths[breakpoint] || !value) return allBreakpoints;
              return allBreakpoints.concat({ breakpoint, value });
            },
            [],
          )
        ),
        css: (size) => {
          const percentage = (size / columns) * 100;
          return `
            flex: 0 0 ${percentage}%;
            width: ${percentage}%;
            max-width: ${percentage}%;
          `;
        },
      })
    )}
  `;

  GridColumnHOC.defaultProps = (
    Object.keys(breakpointWidths).reduce(
      (allBreakpoints, breakpoint) => ({
        ...allBreakpoints,
        [breakpoint]: null,
      }),
      {},
    )
  );

  GridColumnHOC.propTypes = (
    Object.keys(breakpointWidths).reduce(
      (allBreakpoints, breakpoint) => ({
        ...allBreakpoints,
        [breakpoint]: CustomPropTypes.integerRange(1, columns),
      }),
      {},
    )
  );

  return GridColumnHOC;
};

import styled from 'styled-components';
import CustomPropTypes from '../lib/CustomPropTypes';
import { breakpointWidths, columns } from '../constants';
import breakpointCssReducer from '../lib/breakpointCssReducer';

const offsetKey = 'Offset';
const offsetKeyRegExp = new RegExp(`${offsetKey}$`);

export default (component) => {
  const GridColumnOffsetHOC = styled(component)`
    ${props => (
      breakpointCssReducer({
        breakpoints: (
          Object.keys(props).reduce(
            (allBreakpoints, breakpointOffset) => {
              const breakpoint = breakpointOffset.replace(offsetKeyRegExp, '');
              const value = props[breakpointOffset];
              if (
                !offsetKeyRegExp.test(breakpointOffset) ||
                !breakpointWidths[breakpoint] ||
                !value
              ) return allBreakpoints;
              return allBreakpoints.concat({ breakpoint, value });
            },
            [],
          )
        ),
        css: size => `
          margin-left: ${(size / columns) * 100}%;
        `,
      })
    )}
  `;

  GridColumnOffsetHOC.defaultProps = (
    Object.keys(breakpointWidths).reduce(
      (allBreakpoints, breakpoint) => ({
        ...allBreakpoints,
        [`${breakpoint}${offsetKey}`]: null,
      }),
      {},
    )
  );

  GridColumnOffsetHOC.propTypes = (
    Object.keys(breakpointWidths).reduce(
      (allBreakpoints, breakpoint) => ({
        ...allBreakpoints,
        [`${breakpoint}${offsetKey}`]: CustomPropTypes.integerRange(1, columns),
      }),
      {},
    )
  );

  return GridColumnOffsetHOC;
};

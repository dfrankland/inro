import { breakpointWidths } from '../constants';

export default ({ breakpoints, css }) => (
  breakpoints.reduce(
    (mediaQueries, nextBreakpoint) => {
      const { breakpoint, value } = nextBreakpoint;
      const breakpointWidth = breakpointWidths[breakpoint];

      if (!breakpointWidth) return mediaQueries;

      return `
        ${mediaQueries}
        @media (min-width: ${breakpointWidth}) {
          ${css(value)}
        }
      `;
    },
    '',
  )
);

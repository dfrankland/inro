import { rem } from 'polished';

export const WIDTH_XS = 'xs';
export const WIDTH_SM = 'sm';
export const WIDTH_MD = 'md';
export const WIDTH_LG = 'lg';
export const WIDTH_XL = 'xl';

// Taken from:
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss#L171-L184
//
// Commit: 0501b029f53411e3168e8f2434cc519ea0fab4d6
export const breakpointMinWidths = {
  [WIDTH_XS]: rem('0px'),
  [WIDTH_SM]: rem('576px'),
  [WIDTH_MD]: rem('768px'),
  [WIDTH_LG]: rem('992px'),
  [WIDTH_XL]: rem('1200px'),
};

// Taken from:
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss#L187-L197
//
// Commit: 0501b029f53411e3168e8f2434cc519ea0fab4d6
export const gridContainerMaxWidths = {
  [WIDTH_XS]: 'auto',
  [WIDTH_SM]: rem('540px'),
  [WIDTH_MD]: rem('720px'),
  [WIDTH_LG]: rem('960px'),
  [WIDTH_XL]: rem('1140px'),
};

// Taken from:
// https://github.com/twbs/bootstrap/blob/v4-dev/scss/_variables.scss#L200-L205
//
// Commit: 0501b029f53411e3168e8f2434cc519ea0fab4d6
export const columns = 12;
export const gutterHalfWidth = rem('15px');

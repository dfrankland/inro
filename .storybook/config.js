/* eslint-disable global-require */
import 'babel-polyfill';
import { configure } from '@storybook/react';

configure(
  () => {
    // Components
    require('../src/components/FlexContainer/__tests__/story');
    require('../src/components/FlexItem/__tests__/story');
    require('../src/components/GridContainer/__tests__/story');

    // HOCs
    require('../src/hocs/flexContainer/__tests__/story');
    require('../src/hocs/flexItem/__tests__/story');
    require('../src/hocs/gridColumn/__tests__/story');
    require('../src/hocs/gridColumnOffset/__tests__/story');
    require('../src/hocs/gridContainer/__tests__/story');
    require('../src/hocs/gridGutterColumn/__tests__/story');
    require('../src/hocs/gridGutterRow/__tests__/story');
    require('../src/hocs/gridRow/__tests__/story');
    require('../src/hocs/styledBreakpoint/__tests__/story');
  },
  module,
);

/* eslint-disable global-require */
import 'babel-polyfill';
import { configure } from '@storybook/react';

configure(
  () => {
    // Components
    require('../src/components/FlexContainer/__storybook__/story');
    require('../src/components/FlexItem/__storybook__/story');
    require('../src/components/GridContainer/__storybook__/story');

    // HOCs
    require('../src/hocs/flexContainer/__storybook__/story');
    require('../src/hocs/flexItem/__storybook__/story');
    require('../src/hocs/gridColumn/__storybook__/story');
    require('../src/hocs/gridColumnOffset/__storybook__/story');
    require('../src/hocs/gridContainer/__storybook__/story');
    require('../src/hocs/gridGutterColumn/__storybook__/story');
    require('../src/hocs/gridGutterRow/__storybook__/story');
    require('../src/hocs/gridRow/__storybook__/story');
    require('../src/hocs/styledBreakpoint/__storybook__/story');
  },
  module,
);

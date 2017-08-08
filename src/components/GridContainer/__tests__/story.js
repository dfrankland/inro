import React from 'react';
import { storiesOf } from '@storybook/react';
import GridContainer from '../index';

storiesOf('GridContainer', module)
  .add('it renders', () => (
    <GridContainer xs-style="text-align: center; border: 1px solid">
      <h1>Resize the window to see the container adapt!</h1>
    </GridContainer>
  ));

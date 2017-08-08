import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import FlexContainer from '../index';
import FlexItem from '../../FlexItem';
import { gutterHalfWidth } from '../../../constants';

const StyledFlexItem = ({ children }) => (
  <FlexItem xs-style="text-align: center; border: 1px solid">
    Column {children}
  </FlexItem>
);

StyledFlexItem.propTypes = {
  children: PropTypes.number.isRequired,
};

storiesOf('FlexContainer', module)
  .add('it renders', () => (
    <div style={{ padding: gutterHalfWidth }}>
      <FlexContainer>
        <div style={{ width: '100%' }}>Flex Container</div>
        <StyledFlexItem>1</StyledFlexItem>
        <StyledFlexItem>2</StyledFlexItem>
        <StyledFlexItem>3</StyledFlexItem>
      </FlexContainer>
    </div>
  ))
  .add('it can reverse flex items', () => (
    <div style={{ padding: gutterHalfWidth }}>
      <FlexContainer flexDirection="row-reverse">
        <div style={{ width: '100%' }}>Flex Container</div>
        <StyledFlexItem>1</StyledFlexItem>
        <StyledFlexItem>2</StyledFlexItem>
        <StyledFlexItem>3</StyledFlexItem>
      </FlexContainer>
    </div>
  ))
  .add('it can be inline', () => (
    <div style={{ padding: gutterHalfWidth }}>
      <FlexContainer inline>
        <div style={{ width: '100%' }}>Flex Container</div>
        <StyledFlexItem>1</StyledFlexItem>
        <StyledFlexItem>2</StyledFlexItem>
        <StyledFlexItem>3</StyledFlexItem>
      </FlexContainer>
    </div>
  ));

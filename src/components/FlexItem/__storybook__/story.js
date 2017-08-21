import React from 'react';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';
import FlexItem from '../index';
import FlexContainer from '../../FlexContainer';
import { gutterHalfWidth } from '../../../constants';

const StyledFlexItem = ({ children, ...props }) => (
  <FlexItem xs-style="text-align: center; border: 1px solid" {...props}>
    Flex Item {children}
  </FlexItem>
);

StyledFlexItem.propTypes = {
  children: PropTypes.number.isRequired,
};

storiesOf('FlexItem', module)
  .add('they render', () => (
    <div style={{ padding: gutterHalfWidth }}>
      <FlexContainer>
        <div style={{ width: '100%' }}>Container</div>
        <StyledFlexItem>1</StyledFlexItem>
        <StyledFlexItem>2</StyledFlexItem>
        <StyledFlexItem>3</StyledFlexItem>
      </FlexContainer>
    </div>
  ))
  .add('they can order themselves', () => (
    <div style={{ padding: gutterHalfWidth }}>
      <FlexContainer>
        <div style={{ width: '100%' }}>Container</div>
        <StyledFlexItem order={2}>1</StyledFlexItem>
        <StyledFlexItem order={3}>2</StyledFlexItem>
        <StyledFlexItem order={1}>3</StyledFlexItem>
      </FlexContainer>
    </div>
  ))
  .add('they can be adaptive', () => (
    <div style={{ padding: gutterHalfWidth }}>
      <h1>Resize the window to see columns adapt!</h1>
      <FlexContainer>
        <div style={{ width: '100%' }}>Container</div>
        <StyledFlexItem xs-columns={12} sm-columns={4}>1</StyledFlexItem>
        <StyledFlexItem xs-columns={12} sm-columns={4}>2</StyledFlexItem>
        <StyledFlexItem xs-columns={12} sm-columns={4}>3</StyledFlexItem>
      </FlexContainer>
    </div>
  ));

import PropTypes from 'prop-types';
import styled from 'styled-components';
import CustomPropTypes from '../lib/CustomPropTypes';

export default (component) => {
  const FlexItem = styled(component)`
    ${props => `align-self: ${props.alignSelf};`}
    ${props => `flex-basis: ${props.flexBasis};`}
    ${props => `flex-grow: ${props.flexGrow};`}
    ${props => `flex-shrink: ${props.flexShrink};`}
    ${props => `order: ${props.order};`}
  `;

  FlexItem.defaultProps = {
    alignSelf: 'auto',
    flexBasis: 'auto',
    flexGrow: 1,
    flexShrink: 1,
    order: 0,
  };

  FlexItem.propTypes = {
    alignSelf: PropTypes.oneOf([
      'auto',
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch',
    ]),
    flexBasis: PropTypes.oneOfType([
      PropTypes.oneOf([
        'auto',
        'content',
      ]),
      CustomPropTypes.cssWidth,
    ]),
    flexGrow: PropTypes.number,
    flexShrink: PropTypes.number,
    order: CustomPropTypes.integer,
  };

  return FlexItem;
};

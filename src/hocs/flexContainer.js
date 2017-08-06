import PropTypes from 'prop-types';
import styled from 'styled-components';

export default (component) => {
  const FlexContainer = styled(component)`
    display: ${props => (props.inline ? 'inline-flex' : 'flex')};
    ${props => `align-content: ${props.alignContent};`}
    ${props => `align-items: ${props.alignItems};`}
    ${props => `flex-direction: ${props.flexDirection};`}
    ${props => `flex-wrap: ${props.flexWrap};`}
    ${props => `justify-content: ${props.justifyContent};`}
  `;

  FlexContainer.defaultProps = {
    inline: false,
    alignContent: 'stretch',
    alignItems: 'stretch',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
  };

  FlexContainer.propTypes = {
    inline: PropTypes.bool,
    alignContent: PropTypes.oneOf([
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
      'stretch',
    ]),
    alignItems: PropTypes.oneOf([
      'flex-start',
      'flex-end',
      'center',
      'baseline',
      'stretch',
    ]),
    flexDirection: PropTypes.oneOf([
      'row',
      'row-reverse',
      'column',
      'column-reverse',
    ]),
    flexWrap: PropTypes.oneOf([
      'nowrap',
      'wrap',
      'wrap-reverse',
    ]),
    justifyContent: PropTypes.oneOf([
      'flex-start',
      'flex-end',
      'center',
      'space-between',
      'space-around',
      'space-evenly',
    ]),
  };

  return FlexContainer;
};

import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import flexItem from '../index';

const Component = ({ className }) => <div className={className} />;
Component.propTypes = { className: PropTypes.string.isRequired };

const WrappedComponent = flexItem()(Component);

describe('flexItem', () => {
  it('it renders', () => {
    const html = shallow(<WrappedComponent />).html();
    const expectedHtml = shallow(
      <div className="sc-bdVaJa iphqvS" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });
});

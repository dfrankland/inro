import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import flexContainer from '../index';

const Component = ({ className }) => <div className={className} />;
Component.propTypes = { className: PropTypes.string.isRequired };

const WrappedComponent = flexContainer()(Component);

describe('flexContainer', () => {
  it('it renders', () => {
    const html = shallow(<WrappedComponent />).html();
    const expectedHtml = shallow(
      <div className="sc-bdVaJa lVXjc" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });

  it('it can be inline', () => {
    const html = shallow(<WrappedComponent inline />).html();
    const expectedHtml = shallow(
      <div className="sc-bdVaJa ljHgoH" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });
});

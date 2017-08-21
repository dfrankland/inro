import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import gridRow from '../index';

const Component = ({ className }) => <div className={className} />;
Component.propTypes = { className: PropTypes.string.isRequired };

const WrappedComponent = gridRow()(Component);

describe('gridRow', () => {
  it('it renders', () => {
    const html = shallow(<WrappedComponent />).html();
    const expectedHtml = shallow(
      <div className="sc-bdVaJa kDDYyl" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });
});

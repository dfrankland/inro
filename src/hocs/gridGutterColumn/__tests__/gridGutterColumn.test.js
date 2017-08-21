import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import gridGutterColumn from '../index';

const Component = ({ className }) => <div className={className} />;
Component.propTypes = { className: PropTypes.string.isRequired };

const WrappedComponent = gridGutterColumn()(Component);

describe('gridGutterColumn', () => {
  it('it renders', () => {
    const html = shallow(<WrappedComponent />).html();
    const expectedHtml = shallow(
      <div className="sc-bdVaJa hFHkdb" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });
});

import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import gridColumnOffset from '../index';

const Component = ({ className }) => <div className={className} />;
Component.propTypes = { className: PropTypes.string.isRequired };

const WrappedComponent = gridColumnOffset()(Component);

describe('gridColumnOffset', () => {
  it('it renders', () => {
    const html = shallow(<WrappedComponent />).html();
    const expectedHtml = shallow(
      <div className="sc-bdVaJa bDWFJH" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });

  it('it can have its position offset', () => {
    const html = shallow(<WrappedComponent xs-column-offset={1} />).html();
    const expectedHtml = shallow(
      <div className="sc-bdVaJa evvifm" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });
});

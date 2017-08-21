import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import gridContainer from '../index';

const Component = ({ className }) => <div className={className} />;
Component.propTypes = { className: PropTypes.string.isRequired };

const WrappedComponent = gridContainer()(Component);

const WrappedComponentUserDefinedWidths = gridContainer({
  gridContainerMaxWidths: { xs: '100px' },
})(Component);

describe('gridContainer', () => {
  it('it renders', () => {
    const html = shallow(<WrappedComponent />).html();
    const expectedHtml = shallow(
      <div className="sc-bwzfXH cnoMMS sc-bdVaJa bPHdKy" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });

  it('it can have user defined container widths', () => {
    const html = shallow(<WrappedComponentUserDefinedWidths />).html();
    const expectedHtml = shallow(
      <div className="sc-bxivhb fXJwgE sc-htpNat kndGgj" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });
});

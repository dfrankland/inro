import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import styledBreakpoint from '../index';

const Component = ({ className }) => <div className={className} />;
Component.propTypes = { className: PropTypes.string.isRequired };

const { component: WrappedComponent } = styledBreakpoint()(Component);

const { component: WrappedComponentBadTemplate } = styledBreakpoint({
  cssTemplate: () => null,
})(Component);

describe('styledBreakpoint', () => {
  it('it renders', () => {
    const html = shallow(<WrappedComponent />).html();
    const expectedHtml = shallow(
      <div className="sc-bdVaJa bDWFJH" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });

  it('it can be styled at specified breakpoints', () => {
    const html = shallow(<WrappedComponent xs-style={() => 'color: red;'} />).html();
    const expectedHtml = shallow(
      <div className="sc-bdVaJa ledRdT" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });

  it('it will not break if `cssTemplate` does not return string', () => {
    const html = shallow(<WrappedComponentBadTemplate xs-style={() => 'color: red;'} />).html();
    const expectedHtml = shallow(
      <div className="sc-bwzfXH uTxCW" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });
});

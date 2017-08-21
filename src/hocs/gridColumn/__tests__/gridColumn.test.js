import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import gridColumn from '../index';

const Component = ({ className }) => <div className={className} />;
Component.propTypes = { className: PropTypes.string.isRequired };

const WrappedComponent = gridColumn()(Component);

const WrappedComponentNoFlex = gridColumn({ flex: false })(Component);

describe('gridColumn', () => {
  it('it renders', () => {
    const html = shallow(<WrappedComponent />).html();
    const expectedHtml = shallow(
      <div className="sc-bdVaJa bDWFJH" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });

  it('it can have its width be set by an integer', () => {
    const html = shallow(<WrappedComponent xs-columns={1} />).html();
    const expectedHtml = shallow(
      <div className="sc-bdVaJa EFskx" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });

  it('it defaults its width to `auto` if the value given is not a truthy value', () => {
    const NODE_ENV = process.env.NODE_ENV;
    process.env.NODE_ENV = 'production'; // Disable prop-types console error
    const html = shallow(<WrappedComponent xs-columns="blah" />).html();
    const expectedHtml = shallow(
      <div className="sc-bdVaJa bpVkXR" />,
    ).html();
    expect(html).toEqual(expectedHtml);
    process.env.NODE_ENV = NODE_ENV;
  });

  it('it can have its width be `auto`', () => {
    const html = shallow(<WrappedComponent xs-columns="auto" />).html();
    const expectedHtml = shallow(
      <div className="sc-bdVaJa cjFrID" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });

  it('it can have its width be set by an integer, without flexbox', () => {
    const html = shallow(<WrappedComponentNoFlex xs-columns={1} />).html();
    const expectedHtml = shallow(
      <div className="sc-bwzfXH iEyIWb" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });

  it('it can have its width be `auto`, without flexbox', () => {
    const html = shallow(<WrappedComponentNoFlex xs-columns="auto" />).html();
    const expectedHtml = shallow(
      <div className="sc-bwzfXH ieubcH" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });
});

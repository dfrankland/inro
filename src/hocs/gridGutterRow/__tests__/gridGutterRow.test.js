import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import gridGutterRow from '../index';

const Component = ({ className }) => <div className={className} />;
Component.propTypes = { className: PropTypes.string.isRequired };

const WrappedComponent = gridGutterRow()(Component);

describe('gridGutterRow', () => {
  it('it renders', () => {
    const html = shallow(<WrappedComponent />).html();
    const expectedHtml = shallow(
      <div className="sc-bdVaJa zMhhV" />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });
});

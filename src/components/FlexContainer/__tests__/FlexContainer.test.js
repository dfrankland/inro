import React from 'react';
import { shallow } from 'enzyme';
import FlexContainer from '../index';

describe('FlexContainer', () => {
  it('it renders', () => {
    const html = shallow(<FlexContainer />).html();
    const expectedHtml = shallow(
      <div
        className="sc-ifAKCX cFlEyZ sc-bxivhb AiGcE sc-htpNat iijqfC sc-bwzfXH kmRGIa sc-bdVaJa bDWFJH"
      />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });
});

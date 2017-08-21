import React from 'react';
import { shallow } from 'enzyme';
import FlexItem from '../index';

describe('FlexItem', () => {
  it('it renders', () => {
    const html = shallow(<FlexItem />).html();
    const expectedHtml = shallow(
      <div
        className="sc-EHOje jvzENE sc-ifAKCX LZlAN sc-bxivhb bUZGRr sc-htpNat KtFsv sc-bwzfXH eSIxOm sc-bdVaJa bDWFJH"
      />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });
});

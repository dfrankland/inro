import React from 'react';
import { shallow } from 'enzyme';
import GridContainer from '../index';

describe('GridContainer', () => {
  it('it renders', () => {
    const html = shallow(<GridContainer />).html();
    const expectedHtml = shallow(
      <div
        className="sc-bxivhb bUZGRr sc-htpNat gXTgvl sc-bwzfXH kpXMFs sc-bdVaJa bDWFJH"
      />,
    ).html();
    expect(html).toEqual(expectedHtml);
  });
});

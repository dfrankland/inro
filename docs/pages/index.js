import React from 'react';
import PropTypes from 'prop-types';
import { GridContainer, FlexContainer, FlexItem } from 'inro';
import styled from 'styled-components';
import { rem } from 'polished';
import remark from 'remark';
import reactRenderer from 'remark-react';
import './style';

const StyledBox = styled(FlexItem)`
  position: relative;
  height: 2rem;
  margin: 0.5rem 0;
  border-radius: 0.5rem;
  border: solid rgba(255, 255, 255, 0.25) 0.25rem;
  text-align: center;
  :after {
    content: '🌸';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }
`;

const StyledLogo = styled.img`
  width: 100px;
  margin: 2rem 0 0 0;
`;

const Page = ({ readMes }) => (
  <GridContainer lg-container={rem('540px')} xl-container={rem('540px')}>
    <FlexContainer>
      <FlexItem xs-style="text-align: center;" xs-column={12} md-columns={4} md-column-offset={4}>
        <StyledLogo alt="inro logo" src="/static/inro-logo.png" />
        <h1>inro</h1>
      </FlexItem>
      <FlexItem xs-style="text-align: center;" xs-columns={12}>
        <h2>Probably the easiest way to create a responsive UI.</h2>
      </FlexItem>
      <FlexItem xs-columns={12}>
        <FlexContainer>
          {[...new Array(12)].map((v, index) => (
            <FlexItem key={`${index + 1}`} xs-columns={2} md-columns={1}>
              <StyledBox />
            </FlexItem>
          ))}

          {[...new Array(6)].map((v, index) => (
            <FlexItem key={`${index + 1}`} xs-columns={4} md-columns={2}>
              <StyledBox />
            </FlexItem>
          ))}

          {[...new Array(4)].map((v, index) => (
            <FlexItem
              key={`${index + 1}`}
              xs-style="display: none;"
              md-style="display: block;"
              xs-columns={6}
              md-columns={3}
            >
              <StyledBox />
            </FlexItem>
          ))}

          <FlexItem xs-columns={12} md-columns={4}>
            <StyledBox />
          </FlexItem>
          {[...new Array(2)].map((v, index) => (
            <FlexItem
              key={`${index + 1}`}
              xs-columns={6}
              md-columns={4}
            >
              <StyledBox />
            </FlexItem>
          ))}

          {[...new Array(2)].map((v, index) => (
            <FlexItem
              key={`${index + 1}`}
              xs-style="display: none;"
              md-style="display: block;"
              xs-columns={12}
              md-columns={6}
            >
              <StyledBox />
            </FlexItem>
          ))}

          <FlexItem
            xs-style="display: none;"
            md-style="display: block;"
            xs-columns={12}
          >
            <StyledBox />
          </FlexItem>
        </FlexContainer>
      </FlexItem>

      {readMes.map(
        (readMe, index) => (
          <FlexItem key={`${index + 1}`} xs-columns={12}>
            {remark()
              .use(reactRenderer)
              .processSync(readMe)
              .contents}
          </FlexItem>
        ),
      )}
    </FlexContainer>
  </GridContainer>
);

Page.propTypes = {
  readMes: PropTypes.arrayOf(PropTypes.string).isRequired,
};

Page.defaultProps = {
  readMes: [],
};

Page.getInitialProps = async () => ({
  readMes: typeof window === 'undefined' ?
    require('./readMes').default() : // eslint-disable-line global-require
    window.READMES,
});

export default Page;

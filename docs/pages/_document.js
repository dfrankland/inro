import React from 'react';
import Document, { Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import readMes from './readMes';

export default class extends Document {
  render() {
    const sheet = new ServerStyleSheet();
    const main = sheet.collectStyles(<Main />);
    const styleTags = sheet.getStyleElement();
    return (
      <html lang="en">
        <Head>
          <title>inro</title>
          {styleTags}
          <script
            dangerouslySetInnerHTML={{ // eslint-disable-line react/no-danger
              __html: `var READMES = ${JSON.stringify(readMes())};`,
            }}
          />
        </Head>
        <body>
          <div>
            {main}
          </div>
          <NextScript />
        </body>
      </html>
    );
  }
}

import { seo } from '../../../config';
import Head from 'next/head';
import PropTypes from 'prop-types';
import React from 'react';

const getMetaData = metaData =>
  Object.keys(metaData).reduce((meta, metaName) => {
    const metaValue = metaData[metaName];

    if (!metaValue) {
      return meta;
    }

    if (metaName === 'image') {
      return [
        ...meta,
        { content: metaValue, property: `og:${metaName}` },
        { content: metaValue, property: `og:${metaName}:secure_url` },
        { content: metaValue, name: `twitter:${metaName}` }
      ];
    }

    if (metaName === 'keywords') {
      return [...meta, { content: metaValue, name: metaName }];
    }

    if (metaName === 'title') {
      return [
        ...meta,
        { content: metaValue, property: `og:${metaName}` },
        { content: metaValue, name: `twitter:${metaName}` }
      ];
    }

    if (metaName === 'url') {
      return [...meta, { content: metaValue, property: `og:${metaName}` }];
    }

    return [
      ...meta,
      { content: metaValue, name: metaName },
      { content: metaValue, name: `twitter:${metaName}` },
      { content: metaValue, property: `og:${metaName}` }
    ];
  }, []);

export const SEO = props => {
  const { url } = props;
  const title = seo?.title;

  const parsedMeta = getMetaData({ ...seo, url });

  return (
    <Head>
      <title>{title}</title>
      {parsedMeta.map((metaprops, index) => (
        <meta key={index} {...metaprops} />
      ))}
    </Head>
  );
};

SEO.propTypes = {
  url: PropTypes.string
};

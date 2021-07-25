import React from 'react';
import Head from 'next/head';

const Seo = ({
  description = 'Javascript,Full stack Web developer,React Native Developer',
  ogTitle = 'Charan | Full Stack and React Native developer',
  ogImage = 'https://static.wixstatic.com/media/1f823f_954a0ffc17d54701b9e230f06b5be3ae~mv2.png',
  title = 'Charan | Portfolio',
}) => {
  return (
    <Head>
      <meta charSet='utf-8' />
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      <title>{title}</title>
      <meta name='robots' content='index, follow' />
      <link rel='icon' href='/logo.png' />
      <meta name='author' content='Charan' />
      <meta name='description' content={description} />
      <meta
        name='keyword'
        content='charan,node js,portfolio, javascript, developer,Full stack,blog,python,django,react js,next js,angular,rest api,html,css,mongodb,react native'
      />
      <meta property='og:title' content={ogTitle} />
      <meta property='og:description' content={description} />
      <meta property='og:image' content={ogImage} />
      <meta property='og:url' content='' />
      <meta property='og:type' content='website' />

      <meta name='twitter:card' content='summary' />
      <meta name='twitter:title' content={ogTitle} />
      <meta name='twitter:description' content={description} />
      <meta name='twitter:image' content={ogImage} />
    </Head>
  );
};

export default Seo;

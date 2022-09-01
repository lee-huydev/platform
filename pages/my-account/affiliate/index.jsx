import React from 'react';
import Head from 'next/head';
import Script from 'next/script';
import Layout from '../../../components/Layout';
import Affliate from '../../../components/Affliate';
const Index = () => {
    return (
        <div>
         <Head>
            <title>Create Next App</title>
            <meta name="description" content="Generated by create next app" />
            <link rel="icon" href="/favicon.ico" />
         </Head>
         <Layout>
            <Affliate />
         </Layout>
         <Script
            src="https://cdn.lordicon.com/xdjxvujz.js"
            strategy="lazyOnload"
            onLoad={() => console.log('script on load')}
         />
      </div>
    );
}

export default Index;

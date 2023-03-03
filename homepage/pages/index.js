import Head from 'next/head';
import dynamic from 'next/dynamic';
import React, { Suspense } from 'react';
const MovieCard = dynamic(() => import('components/MovieCard'));

export default function Home({ data }) {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Home Page</h1>
        <Suspense fallback={null}>{data.length && data.map((item, index) => <MovieCard key={index} />)}</Suspense>
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:5555/users`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { data } };
}

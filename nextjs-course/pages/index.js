import Link from 'next/link'
import { Fragment } from "react";

function HomePage() {
  return (
    <Fragment>
      <h1>The Home Page</h1>
      <ul>
        <li><Link href="/news/nextjs-is-great">NextJS is great</Link></li>
        <li><Link href="/news/wow-news">Wow News</Link></li>
      </ul>
    </Fragment>
  );
}

export default HomePage;

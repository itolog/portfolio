import Link from 'next/link';

export default function Home() {
  return (
    <div>
      <h1>Home</h1>
      <ul>
        <li>
          <Link href='/'>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href='/about'>
            <a>About Us</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}

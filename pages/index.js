import Link from 'next/link';

function Home() {
  return(
    <div>
      <h1>Home Page </h1>
      <Link href='./Docs' > 
        <a >Docs</a>
      </Link> {' '}

      <Link href='./Products' > 
        <a >Products</a>
      </Link>
    </div>
  )
}
export default Home
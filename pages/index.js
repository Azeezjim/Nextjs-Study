import Link from 'next/link';
import { useRouter } from 'next/router'

function Home() {
  const router = useRouter()

  const handleClick = () => { 
    console.log('lace your order');
    router.replace('/Products')
  }
  return(
    <div>
      <h1>Home Page </h1>
      <Link href='./Docs' > 
        <a >Docs</a>
      </Link> {' '}

      <Link href='./Products' > 
        <a >Products</a> 
      </Link>
      <button onClick={handleClick}>
        Place Holder
      </button>
    </div>
  )
}
export default Home
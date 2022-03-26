import Link from 'next/link'


export default function ProductList({productId = 100}) {

  return (
    <>
      <Link href='/'>
        <a> Home</a>
      </Link>

      <Link href='/Products/1'>
        <a> Product 1</a>
      </Link>

      <Link href='/Products/2'>
        <a> Product 2</a>
      </Link>

      <Link href='/Products/3'>
        <a> Product 3</a>
      </Link>

      <Link href={`/Products/${productId}`}>
        <a> Product {productId}</a>
      </Link>
    </>
  )
}

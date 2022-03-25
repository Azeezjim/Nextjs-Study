import { useRouter } from "next/router"

function  ProductDetails() {
  const router = useRouter();
  const productId = router.query.productId
  return <div> Details about products {productId}</div>
}
export default ProductDetails;

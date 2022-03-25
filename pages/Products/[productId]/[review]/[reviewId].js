import {useRouter } from 'next/router';

function Review() {
  const router = useRouter()
  const {productId, reviewId} = router.query
  return (
  <div>Review {reviewId} for Product {productId}</div>
  )
}

export default Review
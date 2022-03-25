import { useRouter } from 'next/router';

function Doc() {
  const router = useRouter();
  const {parems } =router.query
  console.log("parems", parems)
  return (
    <div>Doc Home Page</div>
  )
}

export default Doc
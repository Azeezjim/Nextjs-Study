import { useRouter } from "next/router";

function Doc() {
  const router = useRouter();
  const { parems = [] } = router.query;
  console.log("parems", parems);
  if (parems.length === 2) {
    return (
      <h1>
        Viewing docs for {parems[0]} and {parems[1]}
      </h1>
    )
  } else if (parems.length === 1) {
    return <h1> Viewing docs for {parems[0]}</h1>;
  }  return <h1>Doc Home Page</h1>;
}

export default Doc;

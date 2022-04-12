import { useRouter } from "next/router";

function Posts({ post }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>Loading...</div>;
  }
  return (
    <>
      <h2>
        {post.id} {post.title}
      </h2>
      <hr />
      {post.body}
    </>
  );
}

export default Posts;

export async function getStaticPaths() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  // const data = await response.json();

  // const paths = data.map((post) => {
  //   return {
  //     params: {
  //       postsId: `${post.id}`,
  //     },
  //   };
  // });


  return {
    // paths,
    paths: [
      { params: { postsId: '1' } },
      { params: { postsId: '2' } },
      { params: { postsId: '3' } }
    ],
    fallback: true,
  }
}

export async function getStaticProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${params.postsId}`
  );
  const data = await response.json();
    if(!data.id) {
      return {
        notFound: true
      }
    }

  console.log(`generating gage for /posts/${params.postsId}`);

  return {
    props: {
      post: data,
    },
  };
}

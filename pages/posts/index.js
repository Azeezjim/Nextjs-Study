import Link from "next/link";

function PostLists({ posts }) {
  return (
    <>
      <h1>Posts</h1>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link href={`posts/${post.id}`} passHref>
              <a>
                <h2>
                  {post.id} {post.title}
                </h2>
              </a>
            </Link>
            <hr />
            {/* <p>{post.name}</p> */}
            {/* <p>{post.email}</p> */}
          </div>
        );
      })}
    </>
  );
}

export default PostLists;

export async function getStaticPaths() {
  return {
    paths: [
      {
        params: { postId: "1" },
      },
      {
        params: { postId: "2" },
      },
      {
        params: { postId: "3" },
      },
      {
        params: { postId: "4" },
      },
      {
        params: { postId: "5" },
      },
    ],
    fallback: false,

  };
}

// export async function getStaticProps() {
//   const response = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await response.json();

//   return {
//     props: {
//       posts: data.slice(0, 5),
//     },
//   };
// }


function Posts({ post }) {
  return (
    <>
      <h2>{post.id} {post.title}</h2>
      <hr/>
      {post.body}
    </>
    )
}

export default Posts


export async function getStaticProps(context) {
  const {params } = context;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
  const data = await response.json();

  return {
    props: {
      post: data.slice(0, 10),
    },
  };
}
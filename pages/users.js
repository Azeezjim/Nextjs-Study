import User from "../components/user.js";


function UserList({ users }) {
  return (
    <>
      <h1>userList</h1>
      {users.map(user=> {
        return (
          <div key={user.id}>
            <User  user = {user}/>
          </div>
        );
      })}
    </>
  );
}

export default UserList;

export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users')
  const data = await response.json();
  console.log(data.email);

  return {
    props: {
      users: data
    }
  }
}


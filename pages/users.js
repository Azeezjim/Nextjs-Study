import React from 'react'

function userList() {
  return (
    <div>userList</div>
  )
}

export default userList;

export async function getStartedProps() {
  const requires = await fetch("https://jsonplaceholder.typicode.com/users")
  const data = await requires.json()
  console.log(data);
}
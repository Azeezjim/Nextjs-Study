import useSWR  from "swr";
const featcher = async () => {
  const response = await fetch('http://localhost:4000/dashboard')
  const data = await response.json()
  return data;
}

function DatabaseSWR() {
  const { data, error } = useSWR('dashboard', featcher )

  if( error) return 'An error occored'
  if (!data) return 'Loading...'


  return (
    <div>
      <h2>SWR Dashboard</h2>
      <h2>Posts - {data.posts}</h2>
      <h2>Likes - {data.likes}</h2>
      <h2>Followers - {data.followers}</h2>
      <h2>Following - {data.following}</h2>
    </div>
  )
}
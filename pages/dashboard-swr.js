import useSWR  from "swr";

function DatabaseSWR() {
  useSWR('dashboard', async () => {
    const response = await fetch()
  })
}
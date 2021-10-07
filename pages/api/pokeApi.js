// Test pokemon api
// https://pokeapi.co/api/v2/pokemon/
// select pokemon https://pokeapi.co/api/v2/pokemon/1/

// https://pokeapi.co/api/v2/{endpoint}/
// https://pokeapi.co/api/v2/pokemon/12/
// https://pokeapi.co/api/v2/pokemon-species/12/
// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: "John Doe" });
}

// Static Generation without Data + Fetch Data on the Client-Side
// import useSWR from 'swr'

// function Profile() {
//   const { data, error } = useSWR('/api/user', fetch)

//   if (error) return <div>failed to load</div>
//   if (!data) return <div>loading...</div>
//   return <div>hello {data.name}!</div>
// }

   

import Head from 'next/head'


export default function Home({articles}) {
  return (
    <div>
    <div>
      {/* {quotes.map((quote)=>(
        <h2>{quote}</h2>
      ))} */}

     <h2>Name :{articles.name}</h2>
     <h3> Birth Year :{articles.birth_year}</h3>
     <p> Hair Color :{articles.hair_color}</p>
    </div>

    </div>
  )
}
 


// export const getStaticProps = async () => {
//   const res = await fetch(`https://api.kanye.rest`)
//   console.log(res);
//   const quotes = await res.json()
//   console.log(qutoes)

//   return {
//     props: {
//       quotes
//     },
//   }
// }


export const getStaticProps = async () => {
  const res = await fetch(`https://swapi.dev/api/people/1`)
  
  const articles = await res.json()
  console.log(articles)

  return {
    props: {
      articles,
    },
  }
}
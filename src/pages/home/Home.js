// import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch'

import Pagination from '../../components/Pagination';
import Post from '../../components/Post'

{/* {posts && (
        <>
          <Pagination
            data={posts}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={10}
          />
        </>
      ) } */}


export default function App() {
  const {data, isPending, error } = useFetch('https://api.github.com/search/users?q=lagos&page=20')

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading...</h2>}
      {data && data.items.map(profile => {
        <div key={profile.id} className='card'>
          <img src={profile.avatar_url} alt="" />
          <p>{profile.login}</p>
          <p>{profile.score}</p>
        </div>
      })}
    </div>
  );
}
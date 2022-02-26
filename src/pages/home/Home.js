import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch'

import Pagination from '../../components/Pagination';
import Post from '../../components/Post'


export default function App() {
  const {data: posts, isPending, error } = useFetch('http://localhost:5000/posts')

  if (error) return <h1>{error}</h1>;

  return (
    <div>
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading...</h2>}
      {!posts && <h2>No post to display</h2>}
      {posts && (
        <>
          <Pagination
            data={posts}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={10}
          />
        </>
      ) }
    </div>
  );
}
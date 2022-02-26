// import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch'

// components
import Profile from '../../components/Profile';
import Pagination from '../../components/Pagination'

// styles
import './Home.css'

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
  const { data, isPending, error } = useFetch('https://api.github.com/search/users?q=lagos&page=1')
  
  return (
    <div className='container'>
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading...</h2>}
      {data && <Profile data={data} />}
      {/* {data && (
        <Pagination
          data={data}
          RenderComponent={Profile}
          pageLimit={5}
          dataLimit={10}
        />
      )} */}
    </div>
  );
}
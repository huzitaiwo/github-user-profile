import { useState, useEffect } from 'react';
import { useFetch } from '../../hooks/useFetch'

import Pagination from '../../components/Pagination';
import Post from '../../components/Post'

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
  const [hover, setHover] = useState(false)
  const {data, isPending, error } = useFetch('https://api.github.com/search/users?q=lagos&page=1')
  
  return (
    <div className='profile'>
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading...</h2>}
      {data && data.items.map(profile => (
        <div 
          key={profile.id} 
          className='card' 
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          >
          {/* <img src={profile.avatar_url} alt="" /> */}
          <p>{profile.login}</p>
          {hover && (
            <>
              <p>{profile.score}</p>
              <p>{profile.type}</p>
              <a href={profile.html_url}>View user profile</a>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
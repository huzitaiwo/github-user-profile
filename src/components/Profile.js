import { useState } from 'react'

// styles
import './Profile.css'

export default function Profile({ data }) {
  const [hover, setHover] = useState(false)

  if(data.length === 0) {
    return <div className='error'>No user profile...</div> 
  }

  return (
    <div className='container profile'>
      {data.map(profile => (
        <div 
          key={profile.id} 
          className='card' 
          onMouseEnter={() => setHover(true)} 
          onMouseLeave={() => setHover(false)}
        >
          <img src={profile.avatar_url} alt="" />
          <p><span className='label'>username:</span> {profile.login}</p>
          {(
          <>
            <p><span className='label'>score:</span> {profile.score}</p>
            <p><span className='label'>profile type:</span> {profile.type}</p>
            <a className='link' href={profile.html_url}>View profile</a>
          </>
          )}
          {totalPages !== page && <button className="btn-load-more" onClick={() => setPage(page + 1)}>{isPending ? 'loading...' : 'Load More'}</button>}
        </div>
      ))}
    </div>
  )
}

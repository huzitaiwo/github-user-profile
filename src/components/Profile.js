import { useState, useRef } from 'react'

// styles
import './Profile.css'

export default function Profile({ data }) {
  const [hover, setHover] = useState(false)
  const cardRef = useRef(null)

  const handleMouseEnter = (e) => {
    console.log(cardRef.current)
    if(cardRef.current == e.target) {
      setHover(true)
    }
  }

  if(data.length === 0) {
    console.log('no user')
    return <div className='error'>No user profile...</div> 
  }

  return (
    <div className='container profile'>
      {data.items.map(profile => (
        <div key={profile.id} className='card' onMouseEnter={handleMouseEnter} ref={cardRef}>
          {/* <img src={profile.avatar_url} alt="" /> */}
          <p><span className='label'>username:</span> {profile.login}</p>
          {hover && (
          <>
            <p><span className='label'>score:</span> {profile.score}</p>
            <p><span className='label'>profile type:</span> {profile.type}</p>
            <a className='link' href={profile.html_url}>View profile</a>
          </>
          )}
        </div>
      ))}
    </div>
  )
}

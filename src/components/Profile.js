// styles
import './Profile.css'

export default function Profile({ data }) {
  return (
    <div className='profile'>
      {data.items.map(profile => (
        <div 
          key={profile.id} 
          className='card' 
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          >
          {/* <img src={profile.avatar_url} alt="" /> */}
          <p>{profile.login}</p>
          {/* {hover && (
            <>
              <p>{profile.score}</p>
              <p>{profile.type}</p>
              <a href={profile.html_url}>View user profile</a>
            </>
          )} */}
        </div>
      ))}
    </div>
  )
}

import { useFetch } from '../../hooks/useFetch'

// styles
import './Profile.css'


export default function Profile() {
  const { data, error, isPending } = useFetch('https://api.github.com/search/users?q=lagos&page=1')

//   const profiles = data.items
//   console.log(data.items)
  

  return (
    <div className='profile'>
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading...</h2>}
      {data.items && data.items.map(profile => (
        <div key={profile.id} className='card'>
          <img src={profile.avatar_url} alt="" />
          <p>{profile.login}</p>
          <p>{profile.score}</p>
        </div>
      ))}
    </div>
  )
}

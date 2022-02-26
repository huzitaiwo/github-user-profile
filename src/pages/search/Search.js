import { useLocation } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Search.css'

// components
import Profile from '../../components/Profile'

export default function Search() {
  const queryString = useLocation().search
  const queryParams = new URLSearchParams(queryString)
  const query = queryParams.get('q')
  
  const url = `https://api.github.com/search/users?q=${query}&page=1`;
  const { error, isPending, data } = useFetch(url)

  return (
    <div>
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading...</h2>}
      {data && <Profile data={data} />}
    </div>
  )
}
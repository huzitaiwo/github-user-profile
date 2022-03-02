import { useState, useEffect, useCallback } from 'react';
// import { useFetch } from '../../hooks/useFetch'

// components
import Profile from '../../components/Profile'

// styles
import './Home.css'


export default function App() {
  // const { data, isPending, error } = useFetch('https://api.github.com/search/users?q=lagos&page=1')
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  const [users, setUsers] = useState([])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const url = `https://api.github.com/search/users?q=lagos&page=${page}`

  useEffect(() => {
    const getUser = async () => {

      setIsPending(true)

      try {
        const res = await fetch(url)

        if(!res.ok) {
          throw new Error(res.statusText)
        }

        const data = await res.json()
        console.log(data)

        setError(false)
        setIsPending(false)
        setUsers([...users, ...data.items])
        setTotalPages(Math.round(data.total_count / 30))
        console.log(totalPages, users)
      }
      catch(err) {
        setIsPending(false)
        console.log(err.message)
        setError(err.message)
      }
    }
    getUser()
  }, [url, page])

  
  return (
    <div className='container'>
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading...</h2>}
      {console.log(users)}
      {users && <Profile data={users} />}
    </div>
  );
}
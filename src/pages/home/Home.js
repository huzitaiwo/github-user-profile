import { useState, useEffect } from 'react';
// import { useFetch } from '../../hooks/useFetch'

// components
import Profile from '../../components/Profile'

// styles
import './Home.css'


export default function App() {
  // const { data, isPending, error } = useFetch('https://api.github.com/search/users?q=lagos&page=1')
  const [pages, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)

  const [users, setUsers] = useState([])
  const [isPending, setIsPending] = useState(false)
  const [error, setError] = useState(null)

  const url = `https://api.github.com/search/users?q=lagos&page=1`

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

        setUsers(data)
        setError(false)
        setIsPending(false)
      }
      catch(err) {
        setIsPending(false)
        console.log(err.message)
        setError(err.message)
      }
    }
    getUser()
  }, [])

  
  return (
    <div className='container'>
      {error && <h2>{error}</h2>}
      {isPending && <h2>Loading...</h2>}
      {/* {data && <Profile data={data} />} */}
    </div>
  );
}
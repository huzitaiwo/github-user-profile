import { useFetch } from '../../hooks/useFetch'

// component
import Post from '../../components/Post'

// styles
import './Home.css'

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:5000/posts')

  return (
    <div className="post">
      {data && <Post />}
    </div>
  )
}

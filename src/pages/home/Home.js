import { useFetch } from '../../hooks/useFetch'

// styles
import './Home.css'

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:5000/posts')
  
  return (
    <div className="post">
      {data && data.map(post => (
        <div key={post.id}>
          <small>{post.id}</small>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  )
}

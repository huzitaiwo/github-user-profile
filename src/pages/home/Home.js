import { useFetch } from '../../hooks/useFetch'

// styles
import './Home.css'

export default function Home() {
  const { data, isPending, error } = useFetch('http://localhost:5000/posts')
  console.log(data)

  const { id, title, body } = data;

  return (
    <div className="post">
      <small>{id}</small>
      <h1>{title}</h1>
      <p>{body}</p>
    </div>
  )
}

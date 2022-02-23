import { useParams } from 'react-router-dom'
import { useFetch } from '../../hooks/useFetch'

// styles
import './Recipe.css'

export default function Recipe() {
  const { id } = useParams()
  const url = 'http://localhost:4000/recipes/' + id

  const { data:recipe, isPending, error } = useFetch(url)

  return (
    <div>
      {error && <h3>{error}</h3>}
      {isPending && <h3>Loading...</h3>}
      {recipe && (
        <div className='card'>
          <h3>{recipe.title}</h3>
          <p>{recipe.cookingTime} to make.</p>
          <div>{recipe.method}</div>
          <p>{recipe.ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)}</p>
        </div>
      )}
    </div>
  )
}
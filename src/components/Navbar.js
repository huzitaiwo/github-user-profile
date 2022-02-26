// styles and images
import './Navbar.css'
import githubBrand from '../icons/github-brands.svg'

// components
import Searchbar from './Searchbar'


export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className="container">
        <div className="logo"><img src={githubBrand} alt="" /></div>
        <Searchbar />
      </div>
    </nav>
  )
}

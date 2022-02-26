// styles
import './Navbar.css'
import Searchbar from './Searchbar'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className="container">
        <div className="logo">Github user profiles</div>
        <Searchbar />
      </div>
    </nav>
  )
}

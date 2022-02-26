// styles
import './Navbar.css'

export default function Navbar() {
  return (
    <nav className='navbar'>
      <div className="container">
        <div className="logo">Github user profiles</div>
        <form>
            <label htmlFor="search">Search:</label>
            <input type="text" id="search" />
            <button>search</button>
        </form>
      </div>
    </nav>
  )
}

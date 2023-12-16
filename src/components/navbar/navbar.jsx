
import './navbar.css'
import { Link } from 'react-router-dom';

function Menu() {
  

    return (
      <>

<nav className="nav">
  <div className="container">
    <ul>
      <li><Link to="/" className="current">Home</Link></li>
      <li><Link to="/" className="menu">Desenhos</Link></li>
      <li><Link to="/" className="menu">Sobre</Link></li>
      <li><Link to="/" className="menu">Outros</Link></li>
    </ul>
  </div>
</nav>

      </>
    )
  }
  
  export default Menu
  
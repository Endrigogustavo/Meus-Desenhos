import Menu from './components/menu/menu.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Desenhos from './components/Desenhos/desenhos.jsx'
import Footer from './components/Footer/footer.jsx';
import { Routes, Route } from "react-router-dom";
import'./App.css'

function App() {
  

  return (
    <>
     <Navbar/>

     <Routes>
          <Route path="/" element={<Menu/>} />
        </Routes>
<br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer/>
    </>


  )
}

export default App

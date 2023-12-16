import Menu from './components/menu/menu.jsx'
import Navbar from './components/navbar/navbar.jsx'
import Antigo from './Banco/antigo.jsx';
import Footer from './components/Footer/footer.jsx';
import { Routes, Route } from "react-router-dom";
import'./App.css'

function App() {
  

  return (
    <>
     <Navbar/>

     <Routes>
          <Route path="/" element={<Menu/>} />
          <Route path="/desenhos-antigos" element={<Antigo/>} />
        </Routes>
<br /><br /><br /><br /><br /><br /><br /><br /><br />
      <Footer/>
    </>


  )
}

export default App

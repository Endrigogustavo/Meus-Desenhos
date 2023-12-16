import './menu.scss'
import'./button.scss'
import japan from './../../Img/ilustracao-japonesa-desenhada-a-mao-de-flores-de-cerejeira_23-2149601808-PhotoRoom 1.png'
import grup1 from './../../Img/Group 13885.png'
import japan2 from './../../Img/ilustracao-japonesa-desenhada-a-mao-de-petalas-de-cerejeira_23-2149601832-PhotoRoom 1.png'
import grup2 from './../../Img/Group 13883.png'
import japan3 from './../../Img/7691984-PhotoRoom 1.png'
import girl from './../../Img/286696717_131549379278777_4742352255574198065_n (1) (1) 1.png'
import grup3 from './../../Img/Group 13888.png'
import Body  from '../Cards/Card'
import Galery from '../Galery/galery'
import Sobre from '../Sobre/sobre'

import { Link } from 'react-router-dom';

const Menu = () => {
  

    return (
      <>

<div className="hero">
  
<div className="hero__bg">
    <picture>
    <img src={japan} className='japan parallax__layer__2'/>
                <img src={grup1} className='grup1 parallax__layer__3'/>
                <img src={japan2} className='japan2 parallax__layer__4'/>
                <img src={grup2} className='grup2 parallax__layer__5'/>
                <img src={japan3} className='japan3 parallax__layer__6'/>
                <img src={grup3} className='grup3 parallax__layer__6'/>
    </picture>
     

 
  
    <div className="grad"></div>
  </div>

  <div className="hero__cnt">
  <div className="container">
    <br />
    <br /><br />
    <h1>Desenhos</h1>
    <p className='p'>Meus principais desenhos</p>
  </div>
        <img src={girl} className="girl parallax__layer__1" alt="" />

  </div>
</div>

<div className="center-center">
 
  <Link className="btn-glitch-fill" to="/desenhos">
    <span className="text">/ Initialize</span><span className="text-decoration">_</span><span className="decoration">&rArr;</span>
    </Link>
</div>


<Body/>
<br /><br /><br /><br /><br />
<Sobre/>
<Galery/>

      </>
    )
  }
  
  export default Menu
  
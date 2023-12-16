
import './Card.scss'

import './respon.scss'
import GenshinCaracter from './Img/Genshin/furina_render_full_by_taemuepuan_dga7vtn-PhotoRoom.png-PhotoRoom (1).png'
import GenshinCard from './Img/Genshin/FfeceNZXkAE3BoW.jpeg'

import JujutsuCaracter from './Img/Jujutsu/Sukuna_29.webp'
import JujutsuLogo from './Img/Jujutsu/jujutsu_kaisen_hd_png_by_newjer53_dekiqwv.png'
import JujutsuCard from './Img/Jujutsu/jujutsu_kaisen__20__by_alluca_dfoqn93.jpg'

import ChainsawCaracter from './Img/Chainsaw/Makima_anime_design_2.webp'
import ChainsawLogo from './Img/Chainsaw/chainsaw_man_logo_white_by_stacalkas_dfmk15d.png'
import ChainsawCard from './Img/Chainsaw/CHelovek-Benzopila-luchshie-arty-i-oboi-na-telefon-noutbuk-15.jpg'

function Cards() {

  return (
    <>

    <center><h1>Principais</h1>
    <hr className="star-primary"></hr>

    <main className="page-content">
    <a href="#" alt="Mythrill" >
  <div className="card">
    <div className="wrapper">
      <img src={GenshinCard} className="cover-image" />
    </div>
   
    <img src={GenshinCaracter} className="character" />
  </div>
</a>

<a href="#" alt="Mythrill">
  <div className="card">
    <div className="wrapper">
      <img src={JujutsuCard} className="cover-image" />
    </div>
    <img src={JujutsuLogo} className="title" />
    <img src={JujutsuCaracter} className="character" />
  </div>
</a>

<a href="#" alt="Mythrill" >
  <div className="card">
    <div className="wrapper">
      <img src={ChainsawCard} className="cover-image" />
    </div>
    <img src={ChainsawLogo} className="title" />
    <img src={ChainsawCaracter} className="character" />
  </div>
</a>


</main>
</center>


    </>
  )
}

export default Cards
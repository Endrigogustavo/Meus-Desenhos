
import './galery.css'
import './respon.css'
function Galery() {

  return (
    <>
    <center><h1>Desenhos</h1>
    <hr className="star-primary"></hr>

    <div className="container22">
      <div className="box box-1" style={{ '--img': 'url(https://i.postimg.cc/hP6VNj1b/mikasa-by-sukiblog-d7x43zp.jpg)' }} data-text="Café"></div>
      <div className="box box-2" style={{ '--img': 'url(https://i.postimg.cc/wvPdTfLy/Ffr3-Pi-CX0-AA6te-B.jpg)' }} data-text="ArtBook"></div>
      <div className="box box-3" style={{ '--img': 'url(https://i.postimg.cc/90Jjg0RG/dc32e1c8020f06deddf8c92ba0505582.jpg)' }} data-text="Antigo"></div>
      <div className="box box-4" style={{ '--img': 'url(https://i.postimg.cc/rs8k9xmV/ee5a34ad66e2f85de7ca9762bb9cac66.jpg)' }} data-text="Kraft"></div>
      <div className="box box-5" style={{ '--img': 'url(https://i.postimg.cc/rmGTWQqZ/F-Hfz-Tp-Xo-AA5-T7h.jpg)' }} data-text="Normal"></div>
      <div className="box box-6" style={{ '--img': 'url(https://i.postimg.cc/fyj626hd/raiden-shogun-yae-miko-and-crystalfly-genshin-impact-drawn-by-hen-tie-sample-8a65780d7aba1d94d2dd.png)' }} data-text="Novos"></div>
    </div>
	</center>

    </>
  )
}

export default Galery
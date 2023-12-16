
import Records from "./Desenhos.json"

function Antigo() {
 
  return (
    <>
    <div className="app">
      <br />
      <div><strong>Json com react</strong></div>

      <div>
        {
          Records && Records.map( record => {
            return(

              <div key={ record.id }>
                { record.isVisible ? (
                                  <div className="main">
                                  {/* left */}
                                  <br />
                                  <div className="left">
                                   
                                  {record.id}
                                  <br />
                                  <img src={record.Icon} alt="100px" width="350px" />
                                  <br />

                                  {record.color}
                                  </div>
                                  {/* right */}     
                                  <br />          
                                  <div className="right">
                                  {
                                    record.anime && record.anime.map( anime =>{
                                      return(
                                        <ul key={record.id}>
                                          <li>Width: {anime.width}</li>
                                          
                                        </ul>
                                      )
                                    })
                                  }
                                  liked By:
                                  {
                                    record.likeBy && record.likeBy.map( (name, index) =>{
                                      return(
                                        <>
                                          {index ? ',' : ''} { name}
                                        </>
                                      )
                                    })
                                  }
                                  </div>
                                </div>
                ) : null}


              </div>
            )
          })
        }
      </div>
    </div>
    </>
  )
}

export default Antigo
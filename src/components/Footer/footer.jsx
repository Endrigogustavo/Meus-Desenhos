
import './footer.scss'; // Certifique-se de ter um arquivo CSS com este nome

function Footer() {
  return (
    <footer className="footer">
    <div className="container">
     <div className="row">
       <div className="footer-col">
         <h4>Fale Comigo</h4>
         <ul>
           <li><a href="#"></a></li>

         </ul>
       </div>
       <div className="footer-col">
         <h4>Outros</h4>
         <ul>
           <li><a href="#"></a></li>

         </ul>
       </div>
       <div className="footer-col">
         <h4>Github</h4>
         <ul>
           <li><a href="#"></a></li>

         </ul>
       </div>
       <div className="footer-col">
         <h4>Redes Sociais </h4>
         <div className="social-links">
           <a href="#"><i className="fab fa-facebook-f"></i></a>
           <a href="#"><i className="fab fa-twitter"></i></a>
           <a href="#"><i className="fab fa-instagram"></i></a>
           <a href="#"><i className="fab fa-linkedin-in"></i></a>
         </div>
       </div>
     </div>
    </div>
 </footer>

  );
}

export default Footer;

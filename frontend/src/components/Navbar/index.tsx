import { ReactComponent as Giticon} from '../../assets/img/github.svg';
import './styless.css';

function Navbar(){
  return(
    <header>
     <nav className='container'>
       <div className='dsmovie-nav-content'>
         <h1>DSMovie</h1>
         <a href="https://github.com/leonardoatolentino">
          <div className='dsmovie-contact-container'>
            <Giticon />
            <p className='dsmovie-contact-link'>/devsuperior</p>
          </div>

         </a>
      
       </div>
     </nav>
   </header>
  );
}

export default Navbar;
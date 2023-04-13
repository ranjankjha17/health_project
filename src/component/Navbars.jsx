import { GrLinkNext } from "react-icons/gr";
import "./styles/navbar.scss"
import { BsArrowRightShort } from "react-icons/bs";
const Navbars = () => {

  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand logo" href=" #">MedicalRecov</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse abcd" id="navbarNav">
      <ul className="navbar-nav mx-auto">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href=" #">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" #">Product</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" #">Pricing</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href=" #">Contact</a>
        </li>
      </ul>
      <ul className="navbar-nav ms-auto pr-10">
        <li className="nav-item">
          <a className="nav-link h6" href=" #" style={{color:"#FF685B"}}>Login</a>
        </li>
        <li className="nav-item">
          <a className="nav_button" href=" #" style={{color:"#ffffff"}}>
            Join Us
            <BsArrowRightShort style={{marginLeft:"1rem"}}/>
          </a>
        </li>
        
      </ul>

    </div>
  </div>
</nav>

    </div>
  );
};

export default Navbars;
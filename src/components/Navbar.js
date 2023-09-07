import React from 'react'

const Navbar = () => (

    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <div className='container'>

  <a className="navbar-brand text-light" href="#">RKT</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav ms-auto">
      <li className="nav-item active">
        <a className="nav-link text-light" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Services</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">How work</a>
      </li>
      <li className="nav-item">
        <a className="nav-link text-light" href="#">Contacts</a>
      </li>
      
    </ul>
  </div>
 </div>
</nav>
  
)

export default Navbar
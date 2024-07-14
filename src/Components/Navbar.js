import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

export default function Navbar(props) {

 

  return (
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      {/* // <nav className="navbar navbar-expand-lg bg-body-tertiary data-bs-theme="dark"> */}
 

    <div className="container-fluid">
      <Link className="navbar-brand" to="/">{props.title}</Link>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item">
            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/about">{props.about}</Link>
          </li>
        </ul>
        {/* <form className="d-flex" role="search">
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form> */}

{/* <div className="dropdown" data-bs-theme="dark">
  <button className="btn btn-secondary dropdown-toggle mx-3" type="button" id="dropdownMenuButtonDark" data-bs-toggle="dropdown" aria-expanded="false">
    Choose Color
  </button>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButtonDark">
    <li><a className="dropdown-item" href="/">Action</a></li>
    <li><a className="dropdown-item" href="/">Another action</a></li>
    <li><a className="dropdown-item" href="/">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="/">Separated link</a></li>
  </ul>
</div> */}

{/* <input type="color" name="red" id="red" /> */}

        <div className={`form-check form-switch text-${props.mode === 'light'?'dark':'light'}`}>
          <input className="form-check-input" onClick={props.toggelMode} type="checkbox" role="switch" id="flexSwitchCheckDefault"/>
          <label className="form-check-label" htmlFor="flexSwitchCheckDefault">{`${props.mode === 'light'?'Enable DarkMode':'Enable LightMode'}`}</label>
        </div>
      </div>
    </div>
  </nav>
  )
}

Navbar.propTypes={
    title:PropTypes.string.isRequired,
    about:PropTypes.string,
}

Navbar.defaultProps= {
    title:"set the title",
}
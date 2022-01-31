import React from 'react';
import "../styles/Navbar.css"
function Navbar() {
    return (
        <div className='navi'>
            <div className="main center">
                <nav className="navbar navbar-expand-sm navbar-light ">
                    <div className=" container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className=" navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item  me-auto">
                                    <a className="nav-link active" aria-current="page" href="/">About</a>
                                </li>
                                <li className="nav-item dropdown  me-auto">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Workshops
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item dropdown  me-auto">
                                    <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        Programs
                                    </a>
                                    <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                        <li><a className="dropdown-item" href="/">Action</a></li>
                                    </ul>
                                </li>
                                <li className="nav-item  me-auto">
                                    <a className="nav-link active" aria-current="page" href="/">Community</a>
                                </li>
                                <li className="nav-item  me-auto">
                                    <a className="nav-link active" aria-current="page" href="/">Login</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
            <button type="button" className=" navbarbutton d-flex btn btn-primary">Apply as Mentor</button>

        </div>
    )
}

export default Navbar;

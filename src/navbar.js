import React from "react";


export default function NavBar(props) {

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-2">
            <a className="navbar-brand" href="/">CyberSig</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" 
                            role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Tools
                        </a>
                        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a className="dropdown-item" href="/templates">Templates</a>
                            <a className="dropdown-item" href="/exec">Execute contract action</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="/create_key">Create key</a>
                            <a className="dropdown-item" href="/associate">Associate key</a>
                        </div>
                    </li>
                </ul>
            </div>
            </nav>
    );
}
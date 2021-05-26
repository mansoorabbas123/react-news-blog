

function Navbar() {
    return (
        <div className="container-fluid main-header">
            <div className="row">
                <div className="col-md-10 mx-auto" >
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                        <div className="container-fluid nav-bg-color" >
                            <a className="navbar-brand" href="#">Logo</a>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#">INTERNATION</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">TECHNOLOGY</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">SPORTS</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
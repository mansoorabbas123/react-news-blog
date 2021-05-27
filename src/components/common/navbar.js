import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className="container-fluid main-header">
            <div className="row">
                <div className="col-md-10 mx-auto" >
                    <nav className="navbar navbar-expand-lg navbar-light bg-light" >
                        <div className="container-fluid nav-bg-color" >
                            <Link className="navbar-brand" to="/">Logo</Link>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav">
                                <ul className="navbar-nav" style={{ marginLeft: "auto" }}>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="general">GENERAL</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/sports">SPORTS</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/technology">TECHNOLOGY</Link>
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
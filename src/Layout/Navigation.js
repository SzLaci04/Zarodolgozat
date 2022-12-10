import { Link } from "react-router-dom";
function Navigation()
{
    return(
        <header>
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <Link className="navbar-brand" to="/Zarodolgozat">Bemutatkozas</Link>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link className="nav-link" to="/kepesrendeles">Képes rendelés</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/szovegesrendeles">Szöveges rendelés</Link>
                        </li>
                        </ul>
                </div>
            </nav>
        </header>
    );
}
export default Navigation;
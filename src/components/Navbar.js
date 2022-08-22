import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-5">
      <div className="container">
        <Link className="navbar-brand" to="/">
          Home
        </Link>
        
          <ul className="navbar-nav  mb-lg-2">
            <li className="nav-item mt-1">
              <Link className="btn btn-primary btn-sm" to="/add">
                Add
              </Link>
            </li>
          </ul>
        
      </div>
    </nav>
  );
};

export default Navbar;
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="nav">
      <h1 className="nav__h1">Blogo</h1>
      <div className="nav__links">
        <Link className="nav__link" to="/">
          Home
        </Link>
        <Link className="nav__link" to="/create">
          Create
        </Link>
      </div>
    </div>
  );
}

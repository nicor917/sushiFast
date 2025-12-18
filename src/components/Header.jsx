import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="navbar navbar-dark navbar-expand w-100 custom-bg">
      <div className="px-4 d-flex w-100 align-items-center justify-content-between">
        <Link to="/" className="navbar-brand">
          <span className="brand-emoji">🍣</span> SushiFast
        </Link>

        <div className="navbar-nav">
          <Link to="/" className="nav-link">Menus</Link>
          <Link to="/saveurs-filtre" className="nav-link">Saveurs</Link>
          <Link to="/sans-california" className="nav-link">Sans California</Link>
        </div>
      </div>
    </nav>
  );
}

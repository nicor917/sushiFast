import { Link } from "react-router-dom";

export default function MenuCard({ menu }) {
  return (
    <div className="card shadow h-100 menu-card-wrapper">
      <div className="img-wrapper">
        <img src={menu.image} className="card-img-top menu-card-img" alt={menu.nom} />
      </div>
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{menu.nom}</h5>
        <p className="card-text">
          <span className="pieces-badge">{menu.pieces} pièces</span>
          <span className="price-display">{menu.prix}€</span>
        </p>
        <Link 
          to={`/details/${menu.id}`} 
          className="btn btn-bg mt-auto"
        >
          Voir détails
        </Link>
      </div>
    </div>
  );
}

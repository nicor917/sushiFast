import { useParams, Link } from "react-router-dom";
import data from "../data/boxes.json";

export default function MenuDetails() {
  const { id } = useParams();
  const menu = data.find(m => m.id === Number(id));

  return (
    <div className="page-wrapper menu-details-page">
      <Link to="/" className="btn btn-outline-dark mb-4">
        ← Retour aux menus
      </Link>
      
      <div className="details-card">
        <h2>{menu.nom}</h2>
        <div className="details-info">
          <p><strong>Prix :</strong> <span className="price-display">{menu.prix}€</span></p>
          <p><strong>Pièces :</strong> <span className="pieces-badge">{menu.pieces}</span></p>
        </div>

        <h4>Aliments</h4>
        <ul className="list-group">
          {menu.aliments.map((a, i) => (
            <li key={i} className="list-group-item">
              <span className="aliment-name">{a.nom}</span>
              <span className="aliment-qty">× {a.quantite}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

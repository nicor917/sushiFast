import data from "../data/boxes.json";

export default function PrixExtremes() {
  const sorted = [...data].sort((a, b) => a.prix - b.prix);
  const moinsCher = sorted[0];
  const plusCher = sorted[sorted.length - 1];

  return (
    <div className="page-wrapper">
      <h2>Menus extrêmes</h2>

      <div className="alert alert-success">
        <div className="extreme-card-content">
          <span className="extreme-label">💰 Moins cher</span>
          <strong>{moinsCher.nom}</strong>
          <span className="extreme-details">{moinsCher.prix}€ — {moinsCher.pieces} pièces</span>
        </div>
      </div>

      <div className="alert alert-danger">
        <div className="extreme-card-content">
          <span className="extreme-label">👑 Plus cher</span>
          <strong>{plusCher.nom}</strong>
          <span className="extreme-details">{plusCher.prix}€ — {plusCher.pieces} pièces</span>
        </div>
      </div>
    </div>
  );
}

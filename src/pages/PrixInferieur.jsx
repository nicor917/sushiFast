import data from "../data/boxes.json";

export default function PrixInferieur() {
  const filtered = data.filter(m => m.pieces < 13);
  const total = filtered.reduce((acc, m) => acc + m.prix, 0);

  return (
    <div className="page-wrapper">
      <h2>Prix total pour les menus &lt; 13 pièces</h2>

      <ul className="list-group mb-3">
        {filtered.map((m, i) => (
          <li key={i} className="list-group-item d-flex justify-content-between align-items-center">
            <span>{m.nom}</span>
            <span className="price-display">{m.prix}€</span>
          </li>
        ))}
      </ul>

      <div className="total-card">
        <h4>Total : <span className="total-amount">{total.toFixed(2)} €</span></h4>
      </div>
    </div>
  );
}

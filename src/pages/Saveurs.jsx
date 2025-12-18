import { useParams } from "react-router-dom";
import data from "../data/boxes.json";

export default function Saveurs() {
  const { id } = useParams();
  const menu = data.find(m => m.id === Number(id));

  return (
    <div className="page-wrapper">
      <h2>Saveurs du menu : {menu.nom}</h2>
      <ul className="list-group saveurs-list">
        {menu.saveurs.map((s, i) => (
          <li key={i} className="list-group-item">
            <span className="saveur-icon">🍃</span> {s}
          </li>
        ))}
      </ul>
    </div>
  );
}

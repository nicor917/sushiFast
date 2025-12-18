import { useState } from "react";
import data from "../data/boxes.json";
import MenuCard from "../components/MenuCard";

export default function Home() {
  const [filtre, setFiltre] = useState("Tous");

  const saveurs = Array.from(new Set(data.flatMap(m => m.saveurs)));

  const menusFiltres =
    filtre === "Tous"
      ? data
      : data.filter(menu => menu.saveurs.includes(filtre));

  return (
    <div className="mt-3 page-wrapper">
      <h2 className="mb-4">Tous les menus</h2>

      <div className="d-flex gap-2 mb-4 flex-wrap filter-container">
        <button
          className={`btn ${filtre === "Tous" ? "btn-dark" : "btn-outline-dark"}`}
          onClick={() => setFiltre("Tous")}
        >
          Tous
        </button>

        {saveurs.map((s, i) => (
          <button
            key={i}
            className={`btn ${filtre === s ? "btn-dark" : "btn-outline-dark"}`}
            onClick={() => setFiltre(s)}
          >
            {s}
          </button>
        ))}
      </div>

      <div className="row">
        {menusFiltres.map(menu => (
          <div className="col-lg-4 col-md-6 mb-4" key={menu.id}>
            <MenuCard menu={menu} />
          </div>
        ))}
      </div>
    </div>
  );
}

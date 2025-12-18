import data from "../data/boxes.json";
import MenuCard from "../components/MenuCard";

export default function FiltreAliments() {
  const result = data.filter(m => m.nom !== "California Saumon Avocat");

  return (
    <div className="page-wrapper">
      <h2>Menus sans "California Saumon Avocat"</h2>
      <div className="row">
        {result.map(menu => (
          <div className="col-lg-4 col-md-6 mb-4" key={menu.id}>
            <MenuCard menu={menu} />
          </div>
        ))}
      </div>
    </div>
  );
}

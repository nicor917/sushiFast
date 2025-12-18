import data from "../data/boxes.json";
import MenuCard from "../components/MenuCard";

export default function FiltreSaveurs() {
  const result = data.filter(
    m => m.saveurs.includes("avocat") || m.saveurs.includes("coriandre")
  );

  return (
    <div className="page-wrapper">
      <h2 className="mb-4">Menus contenant avocat ou coriandre</h2>
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

import SectionTitle from "../../../componentes/SectionTitle";
import MenuItem from "../shared/MenuItem";
import useMenu from "../../../hooks/useMenue";

export default function PopulerManue() {
  const [menu] = useMenu();
  const popular = menu.filter((item) => item.category === "popular");
  return (
    <section className="mb-12">
      <SectionTitle
        heading={"---Check it out--"}
        subHeading={"FROM OUR MENU"}
      ></SectionTitle>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {popular.map((item) => (
          <MenuItem key={item._id} item={item}></MenuItem>
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-outline border-0 border-b-4 mt-4">
          View Full
        </button>
      </div>
    </section>
  );
}

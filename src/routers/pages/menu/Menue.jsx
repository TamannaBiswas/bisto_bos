import { Helmet } from "react-helmet-async";
import Cover from "../shared/Cover";

import munuImg from "../../../assets/menu/dessert-bg.jpeg";
import coffered from "../../../assets/menu/dessert-bg.jpeg";
import dessertImg from "../../../assets/menu/dessert-bg.jpeg";
import pizzaImg from "../../../assets/menu/pizza-bg.jpg";
import saladImg from "../../../assets/menu/salad-bg.jpg";
import supImg from "../../../assets/menu/soup-bg.jpg";
import useMenu from "../../../hooks/useMenue";
import SectionTitle from "../../../componentes/SectionTitle";
import MenuCatagory from "./MenuCatagory";

export default function Menue() {
  const [menu] = useMenu();
  const dessert = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Bistro boss| Menu</title>
      </Helmet>
      <Cover img={munuImg} title="OUR MENU"></Cover>
      {/* main cover */}
      <SectionTitle
        subHeading="---Don't miss--"
        heading="TODAY'S OFFER"
      ></SectionTitle>
      {/* offered menu items */}
      <MenuCatagory
        items={offered}
        title={"offered"}
        img={coffered}
      ></MenuCatagory>
      {/* dessert menu item */}
      <MenuCatagory
        items={dessert}
        title="Dessert"
        img={dessertImg}
      ></MenuCatagory>
      <MenuCatagory items={pizza} title={"pizza"} img={pizzaImg}></MenuCatagory>

      <MenuCatagory items={salad} title={"salad"} img={saladImg}></MenuCatagory>
      <MenuCatagory items={soup} title={"spup"} img={supImg}></MenuCatagory>
    </div>
  );
}

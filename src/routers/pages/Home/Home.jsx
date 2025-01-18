import { Helmet } from "react-helmet-async";
import BostroBoss from "../../../componentes/BostroBoss";
import Banner from "./Banner";
import Catagory from "./Catagory";
import Featread from "./Featread";
import PopulerManue from "./PopulerManue";
import Testimenias from "./Testimenias";

export default function Home() {
  return (
    <div>
      <Helmet>
        <title>Bistro boss| Home</title>
      </Helmet>
      <Banner></Banner>
      <Catagory></Catagory>
      <BostroBoss></BostroBoss>
      <PopulerManue></PopulerManue>
      <Featread></Featread>
      <Testimenias></Testimenias>
    </div>
  );
}

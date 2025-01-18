import SectionTitle from "../../../componentes/SectionTitle";
import featuredImg from "../../../assets/home/featured.jpg";
import "./Featread.css";

export default function Featread() {
  return (
    <div className="featured-item bg-fixed pt-8 my-20">
      <SectionTitle
        subHeading="-- Check it out ---"
        heading="FROM OUR MENU"
      ></SectionTitle>
      <div className="md:flex justify-center items-center bg-slate-500 bg-opacity-60 py-20 px-36 pt-12 gap-8">
        <div className="">
          <img src={featuredImg} alt="" />
        </div>
        <div className="md:ml-10">
          <p>Aug 20, 2029</p>
          <p className="uppercase">WHERE CAN I GET SOME?</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
            voluptate facere, deserunt dolores maiores quod nobis quas quasi.
            Eaque repellat recusandae ad laudantium tempore consequatur
            consequuntur omnis ullam maxime tenetur.
          </p>
          <button className="btn btn-outline border-0 border-b-4">
            order Now
          </button>
        </div>
      </div>
    </div>
  );
}

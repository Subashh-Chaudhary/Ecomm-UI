import { Carousel } from "flowbite-react";
import { SingleSlider } from "./__contracts/slider.contract";
import { NavLink } from "react-router-dom";

const SliderComponent = ({data}: {data:Array<SingleSlider>}) => {
  return (
    <>
      <Carousel className="h-36 lg:h-60 xl:h-80 2xl:h-[500px]" pauseOnHover>
          {
                    data && data.map((row: SingleSlider, i:number)=>(
                             row.link ? <NavLink key={i} to={row.link}><img src={row.image} alt={row.title} /></NavLink>:  <img src={row.image} alt={row.title} />
                    ))
          }
      </Carousel>
    </>
  );
};

export default SliderComponent;

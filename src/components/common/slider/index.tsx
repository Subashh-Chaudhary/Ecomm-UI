import { Carousel } from "flowbite-react";
import { SingleSlider } from "./__contracts/slider.contract";

const SliderComponent = ({data}: {data:Array<SingleSlider>}) => {
  return (
    <>
      <Carousel className="h-36 lg:h-60 xl:h-80 2xl:h-[500px]" pauseOnHover>
          {
                    data && data.map((row: SingleSlider, i:number)=>(
                             row.link ? <a key={i} href={row.link}><img src={row.image} alt={row.title} /></a>:  <img src={row.image} alt={row.title} />
                    ))
          }
      </Carousel>
    </>
  );
};

export default SliderComponent;

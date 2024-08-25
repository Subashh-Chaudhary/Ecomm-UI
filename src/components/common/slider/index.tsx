import { Carousel } from "flowbite-react";
import { SingleSlider } from "./__contracts/slider.contract";

const SliderComponent = ({data}: {data:Array<SingleSlider>}) => {
  return (
    <>
      <Carousel pauseOnHover>
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

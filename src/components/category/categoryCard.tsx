import { Card } from "flowbite-react";
import { SingleSlider } from "../common/slider/__contracts/slider.contract";

export const CategoryCard = ({ data }: { data: Array<SingleSlider> }) => {
  return (
    <>
      {data &&
        data.map((row: SingleSlider, i: number) =>
          row.link ? (
            <a key={i} href={row.link}>
              <Card
                className="w-32 lg:w-48 h-44 lg:h-64 cursor-pointer hover:shadow-2xl"
                renderImage={() => (
                  <img
                    className="w-[140px] h-[140px] lg:w-[500px] lg-h-[500px]"
                    src={row.image}
                    alt={row.title}
                  />
                )}
              >
                <h5 className="text-[12px] lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  {row.title}
                </h5>
              </Card>
            </a>
          ) : (
                    <Card
                    key={i}
                    className="w-32 lg:w-48 h-44 lg:h-64 cursor-pointer hover:shadow-2xl"
                    renderImage={() => (
                      <img
                      className="w-[140px] h-[140px] lg:w-[500px] lg-h-[500px]"
                        src={row.image}
                        alt={row.title}
                      />
                    )}
                  >
                    <h5 className="text-[12px] lg:text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                      {row.title}
                    </h5>
                  </Card>
          )
        )}
    </>
  );
};

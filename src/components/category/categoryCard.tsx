import { Card } from "flowbite-react";
import { SingleSlider } from "../common/slider/__contracts/slider.contract";

export const CategoryCard = ({ data }: { data: Array<SingleSlider> }) => {
  // Limit the data to the first 6 categories
  const limitedData = data.slice(0, 6);

  return (
    <div className="grid grid-cols-3 gap-2 md:gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {limitedData.map((row: SingleSlider, i: number) =>
        row.link ? (
          <a key={i} href={row.link} className="transition-transform transform hover:translate-y-[-5px]">
            <Card className="w-full h-full cursor-pointer hover:shadow-2xl transition-shadow duration-300 ease-in-out">
              <div className="relative w-full aspect-w-1 aspect-h-1 overflow-hidden">
                <img
                  className="object-cover w-full h-full"
                  src={row.image}
                  alt={row.title}
                />
              </div>
              <div className="md:px-4">
                <h5 className="text-sm lg:text-base font-bold tracking-tight text-gray-900 dark:text-white">
                  {row.title}
                </h5>
              </div>
            </Card>
          </a>
        ) : (
          <Card
            key={i}
            className="w-full h-full cursor-pointer hover:shadow-2xl transition-transform transform hover:translate-y-[-5px]"
          >
            <div className="relative w-full overflow-hidden">
              <img
                className="object-cover w-full h-full"
                src={row.image}
                alt={row.title}
              />
            </div>
            <div className="md:px-4">
              <h5 className="text-sm lg:text-base font-bold tracking-tight text-gray-900 dark:text-white">
                {row.title}
              </h5>
            </div>
          </Card>
        )
      )}
    </div>
  );
};

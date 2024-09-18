import { NavLink } from "react-router-dom";

interface HomeTitleProps{
  title: string,
  url?: string,
}

const HomeTitle = ({title, url}:HomeTitleProps) => {
  return (
    <>
      <div className="flex justify-between mt-2 lg:mt-7 mx-2 lg:mx-28 border-b-2 border-teal-900/30 border-solid pb-2">
        <h3 className="text-xl lg:text-2xl font-bold text-teal-700 ">
          {title}
        </h3>
        <p className="px-1 lg:px-5 py-1 lg:py-2 text-sm lg:text-md bg-primary text-white rounded-lg font-bold cursor-pointer hover:text-white hover:bg-slate-700">
          <NavLink
          to={url || "#"}>
            View All
          </NavLink>
          
        </p>
      </div>
    </>
  );
};

export default HomeTitle;

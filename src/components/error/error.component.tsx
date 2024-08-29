import { NavLink } from "react-router-dom";

const ErrorComponent = () => {
  return (
    <div className="mt-12 mb-12 flex items-center gap-3 flex-col">
      <div className="w-[350px]">
        <img
          src="https://gw.alicdn.com/imgextra/i3/O1CN012f276t1zJuDINv48i_!!6000000006694-2-tps-600-600.png"
          alt="error png"
        />
      </div>

      <div
        className="text-2xl font-semibold text-slate-900"
        data-spm-anchor-id="a2o42.10714168.0.i0.df791f1dydnpJK"
      >
        We’re Sorry, an error has occurred
      </div>
      <div className="text-gray-700 -mt-3">
        We seem to have lost this page but we don’t want to lose you.
      </div>
      <div className= "mt-2">
        <NavLink className="border text-lg text-orange-600 border-orange-600 px-6 py-2 rounded" to="/">
          BACK TO HOMEPAGE
        </NavLink>
      </div>
    </div>
  );
};

export default ErrorComponent;

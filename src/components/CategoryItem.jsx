import { NavLink } from "react-router-dom";

export default function CategoryItem({height, image, link, name}) {
    return (
        <div className={`w-full ${height} mb-8 rounded-md bg-cover bg-no-repeat bg-center flex items-end justify-center zoom-background`} style={{ backgroundImage: `url(${image})` }}>
            <NavLink to={link}
                className=' flex px-8 py-4 bg-slate-300 h-12 w-48 mb-8 justify-center items-center hover:bg-red-700 hover:text-white transition duration-300'>
            {name}
          </NavLink>
        </div>
    );
};
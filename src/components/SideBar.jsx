import { NavLink } from "react-router-dom";

export default function SideBar() {
    return (
        <div className="bg-slate-200 flex flex-col w-full sm:w-3/12 h-auto pt-4 pl-5">
          <div className="flex flex-col mb-5">
            <h3 className="text-2xl font-bold">Genres</h3>
            <ul className="mt-3 ml-4">
              <NavLink to="/sales">
                <li className="mb-1">All</li>
              </NavLink>
              <NavLink to="/sales/Men">
                <li className="mb-1">Men</li>
              </NavLink>
              <NavLink to="/sales/Women">
                <li className="mb-1">Women</li>
              </NavLink>
              <NavLink to="/sales/Kids">
                <li className="mb-1">Kids</li>
              </NavLink>
              <NavLink to="/sales/accessories">
                <li className="mb-1">Accesories</li>
              </NavLink>
            </ul>
          </div>
          <div className="flex flex-col mb-5">
            <h3 className="text-2xl font-bold">Category</h3>
            <ul className="mt-3 ml-4">
              <NavLink to="/sales/shirts">
                <li className="mb-1">Shirts</li>
              </NavLink>
              <NavLink to="/sales/pants">
                <li className="mb-1">Pants</li>
              </NavLink>
              <NavLink to="/sales/shoes">
                <li className="mb-1">Shoes</li>
              </NavLink>
              <NavLink to="/sales/suit">
                <li className="mb-1">Suits</li>
              </NavLink>
              <NavLink to="/sales/tee">
                <li className="mb-1">Tees</li>
            </NavLink>
            <NavLink to="/sales/others">
                <li className="mb-1">Others</li>
              </NavLink>
            </ul>
          </div>
          <div className="flex flex-col mb-5">
            <h3 className="text-2xl font-bold">Brands</h3>
            <ul className="mt-3 ml-4">
              <NavLink to="/sales/Outfitters">
                <li className="mb-1">Outfitters</li>
              </NavLink>
              <NavLink to="/sales/Monark">
                <li className="mb-1">Monark</li>
              </NavLink>
              <NavLink to="/sales/Breakout">
                <li className="mb-1">Breakout</li>
              </NavLink>
              <NavLink to="/sales/Diners">
                <li className="mb-1">Diners</li>
              </NavLink>
              <NavLink to="/sales/Alkaram">
                <li className="mb-1">Alkaram</li>
              </NavLink>
              <NavLink to="/sales/Sana Safinaz">
                <li className="mb-1">Sana Safinaz</li>
              </NavLink>
              <NavLink to="/sales/Service">
                <li className="mb-1">Service</li>
              </NavLink>
            </ul>
          </div>
          <div className="flex mb-5">
            <form action="/login" class="max-w-sm">
              <label for="simple-search" class="sr-only">
                Search
              </label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
                    />
                  </svg>
                </div>
                <input
                  type="text"
                  id="simple-search"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
                  placeholder="Search Item..."
                  required
                />
              </div>
            </form>
          </div>
        </div>
    );
};
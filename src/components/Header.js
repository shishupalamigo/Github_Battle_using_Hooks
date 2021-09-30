import { NavLink } from 'react-router-dom';

function Header(props) {
  return (
      <header className="flex justify-between p-5">
        <nav className="flex">
          <NavLink
            exact
            activeClassName={
              props.darkMode
                ? 'text-red-700 bg-gray-700 px-3 py-2 rounded mr-5'
                : 'text-red-600 bg-green-600 px-3 py-2 rounded mr-5'
            }
            className={
              props.darkMode
                ? 'bg-gray-700 text-white px-3 py-2 rounded mr-5'
                : 'bg-green-600 text-white px-3 py-2 rounded mr-5'
            }
            to="/"
          >
            <button className="text-2xl font-bold">Popular</button>
          </NavLink>
          <NavLink
            exact
            activeClassName={
              props.darkMode
                ? 'text-red-900 bg-gray-700 px-3 py-2 rounded mr-5'
                : 'text-red-600 bg-green-600 px-3 py-2 rounded mr-5'
            }
            className={
              props.darkMode
                ? 'bg-gray-700 text-white px-3 py-2 rounded mr-5'
                : 'bg-green-600 text-white px-3 py-2 rounded mr-5'
            }
            to="/battle"
          >
            <button className="text-2xl font-bold">Battle</button>
          </NavLink>
        </nav>
        <button
          className={
            props.darkMode
              ? 'px-3 py-2 bg-gray-700 rounded'
              : 'px-3 py-2 bg-gray-200 rounded'
          }
          onClick={props.toggleDarkMode}
        >
          <i
            className={
              props.darkMode
                ? 'fas fa-sun text-2xl text-yellow-400'
                : 'fas fa-moon text-2xl text-yellow-400'
            }
          ></i>
        </button>
      </header>
  );
}
export default Header;

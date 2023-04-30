import { Link } from "react-router-dom";

const Header: React.FC = () => {


    return (
        <nav className="py-2 px-4 md:px-8 w-full bg-gray-800 dark:bg-gray-900 transition-colors duration-500 ease-out">
            <div className="flex justify-between items-center">
                <div className="flex items-center flex-shrink-0 text-gray-800 mr-1"> <Link to="/" >
                    <img
                        className="h-14"
                        src="http://stur-exchange.co.uk/theme-content/uploads/2021/07/Box-office-logo.png"
                        alt="logo"
                    />
                </Link></div>
                <span className="block text-sm px-4 py-2 rounded text-white ml-2 font-bold hover:text-white mt-4 hover:bg-gray-700 lg:mt-0">
                    <Link
                        to="/favorites"

                        style={{ textDecoration: "none" }}
                    >
                        My Favorites Movie
                    </Link>
                </span>
            </div>
        </nav>

    );
};

export default Header;
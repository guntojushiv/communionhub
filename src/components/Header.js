import { Link } from "react-router-dom";
import { Users } from "lucide-react";

const Header = () => {
  return (
    <header className="bg-blue-600 p-4 text-white shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <Users className="w-10 h-10 mr-3" />
          <h1 className="text-2xl font-bold">CommunionHub</h1>
        </div>
        <nav>
          <Link to="/" className="mx-2 hover:underline">
            Home
          </Link>
          <Link to="/events" className="mx-2 hover:underline">
            Events
          </Link>
          <Link to="/about" className="mx-2 hover:underline">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;

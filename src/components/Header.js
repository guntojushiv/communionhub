import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">CommunionHub</h1>
        <nav>
          <Link to="/" className="mx-4 hover:text-yellow-300">Home</Link>
          <Link to="/events" className="mx-4 hover:text-yellow-300">Events</Link>
          <Link to="/about" className="mx-4 hover:text-yellow-300">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
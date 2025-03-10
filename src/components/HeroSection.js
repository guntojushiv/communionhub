import { Link } from 'react-router-dom';

const HeroSection = () => {
  return (
    <section className="text-center p-16 bg-gradient-to-r from-purple-200 to-blue-200">
      <h2 className="text-5xl font-bold text-gray-800">Connecting People Across Faiths & Interests</h2>
      <p className="mt-4 text-lg text-gray-600">Join events, connect with people, and build a stronger community.</p>
      <Link to="/events">
        <button className="mt-6 px-6 py-3 bg-yellow-400 text-black rounded-full hover:bg-yellow-300 transition">
          Explore Events
        </button>
      </Link>
    </section>
  );
};

export default HeroSection;
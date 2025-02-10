import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold">Welcome to Our Website</h1>
      <nav className="mt-6 space-x-4">
        <Link to="/about" className="px-4 py-2 bg-blue-500 text-white rounded">About</Link>
      </nav>
    </div>
  );
}

export default Home;

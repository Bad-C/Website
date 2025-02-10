import { Link } from "react-router-dom";

function About() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold">About Us</h1>
      <p className="mt-4 max-w-xl text-center">We are dedicated to providing the best services to our customers.</p>
      <Link to="/" className="mt-4 px-4 py-2 bg-blue-500 text-white rounded">Back to Home</Link>
    </div>
  );
}

export default About;

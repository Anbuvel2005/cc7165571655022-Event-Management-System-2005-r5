import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import AddEvent from "./pages/AddEvent";
import EditEvent from "./components/EditEvent";

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gray-50">
        {/* Modern Navbar */}
        <nav className="w-full bg-white/60 backdrop-blur-md shadow-md border-b border-white/30">
          <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
            {/* Logo/Title */}
            <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight">
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Event Management System
              </span>
            </h1>

            {/* Links */}
            <div className="space-x-6 text-lg font-medium">
              <Link
                to="/"
                className="text-gray-700 hover:text-blue-600 transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-blue-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                to="/add"
                className="text-gray-700 hover:text-purple-600 transition-colors relative group"
              >
                Add Event
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <main className="flex-1 flex justify-center items-start">
          <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg p-8 mt-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/add" element={<AddEvent />} />
              <Route path="/edit/:id" element={<EditEvent />} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;

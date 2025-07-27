import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";
import { PlusCircle, CalendarX } from "lucide-react";
import { Link } from "react-router-dom";

function Home() {
  const [Events, setEvents] = useState([]);

  useEffect(() => {
    const stored = JSON.parse(localStorage.getItem("Events")) || [];
    setEvents(stored);
  }, []);

  const handleDelete = (id) => {
    const updated = Events.filter((s) => s.id !== id);
    localStorage.setItem("Events", JSON.stringify(updated));
    setEvents(updated);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-sky-100 via-white to-purple-100 p-6 relative overflow-hidden">
      {/* Subtle Background Circles */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-blue-300 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-purple-300 rounded-full opacity-20 blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="flex items-center justify-between mb-10 bg-white/40 backdrop-blur-lg p-5 rounded-2xl shadow-xl border border-white/20">
          <h1 className="text-4xl font-extrabold text-gray-800 tracking-tight drop-shadow-sm">
            🎉 My Event Dashboard
          </h1>
          <Link
            to="/add"
            className="flex items-center gap-2 bg-gradient-to-r from-blue-500 to-blue-700 hover:from-blue-600 hover:to-blue-800 text-white px-5 py-2.5 rounded-xl shadow-lg transition-all duration-300 hover:scale-110"
          >
            <PlusCircle size={22} />
            <span className="font-semibold">Add Event</span>
          </Link>
        </div>

        {/* Events Section */}
        {Events.length === 0 ? (
          <div className="text-center mt-24 text-gray-600 animate-fadeIn">
            <CalendarX size={60} className="mx-auto mb-4 text-gray-400" />
            <p className="text-2xl font-semibold">No events yet.</p>
            <p className="text-sm mt-2 text-gray-500">
              Start organizing by clicking{" "}
              <span className="font-bold">"Add Event"</span>.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 animate-fadeIn">
            {Events.map((event) => (
              <div
                key={event.id}
                className="transition-transform transform hover:scale-105 hover:-translate-y-1"
              >
                <EventCard Event={event} onDelete={handleDelete} />
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;

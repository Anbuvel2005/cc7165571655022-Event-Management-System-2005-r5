import { useNavigate } from "react-router-dom";
import { Pencil, Trash2 } from "lucide-react"; // optional icon library

function EventCard({ Event, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-2xl shadow-md hover:shadow-lg transition duration-300 p-6 transform hover:-translate-y-1">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {Event.eventname}
      </h2>

      <p className="text-gray-600 mb-1">
        <span className="font-semibold">📍 Venue:</span> {Event.venue}
      </p>
      <p className="text-gray-600 mb-1">
        <span className="font-semibold">🕒 Time:</span> {Event.time}
      </p>
      <p className="text-gray-600 mb-3">
        <span className="font-semibold">📅 Date:</span> {Event.date}
      </p>

      <div className="flex gap-3 mt-4">
        <button
          onClick={() => navigate(`/edit/${Event.id}`)}
          className="flex items-center gap-2 bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-200 shadow"
        >
          <Pencil size={16} />
          Edit
        </button>

        <button
          onClick={() => onDelete(Event.id)}
          className="flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg font-semibold transition duration-200 shadow"
        >
          <Trash2 size={16} />
          Delete
        </button>
      </div>
    </div>
  );
}

export default EventCard;

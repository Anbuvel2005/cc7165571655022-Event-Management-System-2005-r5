import { Link, useNavigate } from "react-router-dom";

function EventCard({ Event, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="bg-white shadow-md rounded-xl p-4 text-gray-800">
      <h2 className="text-xl font-semibold">{Event.eventname}</h2>
      <p>
        <strong>Venue:</strong> {Event.venue}
      </p>
      <p>
        <strong>Time:</strong> {Event.time}
      </p>
      <p>
        <strong>Date:</strong> {Event.date}
      </p>

      <div className="mt-4 flex gap-3">
        <button
          onClick={() => navigate(`/edit/${Event.id}`)}
          className="bg-yellow-500 text-white px-3 py-1 rounded"
        >
          Edit
        </button>
        <button
          onClick={() => onDelete(Event.id)}
          className="bg-red-500 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default EventCard;

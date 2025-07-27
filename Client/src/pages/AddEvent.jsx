import { useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm";
import { ArrowLeft } from "lucide-react";

function AddEvent() {
  const navigate = useNavigate();

  const handleAdd = (Event) => {
    const existing = JSON.parse(localStorage.getItem("Events")) || [];
    const updated = [...existing, Event];
    localStorage.setItem("Events", JSON.stringify(updated));
    navigate("/"); // Go back to the main page after adding
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-white to-blue-50 p-6">
      <div className="max-w-xl mx-auto bg-white shadow-xl rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <button
            onClick={() => navigate(-1)}
            className="text-blue-600 hover:underline flex items-center gap-1"
          >
            <ArrowLeft size={18} />
            Back
          </button>
          <h1 className="text-2xl font-bold text-gray-800">Add New Event</h1>
        </div>

        <EventForm onAdd={handleAdd} />
      </div>
    </div>
  );
}

export default AddEvent;

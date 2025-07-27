import { useNavigate } from "react-router-dom";
import EventForm from "../components/EventForm";

function AddEvent() {
  const navigate = useNavigate();

  const handleAdd = (Event) => {
    const existing = JSON.parse(localStorage.getItem("Events")) || [];
    const updated = [...existing, Event];
    localStorage.setItem("Events", JSON.stringify(updated));
    navigate("/");
  };

  return (
    <div>
      <EventForm onAdd={handleAdd} />
    </div>
  );
}

export default AddEvent;

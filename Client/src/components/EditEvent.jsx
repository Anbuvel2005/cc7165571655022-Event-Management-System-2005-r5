import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import EventForm from "../components/EventForm";

function EditEvent() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [eventData, setEventData] = useState(null);

  useEffect(() => {
    const storedEvents = JSON.parse(localStorage.getItem("Events")) || [];
    const foundEvent = storedEvents.find((event) => event.id === parseInt(id));

    if (!foundEvent) {
      navigate("/"); // redirect if event not found
      return;
    }

    setEventData(foundEvent);
  }, [id, navigate]);

  const handleUpdate = (updatedEvent) => {
    updatedEvent.id = parseInt(id); // Ensure the ID stays consistent

    const storedEvents = JSON.parse(localStorage.getItem("Events")) || [];
    const updatedEvents = storedEvents.map((event) =>
      event.id === parseInt(id) ? updatedEvent : event
    );

    localStorage.setItem("Events", JSON.stringify(updatedEvents));
    navigate("/"); // Redirect to home or event list
  };

  return (
    <div>
      {eventData ? (
        <EventForm onAdd={handleUpdate} initialData={eventData} />
      ) : (
        <p>Loading event...</p>
      )}
    </div>
  );
}

export default EditEvent;

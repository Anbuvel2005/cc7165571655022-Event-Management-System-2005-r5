import { useEffect, useState } from "react";
import EventCard from "../components/EventCard";

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
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {Events.length === 0 ? (
        <p>No Events added yet.</p>
      ) : (
        Events.map((s) => (
          <EventCard key={s.id} Event={s} onDelete={handleDelete} />
        ))
      )}
    </div>
  );
}
export default Home;

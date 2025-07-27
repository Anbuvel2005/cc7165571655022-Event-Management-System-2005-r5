import { useState, useEffect } from "react";
function EventForm({ onAdd, initialData }) {
  const [form, setForm] = useState({
    eventname: "",
    venue: "",
    time: "",
    date: "",
  });
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.eventname || !form.venue)
      return alert("EventName & Venue are required");
    onAdd({ ...form, id: initialData?.id || Date.now() });
    setForm({ eventname: "", venue: "", time: "", date: "" });
  };

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);
  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-800 p-6 shadow-md rounded-xl max-w-md mx-auto"
    >
      {" "}
      <h2 className="text-xl font-semibold mb-4">
        {initialData ? "Edit Event" : "Add New Event"}
      </h2>
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="eventname"
        placeholder="EventName"
        value={form.name}
        onChange={handleChange}
      />{" "}
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="venue"
        placeholder="Venue"
        value={form.venue}
        onChange={handleChange}
      />{" "}
      <input
        className="w-full p-2 border mb-3"
        type="number"
        name="time"
        placeholder="Time"
        value={form.time}
        onChange={handleChange}
      />{" "}
      <input
        className="w-full p-2 border mb-3"
        type="text"
        name="date"
        placeholder="date"
        value={form.date}
        onChange={handleChange}
      />{" "}
      <button
        type="submit"
        className="bg-blue-600 text-white py-2 px-4 rounded"
      >
        {initialData ? "Edit Event" : "Add New Event"}
      </button>
    </form>
  );
}
export default EventForm;

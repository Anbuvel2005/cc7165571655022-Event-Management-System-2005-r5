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
      return alert("Event name and venue are required");
    onAdd({ ...form, id: initialData?.id || Date.now() });
    setForm({ eventname: "", venue: "", time: "", date: "" });
  };

  useEffect(() => {
    if (initialData) setForm(initialData);
  }, [initialData]);

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-xl mx-auto mt-10"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        {initialData ? "Edit Event" : "Add New Event"}
      </h2>

      <div className="mb-4">
        <label className="block mb-1 text-gray-700 font-semibold">
          Event Name
        </label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          type="text"
          name="eventname"
          placeholder="Enter event name"
          value={form.eventname}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-gray-700 font-semibold">Venue</label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          type="text"
          name="venue"
          placeholder="Enter venue"
          value={form.venue}
          onChange={handleChange}
        />
      </div>

      <div className="mb-4">
        <label className="block mb-1 text-gray-700 font-semibold">Time</label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          type="number"
          name="time"
          placeholder="e.g. 12.00"
          value={form.time}
          onChange={handleChange}
        />
      </div>

      <div className="mb-6">
        <label className="block mb-1 text-gray-700 font-semibold">Date</label>
        <input
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          type="text"
          name="date"
          placeholder="DD/MM/YYYY"
          value={form.date}
          onChange={handleChange}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition"
      >
        {initialData ? "Update Event" : "Add Event"}
      </button>
    </form>
  );
}

export default EventForm;

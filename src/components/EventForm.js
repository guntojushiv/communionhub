import { useState } from 'react';

const EventForm = ({ addEvent }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && date && category) {
      addEvent({ title, date, category });
      setTitle('');
      setDate('');
      setCategory('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 p-6 bg-white shadow-lg rounded-lg">
      <input type="text" placeholder="Event Title" value={title} onChange={(e) => setTitle(e.target.value)} className="p-2 border rounded w-full mb-2" />
      <input type="date" value={date} onChange={(e) => setDate(e.target.value)} className="p-2 border rounded w-full mb-2" />
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="p-2 border rounded w-full mb-2">
        <option value="">Select Category</option>
        <option value="Religious">Religious</option>
        <option value="Social">Social</option>
        <option value="Charity">Charity</option>
      </select>
      <button className="p-2 bg-green-500 text-white rounded w-full">Add Event</button>
    </form>
  );
};

export default EventForm;

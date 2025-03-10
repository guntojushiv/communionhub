const EventList = ({ events }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {events.map((event, index) => (
        <div key={index} className="p-4 border rounded shadow bg-white">
          <h3 className="text-xl font-bold">{event.title}</h3>
          <p>{event.date}</p>
          <p className="italic text-gray-500">{event.category}</p>
        </div>
      ))}
    </div>
  );
};

export default EventList;
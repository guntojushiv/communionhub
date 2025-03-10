import Header from '../components/Header';
import EventList from '../components/EventList';
import EventForm from '../components/EventForm';
import { useState } from 'react';

const Events = () => {
  const [events, setEvents] = useState([]);

  const addEvent = (event) => {
    setEvents([...events, event]);
  };

  return (
    <div>
      <Header />
      <div className="container mx-auto p-6">
        <EventForm addEvent={addEvent} />
        <EventList events={events} />
      </div>
    </div>
  );
};

export default Events;

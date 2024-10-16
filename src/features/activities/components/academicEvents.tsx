import { Main } from "@/components/ui/main";
import React from "react";

const AcademicEvents: React.FC = () => {
  // Define a date range to filter events
  const startMonth = 3; // March
  const endMonth = 4; // April

  // Get today's date for comparison
  const today = new Date();

  // Define each event's date range
  const events = [
    {
      id: 1,
      title: "Registration Period",
      startDate: new Date(today.getFullYear(), 2, 13), // March 13
      endDate: new Date(today.getFullYear(), 3, 1), // April 1
    },
    {
      id: 2,
      title: "Mid-Semester Break",
      startDate: new Date(today.getFullYear(), 5, 15), // June 15
      endDate: new Date(today.getFullYear(), 5, 19), // June 19
    },
    {
      id: 3,
      title: "Exams",
      startDate: new Date(today.getFullYear(), 4, 15), // May 15
      endDate: new Date(today.getFullYear(), 4, 28), // May 28
    },
  ];

  // Filter events directly based on the start and end month
  const filteredEvents = events.filter((event) => {
    const startEventMonth = event.startDate.getMonth() + 1;
    const endEventMonth = event.endDate.getMonth() + 1;

    return (
      (startEventMonth >= startMonth && startEventMonth <= endMonth) ||
      (endEventMonth >= startMonth && endEventMonth <= endMonth)
    );
  });

  return (
    <Main>
      <div className="p-4 bg-white shadow rounded-lg">
        <h2 className="text-lg font-semibold mb-4">Academic Events</h2>
        {filteredEvents.length > 0 ? (
          <ul className="space-y-2">
            {filteredEvents.map((event) => (
              <li key={event.id} className="border p-3 rounded-md bg-gray-50">
                <h3 className="text-md font-medium">{event.title}</h3>
                <p className="text-sm text-gray-600">
                  {event.startDate.toLocaleDateString()} -{" "}
                  {event.endDate.toLocaleDateString()}
                </p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No events in this date range.</p>
        )}
      </div>
    </Main>
  );
};

export default AcademicEvents;

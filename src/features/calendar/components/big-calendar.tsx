import React, { useState } from "react";
import { Calendar, dateFnsLocalizer, Event } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import { format, parse, startOfWeek, getDay } from "date-fns";
import { enUS, es } from "date-fns/locale";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sheet } from "@/components/ui/sheet";
import { Input } from "@/components/ui/input";

// Configura el localizador de fechas
const locales = {
  enUS: "en",
};
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
});

interface CalendarEvent extends Event {
  title: string;
  start: Date;
  end?: Date; // End date is now optional
  type: "event" | "reminder";
}

const MyCalendar: React.FC = () => {
  //Manejador para crear eventos
  const [events, setEvents] = useState<CalendarEvent[]>([]);
  const [isEventOpen, setIsEventOpen] = useState(false);
  const [newEvent, setNewEvent] = useState<CalendarEvent | null>(null);
  const [isReminder, setIsReminder] = useState(false);

  const showSheetEvent = () => setIsEventOpen(!isEventOpen);

  const showSheetReminder = () => setIsReminder(!isReminder);

  // Manejador para cerrar el sheet
  const handleCloseSheet = () => {
    setIsEventOpen(false);
    setNewEvent(null);
    setIsReminder(false);
  };

  // Manejador para crear un nuevo evento
  const handleCreateEvent = () => {
    if (newEvent && newEvent.title && newEvent.start) {
      // Set end date to start date for reminders to appear as single-point events
      const eventToAdd = {
        ...newEvent,
        end: isReminder ? newEvent.start : newEvent.end,
      };

      setEvents([...events, eventToAdd]);
      setIsEventOpen(false);
      setIsReminder(false);
      setNewEvent(null);
    }
  };
  //Manejadres del recordatorio

  // Manejador para abrir el sheet al seleccionar una fecha o rango
  const handleSelectSlot = (slotInfo: { start: Date; end: Date }) => {
    setNewEvent({
      title: "",
      start: slotInfo.start,
      type: isReminder ? "reminder" : "event",
    });
    setIsEventOpen(true);
  };

  const eventPropGetter = (event: CalendarEvent) => {
    if (event.type === "reminder") {
      return {
        style: { backgroundColor: "#f5a623", color: "white" }, // Styling for reminders
      };
    }
    return {
      style: { backgroundColor: "#3174ad", color: "white" }, // Default styling for events
    };
  };

  return (
    <div className="p-4 bg-white-100 rounded-lg shadow-md">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        defaultView="month"
        views={["month", "week", "day"]}
        onSelectSlot={handleSelectSlot}
        eventPropGetter={eventPropGetter}
        messages={{
          next: "Siguiente",
          previous: "Anterior",
          today: "Hoy",
          month: "Mes",
          week: "Semana",
          day: "Día",
          agenda: "Agenda",
          date: "Fecha",
          time: "Hora",
          event: "Evento",
          noEventsInRange: "No hay eventos en este rango de fechas.",
          showMore: (total) => `+ Ver más (${total})`,
        }}
      />

      <Card className="shadow-lg rounded-lg bg-white/30 backdrop-blur-md border border-white/40 rounded-lg p-6 shadow-lg">
        <CardContent className="items-center p-4 ">
          <Button
            className="event mr-2 ml-2 bg-blue-600"
            onClick={() => setIsEventOpen(true)}
          >
            {" "}
            evento
          </Button>
          <Button
            className="recall mr-2 ml-2 bg-teal-600"
            onClick={() => setIsReminder(true)}
          >
            Recordatorio
          </Button>
        </CardContent>
      </Card>

      {isEventOpen ? (
        <Sheet>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">Crear nuevo evento</h2>

            <Input
              type="text"
              placeholder="Título del evento"
              value={newEvent?.title || ""}
              onChange={(e) =>
                setNewEvent({ ...newEvent!, title: e.target.value })
              }
              className="mb-4"
            />
            {/* Campo para la fecha de inicio */}
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Fecha de inicio
            </label>
            <Input
              type="datetime-local"
              value={
                newEvent?.start ? newEvent.start.toISOString().slice(0, -1) : ""
              }
              onChange={(e) =>
                setNewEvent({ ...newEvent!, start: new Date(e.target.value) })
              }
              className="mb-4"
            />

            {/* Campo para la fecha de fin */}
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Fecha de cierre
            </label>
            <Input
              type="datetime-local"
              value={
                newEvent?.end ? newEvent.end.toISOString().slice(0, -1) : ""
              }
              onChange={(e) =>
                setNewEvent({ ...newEvent!, end: new Date(e.target.value) })
              }
              className="mb-4"
            />
            <div className="flex justify-end">
              <Button onClick={handleCreateEvent} className="mr-2">
                Guardar
              </Button>
              <Button variant="outline" onClick={handleCloseSheet}>
                Cancelar
              </Button>
            </div>
          </div>
        </Sheet>
      ) : (
        <></>
      )}

      {isReminder ? (
        <Sheet>
          <div className="p-6 bg-white rounded-lg shadow-md">
            <h2 className="text-lg font-semibold mb-4">
              Crear nuevo recordatorio
            </h2>

            <Input
              type="text"
              placeholder="Título del evento"
              value={newEvent?.title || ""}
              onChange={(e) =>
                setNewEvent({ ...newEvent!, title: e.target.value })
              }
              className="mb-4"
            />
            {/* Campo para la fecha de inicio */}
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Fecha de inicio
            </label>
            <Input
              type="datetime-local"
              value={
                newEvent?.start ? newEvent.start.toISOString().slice(0, -1) : ""
              }
              onChange={(e) =>
                setNewEvent({
                  ...newEvent!,
                  start: new Date(e.target.value),
                })
              }
              className="mb-4"
            />

            <div className="flex justify-end">
              <Button onClick={handleCreateEvent} className="mr-2">
                Guardar
              </Button>
              <Button variant="outline" onClick={handleCloseSheet}>
                Cancelar
              </Button>
            </div>
          </div>
        </Sheet>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MyCalendar;

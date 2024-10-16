import { Button } from "@/components/ui/button";
import { Main } from "@/components/ui/main";
import React, { useState } from "react";

// Define the Notification type
interface Notification {
  id: number;
  message: string;
  status: "Read" | "Unread";
}

const NotificationsTable: React.FC = () => {
  // Initial state for notifications
  const [notifications, setNotifications] = useState<Notification[]>([
    { id: 1, message: "Llamar a control de estudios", status: "Unread" },
    { id: 2, message: "Meet a las 3 PM", status: "Read" },
    { id: 3, message: "Descargar planillas", status: "Unread" },
  ]);

  // Toggle status between 'Read' and 'Unread'
  const toggleStatus = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.map((notification) =>
        notification.id === id
          ? {
              ...notification,
              status: notification.status === "Read" ? "Unread" : "Read",
            }
          : notification
      )
    );
  };

  // Delete a notification by ID
  const deleteNotification = (id: number) => {
    setNotifications((prevNotifications) =>
      prevNotifications.filter((notification) => notification.id !== id)
    );
  };

  return (
    <Main>
      <br></br>
      <br></br>
      <br></br>
      <div className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-3xl font-semibold md:text-center">
          Notificaciones
        </h1>

        <table className="min-w-full bg-white border rounded-md">
          <thead>
            <tr>
              <th className="py-2 px-4 border-b font-semibold text-left">
                Mensaje
              </th>
              <th className="py-2 px-4 border-b font-semibold text-left">
                Estado
              </th>
              <th className="py-2 px-4 border-b font-semibold">Acción</th>
            </tr>
          </thead>

          <tbody>
            {notifications.length === 0 ? (
              <tr>
                <td colSpan={3} className="py-4 text-center text-gray-500">
                  No hay notificaciones
                </td>
              </tr>
            ) : (
              notifications.map((notification) => (
                <tr key={notification.id} className="hover:bg-gray-100">
                  <td className="py-2 px-4 border-b text-gray-800">
                    {notification.message}
                  </td>
                  <td className="py-2 px-4 border-b">
                    <span
                      className={`inline-block px-2 py-1 text-xs font-semibold rounded-full ${
                        notification.status === "Unread"
                          ? "bg-red-100 text-red-600"
                          : "bg-green-100 text-green-600"
                      }`}
                    >
                      {notification.status}
                    </span>
                  </td>
                  <td className="py-2 px-4 border-b flex justify-center space-x-2">
                    {notification.status === "Unread" ? (
                      <Button
                        onClick={() => toggleStatus(notification.id)}
                        className="text-sm px-3 py-1 bg-blue-600 text-white rounded-md focus:outline-none"
                      >
                        Marcar como leído
                      </Button>
                    ) : (
                      <Button
                        disabled
                        className="text-sm px-3 py-1 bg-gray-600 text-white rounded-md focus:outline-none"
                      >
                        Marcar como leído
                      </Button>
                    )}

                    <Button
                      onClick={() => deleteNotification(notification.id)}
                      className="text-sm px-3 py-1 bg-red-500 text-white rounded-md hover:bg-red-600 focus:outline-none"
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </Main>
  );
};

export default NotificationsTable;

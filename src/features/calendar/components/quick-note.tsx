import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Main } from "@/components/ui/main";
import React, { useState } from "react";

// Define the structure of a Note
interface Note {
  id: number;
  title: string;
  description: string;
}

const QuickNotes: React.FC = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Add a new note
  const addNote = () => {
    if (!title || !description) return;

    const newNote: Note = {
      id: Date.now(),
      title,
      description,
    };

    setNotes([...notes, newNote]);
    setTitle("");
    setDescription("");
  };

  // Delete a note by ID
  const deleteNote = (id: number) => {
    const filteredNotes = notes.filter((note) => note.id !== id);
    setNotes(filteredNotes);
  };

  return (
    <Main className="bg-cover bg-center h-screen">
      <div className="flex p-4 justify-center py-7"></div>
      <div className="p-6 py-6 max-w-md mx-auto bg-white rounded-xl shadow-md space-y-4">
        <h1 className="text-3xl font-semibold md:text-center">Notas rápidas</h1>

        <div className="space-y-2">
          <Input
            type="text"
            placeholder="Título"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />

          <Input
            type="text"
            placeholder="Descripción"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full p-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />

          <Button
            onClick={addNote}
            className="w-full py-2 text-white rounded-md focus:outline-none focus:ring"
          >
            Guardar
          </Button>
        </div>
      </div>

      <div className="mt-6 mb-4 ml-8 mr-8">
        {notes.length === 0 && (
          <p className="text-gray-500">No hay notas creadas.</p>
        )}
        {notes.map((note) => (
          <div
            key={note.id}
            className="p-4 m-10 bg-gray-100 rounded-lg shadow-sm"
          >
            <h3 className="text-lg font-medium text-gray-800">{note.title}</h3>
            <p className="text-gray-700">{note.description}</p>
            <button
              onClick={() => deleteNote(note.id)}
              className="mt-2 text-sm text-red-500"
            >
              Eliminar
            </button>
          </div>
        ))}
      </div>
    </Main>
  );
};

export default QuickNotes;

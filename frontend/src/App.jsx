import { useState } from "react";


function App() {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
        <h1 className="text-3xl font-bold text-blue-600 mb-4 text-center">
          Aplicacion de Tareas
        </h1>
        <p className="text-gray-700 mb-6 text-center">
          Bienvenido a tu aplicación de tareas con React + Tailwind.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full">
          Empezar
        </button>
      </div>
    </div>
  );
}

export default App;

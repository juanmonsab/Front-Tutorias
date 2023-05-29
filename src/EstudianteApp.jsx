import React, { useState } from "react";

export const EstudiantesApp = () => {

    const [estudiantes, setEstudiantes] = useState([]);

    // Estado de la lista de tutorías
    const [tutorias, setTutorias] = useState([]);
  
    // Estado de la pestaña activa
    const [activeTab, setActiveTab] = useState("registroEstudiante");
    const handleAgregarEstudiante = (estudiante) => {
        setEstudiantes([...estudiantes, estudiante]);
      };
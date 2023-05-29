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
    const handleEliminarEstudiante = (id) => {
        const nuevosEstudiantes = estudiantes.filter(
            (estudiante) => estudiante.id !== id
        );
        setEstudiantes(nuevosEstudiantes);

        const nuevasTutorias = tutorias.filter(
            (tutoria) => tutoria.estudiante.id !== id
        );
        setTutorias(nuevasTutorias);
    };
    const handleAgendarTutoria = (tutoria) => {
        setTutorias([...tutorias, tutoria]);
    };
    const handleEliminarTutoria = (tutoriaId) => {
        const nuevasTutorias = tutorias.filter(
          (tutoria) => tutoria.id !== tutoriaId
        );
        setTutorias(nuevasTutorias);
      };
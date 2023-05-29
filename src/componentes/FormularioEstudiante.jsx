import React, { useState } from "react";
import { postEstudiantes } from "../peticiones/postEstudiantes";

export const FormularioEstudiante = ({ agregarEstudiante }) => {
    const [nombre, setNombre] = useState("");
    const [semestre, setSemestre] = useState("");
    const [facultad, setFacultad] = useState("");
    const [habilidades, setHabilidades] = useState("");
    const [diasDisponibles, setDiasDisponibles] = useState([]);
    const [nuevoDia, setNuevoDia] = useState("");
    const [horaInicio, setHoraInicio] = useState("");
    const [horaFin, setHoraFin] = useState("");
    const [programa, setPrograma] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();

        if (nombre.length < 3) {
            alert("El nombre debe tener al menos 3 caracteres.");
            return;
        }

        if (diasDisponibles.length === 0) {
            alert("Debe agregar al menos una disponibilidad.");
            return;
        }

        let estudiante = {
            nombre: nombre,
            semestre: semestre,
            facultad: facultad,
            habilidades: habilidades.split(",").map((habilidad) => habilidad.trim()),
            disponibilidad: diasDisponibles,
            programa: programa,
        };

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

        postEstudiantes(estudiante)
            .then((response) => {
                console.log("Estudiante agregado:", response);
                agregarEstudiante(response);
            })
            .catch((error) => {
                console.error("Error al agregar estudiante:", error);
            });

        setNombre("");
        setSemestre("");
        setFacultad("");
        setHabilidades("");
        setDiasDisponibles([]);
        setPrograma("");
    };

    const handleAgregarDiaHora = () => {
        if (horaFin < horaInicio) {
            alert("La hora de fin no puede ser antes que la hora de inicio.");
            return;
        }

        const horario = `${horaInicio}-${horaFin}`;

        setDiasDisponibles([...diasDisponibles, { dia: nuevoDia, horario }]);

        setNuevoDia("");
        setHoraInicio("");
        setHoraFin("");
    };
    const handleEliminarDiaHora = (index) => {
        const nuevosDiasDisponibles = [...diasDisponibles];
        nuevosDiasDisponibles.splice(index, 1);
        setDiasDisponibles(nuevosDiasDisponibles);
    };

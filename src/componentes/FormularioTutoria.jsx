import React, { useState, useEffect } from "react";
import { getEstudiantes } from "../peticiones/getEstudiantes";
import { postTutorias } from "../peticiones/postTutorias";

export const FormularioTutoria = ({ agendarTutoria }) => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [estudianteSeleccionado, setEstudianteSeleccionado] = useState("");
    const [disponibilidadEstudiante, setDisponibilidadEstudiante] = useState([]);
    const [horariosSeleccionados, setHorariosSeleccionados] = useState([]);

    useEffect(() => {
        const fetchEstudiantes = async () => {
            try {
                const estudiantesData = await getEstudiantes();
                setEstudiantes(estudiantesData);
            } catch (error) {
                console.error("Error al obtener los estudiantes:", error);
            }
        };

        fetchEstudiantes();
    }, []);

    const handleEstudianteChange = (event) => {
        const estudianteCodigo = event.target.value;
        setEstudianteSeleccionado(estudianteCodigo);
        const estudiante = estudiantes.find((estudiante) => estudiante.id === parseInt(estudianteCodigo));
        if (estudiante) {
            setDisponibilidadEstudiante(estudiante.disponibilidad);
            setHorariosSeleccionados([]);
        } else {
            setDisponibilidadEstudiante([]);
            setHorariosSeleccionados([]);
        }
    };

    const handleHorarioChange = (event) => {
        const horario = JSON.parse(event.target.value);
        const horariosActualizados = [...horariosSeleccionados];

        if (event.target.checked) {
            horariosActualizados.push(horario);
        } else {
            const index = horariosActualizados.findIndex(h => h.dia === horario.dia && h.horario === horario.horario);
            if (index !== -1) {
                horariosActualizados.splice(index, 1);
            }
        }

        setHorariosSeleccionados(horariosActualizados);
    };

    setHorariosSeleccionados(horariosActualizados);
};

const handleAgendarTutoria = async () => {
    if (!estudianteSeleccionado) {
        console.error("Selecciona un estudiante");
        return;
    }

    if (horariosSeleccionados.length === 0) {
        console.error("Selecciona al menos un horario");
        return;
    }

    const estudiante = estudiantes.find((estudiante) => estudiante.id === parseInt(estudianteSeleccionado));

    if (!estudiante) {
        console.error("Estudiante no encontrado");
        return;
    }

import React, { useEffect, useState } from "react";
import { getEstudiantes } from "../peticiones/getEstudiantes";
import { deleteEstudiantes } from "../peticiones/deleteEstudiantes";

export const TablaEstudiante = ({ eliminarEstudiante }) => {
    const [estudiantes, setEstudiantes] = useState([]);
    const [mensajeEliminacion, setMensajeEliminacion] = useState("");

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

    const handleEliminarEstudiante = async (id) => {
        try {
            await deleteEstudiantes(id);
            eliminarEstudiante(id);
            setMensajeEliminacion("Estudiante eliminado correctamente.");
        } catch (error) {
            console.error("Error al eliminar el estudiante:", error);
            setMensajeEliminacion("Error al eliminar el estudiante. Por favor, intenta nuevamente.");
        }
    };

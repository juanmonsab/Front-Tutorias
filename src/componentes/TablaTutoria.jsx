import React, { useEffect, useState } from 'react';
import { getTutorias } from '../peticiones/getTutorias';
import { deleteTutoria } from '../peticiones/deleteTutoria';

export const TablaTutoria = () => {
    const [tutorias, setTutorias] = useState([]);

    useEffect(() => {
        const obtenerTutorias = async () => {
            try {
                const tutorias = await getTutorias();
                setTutorias(tutorias);
            } catch (error) {
                console.error('Error al obtener las tutorías:', error);
            }
        };

        obtenerTutorias();
    }, []);
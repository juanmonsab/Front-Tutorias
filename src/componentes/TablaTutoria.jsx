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

    const handleEliminarTutoria = async (codigo) => {
        try {
          await deleteTutoria(codigo);
          const nuevasTutorias = tutorias.filter(tutoria => tutoria.id !== codigo);
          setTutorias(nuevasTutorias);
        } catch (error) {
          console.error('Error al eliminar la sesión:', error);
        }
      };
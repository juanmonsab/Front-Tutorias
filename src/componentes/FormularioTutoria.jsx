import React, { useState, useEffect } from "react";
import { getEstudiantes } from "../peticiones/getEstudiantes";
import { postTutorias } from "../peticiones/postTutorias";

export const FormularioTutoria = ({ agendarTutoria }) => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [estudianteSeleccionado, setEstudianteSeleccionado] = useState("");
  const [disponibilidadEstudiante, setDisponibilidadEstudiante] = useState([]);
  const [horariosSeleccionados, setHorariosSeleccionados] = useState([]);

  
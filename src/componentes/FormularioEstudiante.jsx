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

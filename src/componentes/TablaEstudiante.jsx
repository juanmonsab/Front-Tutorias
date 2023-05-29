import React, { useEffect, useState } from "react";
import { getEstudiantes } from "../peticiones/getEstudiantes";
import { deleteEstudiantes } from "../peticiones/deleteEstudiantes";

export const TablaEstudiante = ({ eliminarEstudiante }) => {
  const [estudiantes, setEstudiantes] = useState([]);
  const [mensajeEliminacion, setMensajeEliminacion] = useState("");

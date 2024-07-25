import { Request, Response } from "express";
import FormData from "../models/formData";

// Función para manejar la creación de datos del formulario
export const createFormData = async (req: Request, res: Response) => {
  try {
    const formData = new FormData(req.body);
    await formData.save();
    res.status(201).json({ message: "Form data saved successfully", formData });
  } catch (error) {
    res.status(400).json({ message: "Error saving form data", error });
  }
};

// Función para manejar la creación de datos del formulario
export const getFormData = async (
  req: Request,
  res: Response
): Promise<void> => {
  const external = req.query.external as string;

  try {
    const users =
      external !== undefined
        ? await fetchExternalData()
        : await fetchDatabaseData();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ message: "Server error", error });
  }
};

// Función para convertir el query param a booleano
const parseBoolean = (value: string | undefined): boolean | undefined => {
  if (value === undefined) return undefined;
  return value.toLowerCase() === "true";
};

// Función para obtener datos con apicall
const fetchExternalData = async () => {
  const url =
    "https://www.datos.gov.co/resource/sq8q-pnf5.json?$query=SELECT%0A%20%20%60orden%60%2C%0A%20%20%60departamento%60%2C%0A%20%20%60municipio%60%2C%0A%20%20%60semana%60%2C%0A%20%20%60a_o%60%2C%0A%20%20%60grupo_edad%60%2C%0A%20%20%60ciclo_de_vida%60%2C%0A%20%20%60sexo_%60%2C%0A%20%20%60area_%60%2C%0A%20%20%60bar_ver_2%60%2C%0A%20%20%60num_nombcom%60%2C%0A%20%20%60tip_ss_%60%2C%0A%20%20%60pac_hos_%60%2C%0A%20%20%60con_fin_%60%2C%0A%20%20%60version%60%2C%0A%20%20%60naturaleza%60%2C%0A%20%20%60def_naturaleza%60%2C%0A%20%20%60actividad%60%2C%0A%20%20%60nom_actividad%60%2C%0A%20%20%60edad_agre%60%2C%0A%20%20%60sexo_agre%60%2C%0A%20%20%60parentezco_vict%60%2C%0A%20%20%60sust_vict%60%2C%0A%20%20%60fec_hecho%60%2C%0A%20%20%60hora_hecho%60%2C%0A%20%20%60escenario%60%2C%0A%20%20%60zona_conf%60%2C%0A%20%20%60nom_eve%60%2C%0A%20%20%60nom_upgd%60%2C%0A%20%20%60ndep_resi%60%2C%0A%20%20%60nmun_resi%60%2C%0A%20%20%60mes%60";

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`HTTP error! status: ${response.status}`);
  }

  return await response.json();
};

// Función para obtener datos de la base de datos
const fetchDatabaseData = async () => {
  return await FormData.find().select("-_id"); // Excluye el campo id;
};

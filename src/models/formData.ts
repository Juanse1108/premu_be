import mongoose, { Schema, Document } from 'mongoose';

interface IFormData extends Document {
    orden: string;
    departamento: string;
    municipio: string;
    semana: string;
    a_o: string;
    grupo_edad: string;
    ciclo_de_vida: string;
    sexo_: string;
    area_: string;
    bar_ver_2: string;
    num_nombcom: string;
    tip_ss_: string;
    pac_hos_: string;
    con_fin_: string;
    version: string;
    naturaleza: string;
    def_naturaleza: string;
    actividad: string;
    nom_actividad: string;
    edad_agre: string;
    sexo_agre: string;
    parentezco_vict: string;
    sust_vict: string;
    fec_hecho: string;
    hora_hecho: string;
    escenario: string;
    zona_conf: string;
    nom_eve: string;
    nom_upgd: string;
    ndep_resi: string;
    nmun_resi: string;
    mes: string;
}

const FormDataSchema: Schema = new Schema({
    orden: String,
    departamento: String,
    municipio: String,
    semana: String,
    a_o: String,
    grupo_edad: String,
    ciclo_de_vida: String,
    sexo_: String,
    area_: String,
    bar_ver_2: String,
    num_nombcom: String,
    tip_ss_: String,
    pac_hos_: String,
    con_fin_: String,
    version: String,
    naturaleza: String,
    def_naturaleza: String,
    actividad: String,
    nom_actividad: String,
    edad_agre: String,
    sexo_agre: String,
    parentezco_vict: String,
    sust_vict: String,
    fec_hecho: String,
    hora_hecho: String,
    escenario: String,
    zona_conf: String,
    nom_eve: String,
    nom_upgd: String,
    ndep_resi: String,
    nmun_resi: String,
    mes: String
});

export default mongoose.model<IFormData>('FormData', FormDataSchema);
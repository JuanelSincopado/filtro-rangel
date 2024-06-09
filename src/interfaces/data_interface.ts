export interface DataInterface {
  error: null;
  data: Datum[];
  count: null;
  status: number;
  statusText: string;
}

export interface Datum {
  id: number;
  created_at: Date;
  especialidad: string;
  cups_norma: string;
  cups_interno: string;
  descripcion: string;
  plan_salud: string;
  observaciones: string;
}

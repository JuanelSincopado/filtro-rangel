import { SpecialtyInterface } from "../../domain/entities/specialty_interface";

export interface ApiSpecialtyModel {
  created_at: Date;
  especialidad: string;
  cups_norma: string;
  descripcion: string;
  plan_salud: string;
  observaciones: string;
  id: number;
}

export class Convert {
  public static toAPISpecialtyModel(json: string): ApiSpecialtyModel {
    return JSON.parse(json);
  }

  public static aPISpecialtyModelToJson(value: ApiSpecialtyModel): string {
    return JSON.stringify(value);
  }

  public static toSpecialtyInterface(
    model: ApiSpecialtyModel
  ): SpecialtyInterface {
    return {
      created_at: model.created_at,
      cups_norma: model.cups_norma,
      descripcion: model.descripcion,
      especialidad: model.especialidad,
      id: model.id,
      observaciones: model.observaciones,
      plan_salud: model.plan_salud,
    };
  }

  public static toSpecialtyInterfaceArray(
    models: ApiSpecialtyModel[]
  ): SpecialtyInterface[] {
    return models.map(Convert.toSpecialtyInterface);
  }
}

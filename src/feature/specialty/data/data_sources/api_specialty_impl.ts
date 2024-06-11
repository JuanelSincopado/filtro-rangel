import supabase from "../../../../config/supabase";
import {
  DataFailed,
  DataState,
  DataSuccess,
} from "../../../../core/resources/data_state";
import SpecialtyDataSource from "../../domain/data_sources/specialty_data_source";
import { SpecialtyInterface } from "../../domain/entities/specialty_interface";
import { ApiSpecialtyModel, Convert } from "../models/api_specialty_model";

class ApiSpecialtyImpl implements SpecialtyDataSource {
  async getAllSpecialties(): Promise<DataState<SpecialtyInterface[]>> {
    try {
      const { data, error, status } = await supabase.from("data").select("*");

      if (error) {
        if (status === 401) {
          return new DataFailed("Unauthorized");
        } else if (status === 404) {
          return new DataFailed("Not Found");
        } else {
          return new DataFailed("Server Error");
        }
      }

      const apiSpecialtiesArray: ApiSpecialtyModel[] =
        data as ApiSpecialtyModel[];

      const specialtyArray: SpecialtyInterface[] =
        Convert.toSpecialtyInterfaceArray(apiSpecialtiesArray);

      return new DataSuccess(specialtyArray);
    } catch (error) {
      return new DataFailed("Server Error");
    }
  }
}

export default ApiSpecialtyImpl;

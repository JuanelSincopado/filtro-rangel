import { DataState } from "../../../../core/resources/data_state";
import { SpecialtyInterface } from "../entities/specialty_interface";

abstract class SpecialtyDataSource {
  abstract getAllSpecialties(): Promise<DataState<SpecialtyInterface[]>>;
}

export default SpecialtyDataSource;

import { DataState } from "../../../../core/resources/data_state";
import { SpecialtyInterface } from "../entities/specialty_interface";

abstract class SpecialtyRepository {
  abstract getAllSpecialties(): Promise<DataState<SpecialtyInterface[]>>;
}

export default SpecialtyRepository;

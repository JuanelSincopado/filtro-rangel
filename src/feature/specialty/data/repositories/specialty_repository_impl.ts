import { DataState } from "../../../../core/resources/data_state";
import SpecialtyDataSource from "../../domain/data_sources/specialty_data_source";
import { SpecialtyInterface } from "../../domain/entities/specialty_interface";
import SpecialtyRepository from "../../domain/repositories/specialty_repository";

class SpecialtyRepositoryImpl implements SpecialtyRepository {
  private dataSource: SpecialtyDataSource;

  constructor(dataSource: SpecialtyDataSource) {
    this.dataSource = dataSource;
  }

  async getAllSpecialties(): Promise<DataState<SpecialtyInterface[]>> {
    return this.dataSource.getAllSpecialties();
  }
}

export default SpecialtyRepositoryImpl;

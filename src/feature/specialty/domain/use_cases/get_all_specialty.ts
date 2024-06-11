import { DataState } from "../../../../core/resources/data_state";
import { UseCase } from "../../../../core/use_cases/use_case";
import { SpecialtyInterface } from "../entities/specialty_interface";
import SpecialtyRepository from "../repositories/specialty_repository";

export class GetAllSpecialties
  implements UseCase<DataState<SpecialtyInterface[]>, void>
{
  private repository: SpecialtyRepository;

  constructor(repository: SpecialtyRepository) {
    this.repository = repository;
  }

  async call(): Promise<DataState<SpecialtyInterface[]>> {
    return this.repository.getAllSpecialties();
  }
}

import { Datum } from "../interfaces/data_interface"

interface State {
  data: Datum[],
  filter: Datum[],
  loading: boolean,
  getData: () => void
  searchByCups: (value: string) => void
  searchByDescription: (value: string) => void
  searchByObservation: (value: string) => void
}

export default State;
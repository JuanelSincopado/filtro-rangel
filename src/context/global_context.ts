import { createContext } from "react"
import State from "./interface_state";

export const defaultState = {
  data: [] as State['data'],
  filter: [] as State['filter'],
  loading: false as State['loading'],
  getData: () => { },
  searchByCups: () => { },
  searchByDescription: () => { },
  searchByObservation: () => { }
}

const GlobalContext = createContext<State>(defaultState)

export default GlobalContext;
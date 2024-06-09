import { useState } from 'react'
import supabase from '../config/supabase'
import State from './interface_state'
import GlobalContext from './global_context'

interface Props {
  children: React.ReactNode
}

const GlobalState = ({ children }: Props) => {
  const [data, setData] = useState<State['data']>([])
  const [filter, setFilter] = useState<State['filter']>([])

  const [loading, setLoading] = useState<State['loading']>(false)

  const getData = async () => {
    setLoading(true)

    try {
      const response = await supabase.from('data').select('*')

      if (response.error) {
        throw response.error
      }

      setData(response.data)
      setFilter(response.data)

      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  const searchByCups = (value: string) => {
    if (value === '') {
      setFilter(data)
    } else {
      const result = data.filter((item) => {
        return item.cups_norma.toLowerCase().includes(value.toLowerCase())
      })

      setFilter(result)
    }
  }

  const searchByDescription = (value: string) => {
    if (value === '') {
      setFilter(data)
    } else {
      const result = data.filter((item) => {
        return item.descripcion.toLowerCase().includes(value.toLowerCase())
      })

      setFilter(result)
    }
  }

  const searchByObservation = (value: string) => {
    if (value === '') {
      setFilter(data)
    } else {
      const result = data.filter((item) => {
        return item.observaciones.toLowerCase().includes(value.toLowerCase())
      })

      setFilter(result)
    }
  }

  return (
    <GlobalContext.Provider
      value={{
        data,
        filter,
        loading,
        getData,
        searchByCups,
        searchByDescription,
        searchByObservation,
      }}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalState

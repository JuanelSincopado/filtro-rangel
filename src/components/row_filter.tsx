import { useContext, useState } from 'react'
import GlobalContext from '../context/global_context'

const RowFilter = () => {
  const { searchByCups, searchByDescription, searchByObservation } =
    useContext(GlobalContext)

  const [cups, setCups] = useState<string>('')
  const [description, setDescription] = useState<string>('')
  const [observation, setObservation] = useState<string>('')

  const handleSearchCups = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchByCups(e.target.value)
    setCups(e.target.value)

    setDescription('')
    setObservation('')
  }

  const handleSearchDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    searchByDescription(e.target.value)
    setDescription(e.target.value)

    setCups('')
    setObservation('')
  }

  const handleSearchObservation = (e: React.ChangeEvent<HTMLInputElement>) => {
    setObservation(e.target.value)
    searchByObservation(e.target.value)

    setCups('')
    setDescription('')
  }

  return (
    <div className='filter__container'>
      <div className='filter__item'>
        <label htmlFor='filter'>CUPS NORMA</label>
        <input
          type='number'
          id='filter'
          onChange={handleSearchCups}
          value={cups}
        />
      </div>

      <div className='filter__item'>
        <label htmlFor='filter'>DESCRIPCION</label>
        <input
          type='text'
          id='filter'
          onChange={handleSearchDescription}
          value={description}
        />
      </div>

      <div className='filter__item'>
        <label htmlFor='filter'>OBSERVACION</label>
        <input
          type='text'
          id='filter'
          value={observation}
          onChange={handleSearchObservation}
        />
      </div>
    </div>
  )
}

export default RowFilter

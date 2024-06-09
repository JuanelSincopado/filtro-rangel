import { useContext } from 'react'
import GlobalContext from '../context/global_context'

const Table = () => {
  const { filter, loading } = useContext(GlobalContext)

  if (loading) {
    return (
      <div className='loader_container'>
        <span className='loader'></span>
      </div>
    )
  }

  return (
    <table>
      <thead>
        <tr>
          <th>ESPECIALIDAD</th>
          <th>CUPS NORMA </th>
          <th>CUPS INTERNO</th>
          <th>DESCRIPCION</th>
          <th>PLAN DE SALUD</th>
          <th>OBSERVACION</th>
        </tr>
      </thead>
      <tbody>
        {filter.map((item) => (
          <tr key={item.id}>
            <td>{item.especialidad}</td>
            <td>{item.cups_norma}</td>
            <td>{item.cups_interno}</td>
            <td>{item.descripcion}</td>
            <td>{item.plan_salud}</td>
            <td>{item.observaciones}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

export default Table

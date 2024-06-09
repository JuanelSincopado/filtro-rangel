import { useContext, useEffect } from 'react'
import CustomHeader from './components/header'
import RowFilter from './components/row_filter'
import Table from './components/table'
import GlobalContext from './context/global_context'

function App() {
  const { getData } = useContext(GlobalContext)

  useEffect(() => {
    getData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <>
      <CustomHeader />

      <RowFilter />

      <Table />
    </>
  )
}

export default App

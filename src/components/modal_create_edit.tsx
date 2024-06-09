const ModalCreateOrEdit = () => {
  return (
    <div className='modal'>
      <div className='modal__container'>
        <div className='modal__header'>
          <h2 className='modal__title'>Crear o editar</h2>
          <button className='modal__close'>X</button>
        </div>

        <div className='modal__body'>
          <div className='modal__item'>
            <label htmlFor='cups'>CUPS NORMA</label>
            <input type='number' id='cups' />
          </div>

          <div className='modal__item'>
            <label htmlFor='description'>DESCRIPCION</label>
            <input type='text' id='description' />
          </div>

          <div className='modal__item'>
            <label htmlFor='observation'>OBSERVACION</label>
            <input type='text' id='observation' />
          </div>
        </div>

        <div className='modal__footer'>
          <button className='modal__button'>Guardar</button>
        </div>
      </div>
    </div>
  )
}

export default ModalCreateOrEdit
